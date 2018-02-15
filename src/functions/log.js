/**
 * Calculates the logarithm of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {{number}} b optional base for the logarithm. If not provided a value, the default base is e, and the natural log is calculated.
 * @return {(number|number[])} logarithm of a number or an array of logarithms of each element.
 *
 * Examples:
 * - log(1) returns 0
 * - log(64, 8) returns 2
 * - log([2, 4, 8, 16, 32], 2) returns [1, 2, 3, 4, 5]
 */

export function log(a, b) {
  if (b == null) {
    if (Array.isArray(a)) {
      return a.map(a => Math.log(a));
    }
    return Math.log(a);
  }

  if (b <= 0) throw new Error('base out of range');

  if (Array.isArray(a)) {
    return a.map(a => Math.log(a) / Math.log(b));
  }
  return Math.log(a) / Math.log(b);
}
