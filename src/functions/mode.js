const findMode = a => {
  let maxFreq = 0;
  const mapping = {};

  a.map(val => {
    if (mapping[val] === undefined) {
      mapping[val] = 0;
    }
    mapping[val] += 1;
    if (mapping[val] > maxFreq) {
      maxFreq = mapping[val];
    }
  });

  return Object.keys(mapping)
    .filter(key => mapping[key] === maxFreq)
    .map(val => parseFloat(val))
    .sort((a, b) => a - b);
};

/**
 * Transposes a 2D array, i.e. turns the rows into columns and vice versa. Scalar values are also included in the transpose.
 * @param {any[][]} args an array or an array that contains arrays
 * @param {number} index index of the first array element in args
 * @return {any[][]} transpose of args
 *
 * Examples:
 * - transpose([[1,2],[3,4],[5,6]) returns [[1, 3, 5], [2, 4, 6]]
 * - transpose([10, 20, 30, 40], 10, 20, 30) returns [[10, 10, 20, 30], [20, 10, 20, 30], [30, 10, 20, 30], [40, 10, 20, 30]]
 * - transpose([1, 9], 4, [3, 5]) returns [[1, 4, 3], [9, 4, 5]]
 */

const transpose = (args, index) => {
  const len = args[index].length;
  return args[index].map((col, i) =>
    args.map(row => {
      if (Array.isArray(row)) {
        if (row.length !== len) throw new Error('Matrix length mismatch');
        return row[i];
      }
      return row;
    })
  );
};

/**
 * Finds the mode value(s) of all numbers passed into the function. If at least one array of numbers is passed into the function, the function will find the mode by index.
 * @param {...(number|number[])} args numbers and/or arrays of numbers
 * @return {(number[]|number[][])} an array mode value(s) of all numbers if all inputs are numbers or an array of arrays of mode values of each index, including scalar numbers.
 *
 * Examples:
 * - mode(1, 1, 2, 3) returns [1]
 * - mode(1, 1, 2, 2, 3) returns [1,2]
 * - mode([10, 20, 30, 40], 10, 20, 30) returns [[10], [20], [30], [10, 20, 30, 40]]
 * - mode([1, 9], 4, [3, 5]) returns [[1, 3, 4], [4, 5, 9]]
 */

export function mode(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMode(args[0]);
    return args[0];
  }

  const firstArray = args.findIndex(element => Array.isArray(element));
  if (firstArray !== -1) {
    const result = transpose(args, firstArray);
    return result.map(val => findMode(val));
  }
  return findMode(args);
}
