/**
 * Generates a random number within the given range where the lower bound is inclusive and the upper bound is exclusive. If no numbers are passed in, it will return a number between 0 and 1. If only one number is passed in, it will return .
 * @param {number} a (optional) must be greater than 0 if 'b' is not provided
 * @param {number} b optional, must be greater
 * @return {number} generates a number between 0 and 1 if no numbers are passed in, a number between 0 and 'a' if only one number is passed in, or a number between 'a' and 'b' if two numbers are passed in
 *
 * @example
 * random() //returns a number between 0 and 1
 * random(10) //returns a number between 0 and 10
 * random(-10,10) //returns a number between -10 and 10
 */

export function random(a, b) {
  if (a == null) return Math.random();

  // a: max, generate random number between 0 and a
  if (b == null) {
    if (a < 0) throw new Error(`Min is be greater than max`);
    return Math.random() * a;
  }

  // a: min, b: max, generate random number between a and b
  if (a > b) throw new Error(`Min is be greater than max`);
  return Math.random() * (b - a) + a;
}
