export function sqrt(a) {
  if (Array.isArray(a)) {
    return a.map(a => {
      if (a < 0) throw new Error('Invalid number: negative');
      return Math.sqrt(a);
    });
  }

  if (a < 0) throw new Error('Invalid number: negative');
  return Math.sqrt(a);
}
