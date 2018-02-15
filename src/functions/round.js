const rounder = (a, b) => Math.round(a * Math.pow(10, b)) / Math.pow(10, b);

/**
 * Rounds a number towards the nearest integer or decimal place if specified. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {(number)} b number of decimal places, default value: 0
 * @return {(number|number[])} The ceiling of a number or an array of the ceilings of each element.
 *
 * Examples:
 * - round(1.2) returns 2
 * - round([1.1, 2.2, 3.3]) returns [2, 3, 4]
 */

export function round(a, b = 0) {
  if (Array.isArray(a)) {
    return a.map(a => rounder(a, b));
  }
  return rounder(a, b);
}
