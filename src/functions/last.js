export function last(a) {
  if (Array.isArray(a)) {
    return a[a.length - 1];
  }
  return a;
}
