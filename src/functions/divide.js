/**
 * Divides two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.
 * @param {(number|number[])} a dividend, a number or an array of numbers
 * @param {(number|number[])} b divisor, a number or an array of numbers
 * @return {(number|number[])} The quotient of 'a' and 'b' if both are numbers or an array of quotients applied index-wise to each element.
 *
 * Examples:
 * - divide(6, 3) returns 2
 * - divide([10, 20, 30, 40], 10) returns [1, 2, 3, 4]
 * - divide(10, [1, 2, 5, 10]) returns [10, 5, 2, 1]
 * - divide([14, 42, 65, 108], [2, 7, 5, 12]) returns [7, 6, 13, 9]
 */

export function divide(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map((val, i) => val / b[i]);
  }
  if (Array.isArray(a)) return a.map(a => a / b);
  if (Array.isArray(b)) return b.map(b => a / b);
  return a / b;
}
