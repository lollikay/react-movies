export const paramsToObject = (entries) => {
  if(!entries) return {}
  const result = {}
  for(const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}