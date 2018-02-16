import { log } from './log.js';

/**
 * Calculates the logarithm base 10 of a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The logarithm of `a`. Returns an array with the the logarithms base 10 of each element if `a` is an array.
 *
 * @example
 * log(10) // returns 1
 * log(100) // returns 2
 * log(80) // returns 1.9030899869919433
 * log([10, 100, 1000, 10000, 100000]) // returns [1, 2, 3, 4, 5]
 */

export function log10(a) {
  return log(a, 10);
}
