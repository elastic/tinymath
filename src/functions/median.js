import { transpose } from './lib/transpose';

const findMedian = a => {
  const len = a.length;
  const half = Math.floor(len / 2);

  a.sort((a, b) => a > b);

  if (len % 2 === 0) {
    return (a[half] + a[half - 1]) / 2;
  }

  return a[half];
};

/**
 * Finds the median value(s) of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will find the median by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number[]|number[][])} an array median value(s) of all numbers if all inputs are numbers or an array of arrays of median values of each index, including scalar numbers.
 *
 * @example
 * median(1, 1, 2, 3) //returns 1.5
 * median(1, 1, 2, 2, 3) //returns 2
 * median([10, 20, 30, 40], 10, 20, 30) //returns [15, 20, 25, 25]
 * median([1, 9], 4, [3, 5]) //returns [3, 4]
 */

export function median(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMedian(args[0]);
    return args[0];
  }

  const firstArray = args.findIndex(element => Array.isArray(element));
  if (firstArray !== -1) {
    const result = transpose(args, firstArray);
    return result.map(val => findMedian(val));
  }
  return findMedian(args);
}
