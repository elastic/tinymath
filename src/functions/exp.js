/**
 * Calculates the exponent of a number. For arrays, the function will be applied to each element.
 * @param {(number|number[])} a a number or an array of numbers
 * @return {(number|number[])} exponent of a number or an array of exponents of each element.
 *
 * @example
 * exp(2) //returns e^2 = 7.3890560989306495
 * exp([1, 2, 3]) //returns [e^1, e^2, e^3] = [2.718281828459045, 7.3890560989306495, 20.085536923187668]
 */

export function exp(a) {
  if (Array.isArray(a)) {
    return a.map(a => Math.exp(a));
  }
  return Math.exp(a);
}
