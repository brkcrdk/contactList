import { Page, ElementHandle } from 'puppeteer';

interface CityLinks {
  page: Page;
}

/**
 * Sayfayı gezer ve `.pr-card-link` classındaki elementleri tarar
 * denk gelen elementlerin href attributelarındaki değerleri döner.
 * Bu dönen değer `ElementHandle` olduğu için array gibi kullanılamaz.
 * Array'e çevirmek için ilk olarak dönen değeri string'e çevirmek gerekli
 * Ardından, stringi split ederek kendi arrayimizi oluşturmuş oluyoruz
 */

const getCityLinks = async ({ page }: CityLinks): Promise<string[]> => {
  const cityLinks = await page.$$eval('.pr-card-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );

  return cityLinks.toString().split(',');
};

export default getCityLinks;
