/**
 * Returns the length of an array. Alias for count
 * @param {any[]} a array of any values
 * @return {(number)} The length of the array. Returns 1 if `a` is not an array.
 * @throws `'Must pass an array'` if `a` is not an array
 * @example
 * size([]) // returns 0
 * size([-1, -2, -3, -4]) // returns 4
 * size(100) // returns 1
 */

export function size(a) {
  if (Array.isArray(a)) return a.length;
  throw new Error('Must pass an array');
}
