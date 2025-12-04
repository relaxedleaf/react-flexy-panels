export const isSameSign = (a: number, b: number) => {
  return (a === 0 && b === 0) || (a > 0 && b > 0) || (a < 0 && b < 0);
};
