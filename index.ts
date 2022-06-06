import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

dotenv.config();

const test = async () => {
  console.log('started to collecting');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(String(process.env.WEB_PAGE));

  const element = await page.$$('.pr-card');

  // element.forEach(async (el) => {
  //   await el.click();
  // });

  for (let i = 0; i < element.length; i++) {
    await element[i].click();
  }

  // await browser.close();
  console.log('finished collecting');
};

test();
