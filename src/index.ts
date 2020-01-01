export const ClearSpaces = (text: string) => {
  return text.replace(/\s+/g, ' ').trim();
};

export const CapitalizeEach = (text: string) => {
  return text
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};
