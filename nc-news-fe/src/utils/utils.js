export const stringToTitleCase = (str) => {
  if (!str) return '';

  const sentence = str
    .split(' ')
    .map((word) => {
      const title = word.split('');
      title[0] = title[0].toUpperCase();
      return title.join('');
    })
    .join(' ');

  return sentence;
};
