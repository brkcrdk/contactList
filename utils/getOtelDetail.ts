import { Page } from 'puppeteer';
import { createWorker } from 'tesseract.js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

interface OtelDetail {
  page: Page;
  otelUrl: string;
  otelName: string;
}

const mainUrl = process.env.WEB_PAGE;
/**
 * Gelen otel url'inden otel bilgilerinin bulunduğu resmi bulur
 * O resmi local dosya olarak kaydettikten sonra,¨ `tesseract` ile
 * resimdeki yazıları texte çevirir ve bu texti return eder.
 * Sonrasında da bu resmi `fs` ile siler.
 */
const getOtelDetail = async ({ page, otelUrl, otelName }: OtelDetail) => {
  const worker = createWorker();
  const computedUrl = `${mainUrl}/${otelUrl}`;

  await page.goto(computedUrl);
  const imgElement = await page.$('.pr-card > img');

  const imgName = `${otelName}.png`;
  await imgElement?.screenshot({ path: imgName });

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  const data = await worker.recognize(imgName);
  await worker.terminate();

  fs.unlink(imgName, (err) => {
    if (err) {
      console.log('couldnt delete this');
    } else {
      console.log('x has been deleted');
    }
  });
  return data.data.text;
};

export default getOtelDetail;
