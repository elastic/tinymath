export function round(a, b = undefined) {
  const isArray = Array.isArray(a);
  if (b) {
    if (isArray) {
      return a.map(a => Math.round(a, b));
    }
    return Math.round(a, b);
  }

  if (isArray) {
    return a.map(a => Math.round(a));
  }
  return Math.round(a);
}
