/**
 * Returns the last element of an array. If anything other than an array is passed in, the input is returned.
 * @param {*} a preferably an array but any input is accepted
 * @return {*} last element of an array or the same input is returned
 *
 * Examples:
 * - last(2) returns 2
 * - last('foo') returns 'foo'
 * - last([1, 2, 3]) returns 3
 */ export function last(a) {
  if (Array.isArray(a)) {
    return a[a.length - 1];
  }
  return a;
}
