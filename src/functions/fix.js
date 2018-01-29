const fixer = (a) => {
  if (a > 0) {
    return Math.floor(a);
  }
  return Math.ceil(a);
};

export function fix(a) {
  if (Array.isArray(a)) {
    return a.map(a => fixer(a));
  }
  return fixer(a);
};
