/**
 * Verilen stringdeki kelimelerin baş harflerini büyük yapar
 * Örn:
 * - deneme yazISI -> Deneme Yazısı
 * - deneme yazısı -> Deneme Yazısı
 * - dENEME yAZISI -> Deneme Yazısı
 */
const capitalize = (text: string) => {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export default capitalize;
