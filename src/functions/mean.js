import { add } from './add.js';

export function mean(...args) {
  const result = add(...args);

  if (Array.isArray(result)) {
    return result.map((val => val / args.length));
  }

  return result / args.length;
};
