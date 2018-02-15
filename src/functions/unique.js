/**
 * Counts the number of unique values in an array
 * @param {any[]} a
 * @return {number} number of unique values in the array or 1 if anything other than an array is passed in
 *
 * Examples:
 * unique(100) returns 1
 * unique([]) returns 0
 * unique([1, 2, 3, 4]) returns 4
 * unique([1, 2, 3, 4, 2, 2, 2, 3, 4, 2, 4, 5, 2, 1, 4, 2]) returns 5
 */

export function unique(a) {
  if (Array.isArray(a)) {
    return a.filter((val, i) => a.indexOf(val) === i).length;
  }
  return 1;
}
