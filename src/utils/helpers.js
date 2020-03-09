export const random = (min = 0, max = Number.MAX_SAFE_INTEGER) =>
  Math.round(min + Math.random() * (max - min));
