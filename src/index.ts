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

export const ReplaceAll = (text: string, newText: string, toReplace: string[]) => {
  const special = /[\[\\\^\$\.\|\?\*\+\(\)\{\}]+/g;
  for (let replace of toReplace) {
    if (replace.match(special)) replace = `\\${replace}`;
    text = text.replace(new RegExp(`${replace}`, 'g'), newText);
  }
  return text;
};
