export const random = (min = 0, max = 100) =>
  Math.round(min + Math.random() * (max - min));
