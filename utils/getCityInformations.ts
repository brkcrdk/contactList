import { Browser } from 'puppeteer';
import { DetailProps } from 'types';
import getCityLinks from './getCityLinks';
import logger from './logger';

interface InformationsProps {
  browser: Browser;
  cityUrl: string;
  updateOtelCount: () => void;
}

const getInformations = async ({
  browser,
  cityUrl,
  updateOtelCount
}: InformationsProps) => {
  const data: DetailProps[] = [];
  const counter = 0;

  const cityName = cityUrl.split('-')[1];
  logger({
    logType: 'warn',
    content: `started collecting town links for ${cityName}`
  });
  const townLinks = await getCityLinks({ browser, goTo: cityUrl });
  updateOtelCount();
  logger({
    logType: 'warn',
    content: `successfully collected town links for ${cityName}`
  });
  return townLinks;
};

export default getInformations;
