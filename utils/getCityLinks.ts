import { Browser } from 'puppeteer';

/**
 * It gets puppeteer instance as a browser and creates a new page with that
 * After that it goes our target url and search through city/town cards and closes the page.
 * Then returns city/town names.
 *
 * NOTE: This function could work for collecting city and town links because both page made with same
 * structure so we will be using this function for getting both city and town links.
 *
 * If we dont give goTo link it will get city links
 * But if we give goTo link which city link, it will collect town links
 */

interface CityLinksProps {
  browser: Browser;
  goTo?: string;
}

const getCityLinks = async ({
  browser,
  goTo = ''
}: CityLinksProps): Promise<string[]> => {
  const mainUrl = process.env.WEB_PAGE;
  const page = await browser.newPage();

  await page.goto(`${mainUrl}/${goTo}`);

  const cityLinks = await page.$$eval('.pr-card-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );

  const cityNames = cityLinks.toString().split(',');

  page.close();

  return cityNames;
};

export default getCityLinks;
