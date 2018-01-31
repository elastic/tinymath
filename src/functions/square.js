export function square(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.pow(a, 2));
  }
  return Math.pow(a, 2);
}
