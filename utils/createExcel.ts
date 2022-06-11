import { utils, writeFile } from 'xlsx';
import { DetailProps } from 'types';

/**
 * Json halinde gelen veriyi, xlsx formatına çevirir ve
 * İletişim bilgilerinin bulunduğu bir excel dosyası oluşturur.
 */
const createCSV = (data: DetailProps[]) => {
  const worksheet = utils.json_to_sheet(data);

  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Contact Informations');
  writeFile(workbook, 'ContactDetails.xlsx');
};

export default createCSV;
