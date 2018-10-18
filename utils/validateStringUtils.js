// Determine if string is a non-empty string with at least 1 non-whitespace character
export const isStringNotEmpty = str => str && str.length !== 0 && /\S/.test(str);
