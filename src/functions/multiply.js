/**
 * Multiplies two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @param {(number|number[])} b a number or an array of numbers
 * @return {(number|number[])} The product of 'a' and 'b' if both are numbers or an array of products applied index-wise to each element.
 *
 * @example
 * multiply(6, 3) //returns 18
 * multiply([10, 20, 30, 40], 10) //returns [100, 200, 300, 400]
 * multiply(10, [1, 2, 5, 10]) //returns [10, 20, 50, 100]
 * multiply([1, 2, 3, 4], [2, 7, 5, 12]) //returns [2, 14, 15, 48]
 */

export function multiply(...args) {
  return args.reduce((result, current) => {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map((val, i) => val * current[i]);
    }
    if (Array.isArray(result)) return result.map(val => val * current);
    if (Array.isArray(current)) return current.map(val => val * result);
    return result * current;
  });
}
