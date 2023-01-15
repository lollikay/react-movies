export const getYearFromString = (str) => {
  return str ? new Date(str)?.getFullYear() : null;
}