import { log } from './log.js';
/**
 * Calculates the logarithm base 10 of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} logarithm of a number or an array of logarithms of each element.
 *
 * Examples:
 * - log(1) returns 0
 * - log(64, 8) returns 2
 * - log([2, 4, 8, 16, 32], 2) returns [1, 2, 3, 4, 5]
 */
export function log10(a) {
  return log(a, 10);
}
