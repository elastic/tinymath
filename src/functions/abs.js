export function abs(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.abs(a));
  }
  return Math.abs(a);
}
