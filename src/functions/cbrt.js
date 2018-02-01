export function cbrt(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.cbrt(a));
  }
  return Math.cbrt(a);
}
