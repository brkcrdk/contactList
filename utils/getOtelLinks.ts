import { Page, ElementHandle } from 'puppeteer';
import dotenv from 'dotenv';

dotenv.config();

interface OtelLinks {
  page: Page;
  cityUrl: string;
}

const mainUrl = process.env.WEB_PAGE;

/**
 * Verdiğimiz şehrin url'ine giderek orada `pr-link` classındaki
 * elementleri tarar. Buradan o şehre ait otel listesini çıkarmış olur.
 * Topladığı elementlerin href attribute'ından alarak bu otellerin link listesini
 * dönmüş olur.
 */

const getOtelLinks = async ({
  page,
  cityUrl
}: OtelLinks): Promise<ElementHandle<string[]>> => {
  await page.goto(`${mainUrl}/${cityUrl}`);

  const otelLinks = await page.$$eval('.pr-link', (nodes) =>
    nodes.map((val) => val.getAttribute('href'))
  );

  return otelLinks;
};

export default getOtelLinks;
