export function size(a) {
  if (Array.isArray(a)) return a.length;
  throw new Error('Must pass an array');
}
