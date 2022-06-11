import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

import {
  getCityLinks,
  getOtelLinks,
  getOtelDetail,
  createExcel,
  logger
} from 'utils';
import { DetailProps } from 'types';

dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  const data: DetailProps[] = [];
  // console.log('started collecting');
  logger({ logType: 'warn', content: 'started collecting' });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageURL = `${mainUrl}/mugla-otelleri-telefon.html`;
  await page.goto(pageURL);

  logger({ logType: 'warn', content: 'started collecting city links!' });
  const cityLinks = await getCityLinks({ page });
  logger({ logType: 'success', content: 'successfully collected city links' });

  logger({ logType: 'warn', content: 'started collecting otel details' });
  for (const cityUrl of cityLinks) {
    const cityName = cityUrl.split('-')[1];

    logger({ logType: 'warn', content: `collecting ${cityName}'s links` });
    const otelLinks = await getOtelLinks({
      page,
      cityUrl
    });
    logger({
      logType: 'success',
      content: `successfully collected ${cityName}s otel links`
    });

    for (const otelUrl of otelLinks) {
      const otelName = otelUrl.split('-telefon')[0];
      logger({
        logType: 'warn',
        content: `collecting details for ${otelName}`
      });

      const otelDetail = await getOtelDetail({
        page,
        otelUrl,
        otelLocation: cityName
      });
      data.push(otelDetail);

      logger({
        logType: 'success',
        content: `successfully collected data for ${otelName}`
      });
    }
  }

  await browser.close();
  console.log(data);
  logger({ logType: 'success', content: 'finished collecting data' });

  // console.log('creating excel file from collected data');
  // createExcel();
  // console.log('excel file is created');
};

app();
