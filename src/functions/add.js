export function add(...args) {
  if (args.length === 1) {
    return args[0].reduce((result, current) => result + current);
  }

  return args.reduce((result, current) => {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map((val, i) => val + current[i]);
    }
    if (Array.isArray(result)) return result.map(val => val + current);
    if (Array.isArray(current)) return current.map(val => val + result);
    return result + current;
  });
}
