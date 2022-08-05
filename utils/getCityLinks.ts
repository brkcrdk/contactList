import { Browser } from 'puppeteer';

/**
 * It gets puppeteer instance as a browser and creates a new page with that
 * After that it goes our target url and search through city cards and closes the page.
 * Then returns city names.
 *
 * NOTE: This function could also works for town link beacuse they work with same structure
 * so we will be using this function for getting both city and town links
 */
const getCityLinks = async (browser: Browser): Promise<string[]> => {
  const mainUrl = process.env.WEB_PAGE;
  const page = await browser.newPage();

  await page.goto(String(mainUrl));

  const cityLinks = await page.$$eval('.pr-card-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );

  const cityNames = cityLinks.toString().split(',');

  page.close();

  return cityNames;
};

export default getCityLinks;
