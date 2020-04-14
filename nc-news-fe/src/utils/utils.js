export const stringToTitleCase = (str) => {
  if (!str) return '';
  const title = str.split('');
  title[0] = title[0].toUpperCase();
  return title.join('');
};
