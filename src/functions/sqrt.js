/**
 * Calculates the square root of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The square root of 'a' or an array with the square roots of each element.
 *
 * @example
 * sqrt(9) //returns 3
 * sqrt([9, 16, 25]) //returns [3, 4, 5]
 */

export function sqrt(a) {
  if (Array.isArray(a)) {
    return a.map(a => {
      if (a < 0) throw new Error('Invalid number: negative');
      return Math.sqrt(a);
    });
  }

  if (a < 0) throw new Error('Invalid number: negative');
  return Math.sqrt(a);
}
