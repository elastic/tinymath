/**
 * Calculates the square root of a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} The square root of `a`. Returns an array with the the square roots of each element if `a` is an array.
 * @throws `'Unable find the square root of a negative number'` if `a` < 0
 * @example
 * sqrt(9) // returns 3
 * sqrt(30) //5.477225575051661
 * sqrt([9, 16, 25]) // returns [3, 4, 5]
 */

export function sqrt(a) {
  if (Array.isArray(a)) {
    return a.map(a => {
      if (a < 0) throw new Error('Unable find the square root of a negative number');
      return Math.sqrt(a);
    });
  }

  if (a < 0) throw new Error('Unable find the square root of a negative number');
  return Math.sqrt(a);
}
