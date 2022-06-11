import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

import { getCityLinks, getOtelLinks, getOtelDetail, createExcel } from 'utils';
dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  console.log('started collecting');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageURL = `${mainUrl}/mugla-otelleri-telefon.html`;
  await page.goto(pageURL);

  // console.log('started collecting city links');

  // const cityLinks = await getCityLinks({ page });
  // console.log('successfully collected city links');

  // console.log('started collecting otel details');
  // for (const cityUrl of cityLinks) {
  //   const cityName = cityUrl.split('-')[1];

  //   console.log(`started collecting ${cityName} `);
  //   const otelLinks = await getOtelLinks({
  //     page,
  //     cityUrl
  //   });
  //   console.log(`successfully collected ${cityName}s otel links `);

  //   for (const otelUrl of otelLinks) {
  //     const otelName = otelUrl.split('-telefon')[0];

  //     const otelDetail = await getOtelDetail({
  //       page,
  //       otelUrl,
  //       otelLocation: cityName
  //     });
  //     // const otelInfos = otelDetail.replace('\n', '');
  //     console.log({ location: cityName, otelName, otelDetail });
  //   }
  // }

  const otelDetail = await getOtelDetail({
    page,
    otelUrl: 'adres-3461-telefon-iletisim.html',
    otelLocation: 'akyaka'
  });

  console.log('successflully collected otel detail');

  await browser.close();
  console.log('finished collecting');

  // console.log('creating excel file from collected data');
  // createExcel();
  // console.log('excel file is created');
};;

app();
