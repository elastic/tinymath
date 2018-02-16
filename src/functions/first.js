/**
 * Returns the first element of an array. If anything other than an array is passed in, the input is returned.
 * @param {any[]} a array of any values
 * @return {*} The first element of 'a'. Returns `a` if `a` is not an array.
 *
 * @example
 * first(2) //returns 2
 * first('foo') //returns 'foo'
 * first([1, 2, 3]) //returns 1
 */

export function first(a) {
  if (Array.isArray(a)) {
    return a[0];
  }
  return a;
}
