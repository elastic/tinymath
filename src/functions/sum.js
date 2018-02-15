const findSum = (total, current) => total + current;

/**
 * Calculates the sum of all numbers and distinct values in arrays passed into the function.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {number} The sum of all numbers including distinct values in any arrays.
 *
 * @example
 * sum(1, 2, 3) //returns 6
 * sum([10, 20, 30, 40], 10, 20, 30) //returns 160
 * sum([1, 2], 3, [4, 5], 6) //returns 21
 */

export function sum(...args) {
  return args.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total + current.reduce(findSum, 0);
    }
    return total + current;
  }, 0);
}
