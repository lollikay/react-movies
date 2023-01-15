export const getClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
}