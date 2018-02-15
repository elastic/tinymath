import { max } from './max.js';
import { min } from './min.js';
import { subtract } from './subtract.js';
/**
 * Finds the range of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will find the range by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number|number[])} The range value of all numbers if all inputs are numbers or an array of range values at each index, including scalar numbers.
 *
 * Examples:
 * - range(1, 2, 3) returns 2
 * - range([10, 20, 30, 40], 15) returns [5, 5, 15, 25]
 * - range([1, 9], 4, [3, 5]) returns [3, 5]
 */
export function range(...args) {
  return subtract(max(...args), min(...args));
}
