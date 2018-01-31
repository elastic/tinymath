const add = (total, current) => total + current;

export function sum(...args) {
  return args.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total + current.reduce(add, 0);
    }
    return total + current;
  }, 0);
}
