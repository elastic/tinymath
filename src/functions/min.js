/**
 * Finds the minimum value of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will find the minimum by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number|number[])} The minimum value of all numbers if all inputs are numbers or an array of minimum values of each index, including scalar numbers.
 *
 * @example
 * min(1, 2, 3) //returns 1
 * min([10, 20, 30, 40], 25) //returns [10, 20, 25, 25]
 * min([1, 9], 4, [3, 5]) //returns [1, 4]
 */

export function min(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0]))
      return args[0].reduce((result, current) => Math.min(result, current));
    return args[0];
  }

  return args.reduce((result, current) => {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map((val, i) => Math.min(val, current[i]));
    }
    if (Array.isArray(result)) return result.map(val => Math.min(val, current));
    if (Array.isArray(current)) return current.map(val => Math.min(val, result));
    return Math.min(result, current);
  });
}
