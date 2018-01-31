/**
 * Counts the number of unique values in an array
 * @param {Array} a
 * @return {number}
 */

export function unique(a) {
  if (Array.isArray(a)) {
    if (a.length < 1) return -1;
    return a.filter((val, i) => a.indexOf(val) === i).length;
  }
  return 1;
}
