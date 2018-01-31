import { add } from './add.js';

export function mean(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return add(args[0]) / args[0].length;
    return args[0];
  }
  const result = add(...args);

  if (Array.isArray(result)) {
    return result.map(val => val / args.length);
  }

  return result / args.length;
}
