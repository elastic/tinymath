export function exp(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.exp(a));
  }
  return Math.exp(a);
}
