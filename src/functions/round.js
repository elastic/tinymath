export function round(a, b = 0) {
  if (Array.isArray(a)) {
    return a.map(a => Math.round(a * Math.pow(10, b)) / Math.pow(10, b));
  }
  return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
}
