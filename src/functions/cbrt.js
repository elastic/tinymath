/**
 * Calculates the cube root of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The cube root of 'a' or an array with the cube roots of each element.
 *
 * Examples:
 * - cbrt(-27) returns -3
 * - cbrt([27, 64, 125]) returns [3, 4, 5]
 */

export function cbrt(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.cbrt(a));
  }
  return Math.cbrt(a);
}
