const findSum = (total, current) => total + current;

export function sum(...args) {
  return args.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total + current.reduce(findSum, 0);
    }
    return total + current;
  }, 0);
}
