/**
 * Returns the first element of an array. If anything other than an array is passed in, the input is returned.
 * @param {*} a preferably an array but any input is accepted
 * @return {*} first element of an array or the same input is returned
 *
 * Examples:
 * - first(2) returns 2
 * - first('foo') returns 'foo'
 * - first([1, 2, 3]) returns 1
 */

export function first(a) {
  if (Array.isArray(a)) {
    return a[0];
  }
  return a;
}
