import { Page } from 'puppeteer';
import dotenv from 'dotenv';
dotenv.config();

interface OtelDetail {
  page: Page;
  otelUrl: string;
}

const mainUrl = process.env.WEB_PAGE;
/**
 * Gelen otel url'inden otel bilgilerinin bulunduğu resmi bulur
 * ve o resmi return eder
 */
const getOtelDetail = async ({ page, otelUrl }: OtelDetail) => {
  const computedUrl = `${mainUrl}/${otelUrl}`;
  await page.goto(computedUrl);
  const imgElement = await page.$('.pr-card > img');

  return imgElement;
};

export default getOtelDetail;
