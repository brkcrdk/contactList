import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import fs from 'fs';

import {
  getCityLinks,
  getOtelLinks,
  getOtelDetail,
  createExcel,
  getCityInformations,
  logger
} from 'utils';
import { DetailProps } from 'types';

dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  logger({ logType: 'warn', content: 'started collecting' });
  const browser = await puppeteer.launch();

  logger({ logType: 'warn', content: 'started collecting city names' });
  const cities = await getCityLinks(browser);
  logger({ logType: 'success', content: 'successfully collected city names' });

  for (const city of cities) {
    const test = await getCityInformations({ browser, cityUrl: city });
    console.log(test);
  }

  await browser.close();
};

app();
