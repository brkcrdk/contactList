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

  const customDetails = details.map((value) => {
    const detail = value.replace(/[^a-zA-Z0-9]/, '');
    if (detail.includes('Email')) {
      /**
       * Eğer içerik email adresi ise, email label'ını sil ve
       * içerikteki `:`,`-` ve tüm boşlukları sil
       */
      return detail.split('Email')[1].replace(/[:-]/g, '').trim();
    } else {
      /**
       * Eğer içerik telefon numarasıysa, stringden sadece number olanları
       * al, gerisini sil
       */
      return detail.replace(/\D/g, '').trim();
    }
  });

  const [phoneNumber, email] = customDetails;
  return { email: email || '-', phoneNumber: phoneNumber || '-' };
};

export default beautifyText;
