import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

dotenv.config();

const mainUrl = process.env.WEB_PAGE;

const test = async () => {
  console.log('started to collecting');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const pageURL = String(`${mainUrl}/mugla-otelleri-telefon.html`);
  await page.goto(pageURL);

  const cardLinks = await page.$$eval('.pr-card-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );
  console.log(cardLinks);

  page.goto(`${mainUrl}/mugla-akyaka-otelleri-iletisim.html`);

  // for (let i = 0; i < cardLinks.length; i++) {
  //   // const properties = await cardLinks[i]
  //   console.log(cardLinks[i]);
  // }

  // await browser.close();
  console.log('finished collecting');
};

test();
