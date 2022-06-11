import { Page } from 'puppeteer';
import { createWorker } from 'tesseract.js';
import dotenv from 'dotenv';
import fs from 'fs';
import beautifyText from './beautifyText';
import { DetailProps } from 'types';

dotenv.config();

interface OtelDetail {
  page: Page;
  otelUrl: string;
  otelLocation: string;
}

const mainUrl = process.env.WEB_PAGE;
/**
 * Gelen otel url'inden otel bilgilerinin bulunduğu resmi bulur
 * O resmi local dosya olarak kaydettikten sonra, `tesseract` ile
 * resimdeki yazıları texte çevirir ve bu textten aldığı bilgileri return eder.
 * Sonrasında da bu resmi `fs` ile siler.
 */
const getOtelDetail = async ({
  page,
  otelUrl,
  otelLocation
}: OtelDetail): Promise<DetailProps> => {
  const otelName = otelUrl.split('-telefon')[0];

  const worker = createWorker();
  const computedUrl = `${mainUrl}/${otelUrl}`;

  await page.goto(computedUrl);
  const imgElement = await page.$('.pr-card > img');

  const imgName = `${otelName}.png`;
  await imgElement?.screenshot({ path: imgName });

  if (imgElement) {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const data = await worker.recognize(imgName);
    await worker.terminate();

    fs.unlink(imgName, (err) => {
      if (err) {
        console.log(`couldnt delete ${imgName}`);
      }
    });
    const { email, phoneNumber } = beautifyText(data.data.text);
    return {
      otelLocation,
      otelName,
      email,
      phoneNumber
    };
  } else {
    return {
      otelLocation,
      otelName,
      email: '-',
      phoneNumber: '-'
    };
  }
};

export default getOtelDetail;
