import { Browser } from 'puppeteer';
import { DetailProps } from 'types';
import getCityLinks from './getCityLinks';
import logger from './logger';

interface InformationsProps {
  browser: Browser;
  cityUrl: string;
}

const getInformations = async ({ browser, cityUrl }: InformationsProps) => {
  const data: DetailProps[] = [];
  const counter = 0;

  logger({
    logType: 'warn',
    content: `started collecting town links for ${cityUrl}`
  });
  const townLinks = await getCityLinks({ browser, goTo: cityUrl });
  logger({
    logType: 'warn',
    content: `successfully collected town links for ${cityUrl}`
  });

  return townLinks;
};

export default getInformations;
