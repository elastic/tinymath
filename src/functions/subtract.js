export function subtract(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map((val, i) => val - b[i]);
  }
  if (Array.isArray(a)) return a.map(a => a - b);
  if (Array.isArray(b)) return b.map(b => a - b);
  return a - b;
};
