import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

import { getCityLinks, getOtelLinks, getOtelDetail } from 'utils';
dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const app = async () => {
  console.log('started to collecting');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageURL = `${mainUrl}/mugla-otelleri-telefon.html`;
  await page.goto(pageURL);

  console.log('started collecting city links');

  const cityLinks = await getCityLinks({ page });
  console.log(cityLinks);
  console.log('successfully collected city links');

  console.log('started collecting otel details');
  for (const cityUrl of cityLinks) {
    const cityName = cityUrl.split('-')[1];
    console.log(`started collecting ${cityName} `);
    const otelLinks = await getOtelLinks({
      page,
      cityUrl
    });

    console.log(otelLinks);
    console.log(`successfully collected ${cityName}s otel links `);
  }

  console.log('successflully collected otel detail');

  // console.log(cityLinks);

  // console.log('started collecting otel links');
  // const otelLinks = await getOtelLinks({
  //   page,
  //   cityUrl: 'mugla-dalyan-otelleri-iletisim.html'
  // });

  // console.log(otelLinks);

  // console.log('succesfully collected otel links!');

  // const otelDetail = await getOtelDetail({
  //   page,
  //   otelUrl: 'hotel-metin-telefon-iletisim.html'
  // });
  // console.log(otelDetail);

  // await otelDetail?.screenshot({ path: 'x.png' });

  // const imgText = await imgToText({ imgUrl: 'x.png' });
  // fs.unlink('x.png', (err) => {
  //   if (err) {
  //     console.log('couldnt delete this');
  //   } else {
  //     console.log('x has been deleted');
  //   }
  // });

  await browser.close();
  console.log('finished collecting');
};;

app();
