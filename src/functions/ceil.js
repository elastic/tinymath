export function ceil(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.ceil(a));
  }
  return Math.ceil(a);
}
