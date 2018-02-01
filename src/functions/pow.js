export function pow(a, b) {
  if (b == null) throw new Error('Missing exponent');
  if (Array.isArray(a)) {
    return a.map(a => Math.pow(a, b));
  }
  return Math.pow(a, b);
}
