/**
 * Calculates the cube root of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {(number)} b the power that 'a' is raised to
 * @return {(number|number[])} 'a' raised to the power of 'b' or an array of each element raised to the power of 'b'.
 *
 * @example
 * pow(2,3) //returns 8
 * pow([1, 2, 3], 4) //returns [1, 16, 81]
 */

export function pow(a, b) {
  if (b == null) throw new Error('Missing exponent');
  if (Array.isArray(a)) {
    return a.map(a => Math.pow(a, b));
  }
  return Math.pow(a, b);
}
