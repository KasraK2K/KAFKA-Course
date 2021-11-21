export const stringToObject = (text: string): Record<string, any> => {
  return JSON.parse(
    text.replace(/(\w+:)|(\w+ :)/g, (matched) => {
      return `"${matched.substring(0, matched.length - 1)}":`;
    }),
  );
};
