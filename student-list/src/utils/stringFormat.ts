const removeExtraSpaces = (text: string): string[] =>
  text
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter((word) => word !== '');

export const capitalizeText = (text: string): string =>
  removeExtraSpaces(text)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.substring(1).toLocaleLowerCase()
    )
    .join(' ');