import { size } from './size.js';

/**
 * Returns the length of an array. Alias for size
 * @param {Array} a an array of any type
 * @return {(number)} The length of the array. Returns 1 if `a` is not an array.
 *
 * @example
 * count([]) //returns 0
 * count([-1, -2, -3, -4]) //returns 4
 * count(100) //returns 1
 * count('foo') //returns 1
 */

export function count(a) {
  return size(a);
}
