export function cube(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.pow(a, 3));
  }
  return Math.pow(a, 3);
}
