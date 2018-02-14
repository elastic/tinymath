import { size } from './size.js';
/**
 * Returns the length of an array. Alias for size
 * @param {Array} a any array
 * @return {(number)} the length of the array
 *
 * Examples:
 * - count([]) returns 0
 * - count([-1, -2, -3, -4]) returns 4
 */
export function count(a) {
  return size(a);
}
