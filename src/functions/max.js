/**
 * Finds the maximum value of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will find the maximum by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number|number[])} The maximum value of all numbers if all inputs are numbers or an array of maximum values at each index, including scalar numbers.
 *
 * Examples:
 * - max(1, 2, 3) returns 3
 * - max([10, 20, 30, 40], 15) returns [15, 20, 30, 40]
 * - max([1, 9], 4, [3, 5]) returns [4, 9]
 */
export function max(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0]))
      return args[0].reduce((result, current) => Math.max(result, current));
    return args[0];
  }

  return args.reduce((result, current) => {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map((val, i) => Math.max(val, current[i]));
    }
    if (Array.isArray(result)) return result.map(val => Math.max(val, current));
    if (Array.isArray(current)) return current.map(val => Math.max(val, result));
    return Math.max(result, current);
  });
}
