/**
 * Counts the number of unique values in an array
 * @param {Array} a
 * @return {number}
 */
export function abs(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.abs(a));
  }
  return Math.abs(a);
}
