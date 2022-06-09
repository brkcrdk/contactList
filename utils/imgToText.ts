import { createWorker } from 'tesseract.js';

interface ImgToText {
  imgUrl: string;
}

const worker = createWorker({
  logger: (m) => console.log(m)
});
/**
 * Verilen resimdeki textleri döner
 */
const imgToText = async ({ imgUrl }: ImgToText) => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {
    data: { text }
  } = await worker.recognize(imgUrl);
  console.log(text);
  await worker.terminate();
  return 'xx';
};

export default imgToText;
