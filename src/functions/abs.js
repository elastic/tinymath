/**
 * Calculates the absolute value of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The absolute value of 'a' or an array with the absolute values of each element.
 *
 * Examples:
 * - abs(-1) returns 1
 * - abs([-1 , -2, -3, -4]) returns [1, 2, 3, 4]
 */
export function abs(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.abs(a));
  }
  return Math.abs(a);
}
