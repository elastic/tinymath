import { add } from './add.js';

/**
 * Finds the mean value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mean by index.
 * @param {...(number|number[])} args any number of arguments
 * @return {(number|number[])} The mean value of all numbers if all inputs are numbers or an array of mean values of each index, including scalar numbers.
 *
 * @example
 * mean(1, 2, 3) //returns 2
 * mean([10, 20, 30, 40], 20) //returns [15, 20, 25, 30]
 * mean([1, 9], 5, [3, 4]) //returns [3, 6]
 */

export function mean(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return add(args[0]) / args[0].length;
    return args[0];
  }
  const sum = add(...args);

  if (Array.isArray(sum)) {
    return sum.map(val => val / args.length);
  }

  return sum / args.length;
}
