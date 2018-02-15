const rounder = (a, b) => Math.round(a * Math.pow(10, b)) / Math.pow(10, b);

/**
 * Rounds a number towards the nearest integer by default or decimal place if specified. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {(number)} b number of decimal places, default value: 0
 * @return {(number|number[])} The ceiling of a number or an array of the ceilings of each element.
 *
 * Examples:
 * - round(1.2) returns 2
 * - round(-10.51) returns -11
 * - round(-10.1, 2) returns -10.1
 * - round(10.93745987, 4) returns 10.9375
 * - round([2.9234, 5.1234, 3.5234, 4.49234324], 2) returns [2.92, 5.12, 3.52, 4.49]
 */

export function round(a, b = 0) {
  if (Array.isArray(a)) {
    return a.map(a => rounder(a, b));
  }
  return rounder(a, b);
}
