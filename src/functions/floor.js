export function floor(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.floor(a));
  }
  return Math.floor(a);
}
