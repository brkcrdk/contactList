import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import { getCityLinks } from 'utils';
dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  console.log('started to collecting');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageURL = `${mainUrl}/mugla-otelleri-telefon.html`;
  await page.goto(pageURL);

  const cityLinks = await getCityLinks({ page });

  console.log(cityLinks);

  await browser.close();
  console.log('finished collecting');
};

app();
