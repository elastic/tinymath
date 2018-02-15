/**
 * Calculates the floor of a number, i.e. rounds a number towards negative infinity. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The floor of a number or an array of the floor of each element.
 *
 * Examples:
 * - floor(1.2) returns 1
 * - floor([1.7, 2.8, 3.9]) returns [1, 2, 3]
 */

export function floor(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.floor(a));
  }
  return Math.floor(a);
}
