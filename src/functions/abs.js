/**
 * Calculates the absolute value of a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The absolute value of `a`. Returns an array with the the absolute values of each element if `a` is an array.
 *
 * @example
 * abs(-1) //returns 1
 * abs(2) //returns 2
 * abs([-1 , -2, 3, -4]) //returns [1, 2, 3, 4]
 */

export function abs(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.abs(a));
  }
  return Math.abs(a);
}
