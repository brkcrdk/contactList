import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import fs from 'fs';

import { getCityLinks, getOtelLinks, getOtelDetail, imgToText } from 'utils';
dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  console.log('started to collecting');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageURL = `${mainUrl}/mugla-otelleri-telefon.html`;
  await page.goto(pageURL);

  // const cityLinks = await getCityLinks({ page });

  // console.log(cityLinks);

  // console.log('started collecting otel links');
  // const otelLinks = await getOtelLinks({
  //   page,
  //   cityUrl: 'mugla-dalyan-otelleri-iletisim.html'
  // });

  // console.log(otelLinks);

  // console.log('succesfully collected otel links!');

  console.log('started collecting otel detail');

  // const otelDetail = await getOtelDetail({
  //   page,
  //   otelUrl: 'hotel-metin-telefon-iletisim.html'
  // });

  // await otelDetail?.screenshot({ path: 'x.png' });
  // const base64Test = fs.readFileSync('x.png', 'base64');
  // console.log(base64Test);

  const imgText = imgToText();

  console.log('successflully collected otel detail');

  await browser.close();
  console.log('finished collecting');
};

app();
