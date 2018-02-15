/**
 * Calculates the sum of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will calculate the sum by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number|number[])} The sum of all numbers if all inputs are numbers or an array of sums of the elements at each index, including scalar numbers.
 *
 * Examples:
 * - add(1, 2, 3) returns 6
 * - add([10, 20, 30, 40], 10, 20, 30) returns [70, 80, 90, 100]
 * - add([1, 2], 3, [4, 5], 6) returns [14, 16]
 */

export function add(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return args[0].reduce((result, current) => result + current);
    return args[0];
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
