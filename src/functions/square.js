import { pow } from './pow.js';

/**
 * Calculates the square of a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The square of `a`. Returns an array with the the squares of each element if `a` is an array.
 *
 * @example
 * square(-3) //returns 9
 * square([3, 4, 5]) //returns [9, 16, 25]
 */

export function square(a) {
  return pow(a, 2);
}
