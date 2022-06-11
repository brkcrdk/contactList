import { utils, writeFile } from 'xlsx';
const dummyData = [
  {
    firstName: 'Burak',
    lastName: 'Çardak'
  },
  {
    firstName: 'Murat',
    lastName: 'Çardak'
  }
];

/**
 * Json halinde gelen veriyi, xlsx formatına çevirir ve
 * İletişim bilgilerinin bulunduğu bir excel dosyası oluşturur.
 */
const createCSV = () => {
  const worksheet = utils.json_to_sheet(dummyData);

  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Contact Informations');
  writeFile(workbook, 'ContactDetails.xlsx');
};

export default createCSV;
