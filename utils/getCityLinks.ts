import { Page, ElementHandle } from 'puppeteer';

interface CityLinks {
  page: Page;
}

/**
 * Sayfayı gezer ve `.pr-card-link` classındaki elementleri tarar
 * denk gelen elementlerin href attributelarındaki değerleri döner.
 */

const getCityLinks = async ({
  page
}: CityLinks): Promise<ElementHandle<string[]>> => {
  const cardLinks = await page.$$eval('.pr-card-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );

  return cardLinks;
};

export default getCityLinks;
