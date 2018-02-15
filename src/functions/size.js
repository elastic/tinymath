/**
 * Returns the length of an array. Alias for count
 * @param {Array} a any array
 * @return {(number)} the length of the array
 *
 * Examples:
 * - size([]) returns 0
 * - size([-1, -2, -3, -4]) returns 4
 */

export function size(a) {
  if (Array.isArray(a)) return a.length;
  throw new Error('Must pass an array');
}
