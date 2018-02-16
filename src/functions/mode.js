import { transpose } from './lib/transpose';

const findMode = a => {
  let maxFreq = 0;
  const mapping = {};

  a.map(val => {
    if (mapping[val] === undefined) {
      mapping[val] = 0;
    }
    mapping[val] += 1;
    if (mapping[val] > maxFreq) {
      maxFreq = mapping[val];
    }
  });

  return Object.keys(mapping)
    .filter(key => mapping[key] === maxFreq)
    .map(val => parseFloat(val))
    .sort((a, b) => a - b);
};

/**
 * Finds the mode value(s) of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mode by index.
 * @param {...(number|number[])} args any number of arguments
 * @return {(number[]|number[][])} an array mode value(s) of all numbers if all inputs are numbers or an array of arrays of mode values of each index, including all scalar numbers in `args` in the calculation at each index.
 *
 * @example
 * mode(1, 1, 2, 3) //returns [1]
 * mode(1, 1, 2, 2, 3) //returns [1,2]
 * mode([10, 20, 30, 40], 10, 20, 30) //returns [[10], [20], [30], [10, 20, 30, 40]]
 * mode([1, 9], 4, [3, 5]) //returns [[1, 3, 4], [4, 5, 9]]
 */

export function mode(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMode(args[0]);
    return args[0];
  }

  const firstArray = args.findIndex(element => Array.isArray(element));
  if (firstArray !== -1) {
    const result = transpose(args, firstArray);
    return result.map(val => findMode(val));
  }
  return findMode(args);
}
