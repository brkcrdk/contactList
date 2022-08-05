import { Browser } from 'puppeteer';
import { DetailProps } from 'types';

interface InformationsProps {
  browser: Browser;
  cityUrl: string;
}

const getInformations = async ({ browser, cityUrl }: InformationsProps) => {
  const data: DetailProps[] = [];
  const counter = 0;

  const page = await browser.newPage();
  return cityUrl;
};

export default getInformations;
