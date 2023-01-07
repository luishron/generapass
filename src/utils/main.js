export const limitString = (string, limit) => {
  if (string.length > limit) {
    return `${string.substring(0, limit)}...`;
  }
  return string;
};
export const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
