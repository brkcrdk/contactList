/**
 * İletişim bilgilerinin olduğu resim textleri dönüyor fakat şöyle durumlar
 * gerçekleşebiliyor:
 * - İletişim bilgisi olmayan durumlar oluyor,
 * - Gereksiz boşluklar olabiliyor,
 * - Bilgilerin arasında da boşluklar gelebiliyor.
 *
 * Bu function bu gibi durumları düzenler ve varsa sadece, telefon ve email
 * bilgilerini return eder
 */

interface Details {
  phoneNumber: string;
  email: string;
}

const beautifyText = (text: string): Details => {
  /**
   * Boşlukları siler ve içerisinden sadece email ve telefon alanlarını alır
   */
  const details = text
    .split('\n')
    .filter((string) => string.includes('E-mail') || string.includes('Tel'));

  const customDetails = details.map((detail) =>
    detail.replace(/[^a-zA-Z0-9]/, '').replace('-', '')
  );

  /**
   * Yazılış formatı: Tel.: - 05123131313 veya Tel. - 05123131123
   * Boşlukları temizler ve içerisinden sadece telefon numarasını return eder.
   */
  const phoneNumber = details.find((val) => val.includes('Tel'))?.split('-')[1];

  const email = details.find((val) => val.includes('E-mail'))?.split(':')[1];
  console.log({ customDetails });

  return { email: '', phoneNumber: phoneNumber || '' };
};

export default beautifyText;
