/**
 * Remainder after dividing two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.
 * @param {(number|number[])} a dividend, a number or an array of numbers
 * @param {(number|number[])} b divisor, a number or an array of numbers
 * @return {(number|number[])} The remainder of 'a' divided by 'b' if both are numbers or an array of remainders applied index-wise to each element.
 *
 * Examples:
 * - mod(10, 7) returns 3
 * - mod([11, 22, 33, 44], 10) returns [1, 2, 3, 4]
 * - mod(100, [3, 7, 11, 23]) returns [1, 2, 1, 8]
 * - mod([14, 42, 65, 108], [5, 4, 14, 2]) returns [5, 2, 9, 0]
 */
export function mod(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map((val, i) => val % b[i]);
  }
  if (Array.isArray(a)) return a.map(a => a % b);
  if (Array.isArray(b)) return b.map(b => a % b);
  return a % b;
}
