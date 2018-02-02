export function log(a, b) {
  if (b == null) {
    if (Array.isArray(a)) {
      return a.map(a => Math.log(a));
    }
    return Math.log(a);
  }

  if (b <= 0) throw new Error('base out of range');

  if (Array.isArray(a)) {
    return a.map(a => Math.log(a) / Math.log(b));
  }
  return Math.log(a) / Math.log(b);
}
