/**
 * Calculates the ceiling of a number, i.e. rounds a number towards positive infinity. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The ceiling of a number or an array of the ceilings of each element.
 *
 * Examples:
 * - ceil(1.2) returns 2
 * - ceil([1.1, 2.2, 3.3]) returns [2, 3, 4]
 */

export function ceil(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.ceil(a));
  }
  return Math.ceil(a);
}
