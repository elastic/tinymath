/**
 * Subtracts two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {(number|number[])} b a number or an array of numbers
 * @return {(number|number[])} The difference of 'a' and 'b' if both are numbers or an array of differences applied index-wise to each element.
 *
 * Examples:
 * - subtract(6, 3) returns 3
 * - subtract([10, 20, 30, 40], 10) returns [0, 10, 20, 30]
 * - subtract(10, [1, 2, 5, 10]) returns [9, 8, 5, 0]
 * - subtract([14, 42, 65, 108], [2, 7, 5, 12]) returns [12, 35, 52, 96]
 */
export function subtract(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map((val, i) => val - b[i]);
  }
  if (Array.isArray(a)) return a.map(a => a - b);
  if (Array.isArray(b)) return b.map(b => a - b);
  return a - b;
}
