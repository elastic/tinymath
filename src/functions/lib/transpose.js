/**
 * Transposes a 2D array, i.e. turns the rows into columns and vice versa. Scalar values are also included in the transpose.
 * @param {any[][]} args an array or an array that contains arrays
 * @param {number} index index of the first array element in args
 * @return {any[][]} transpose of args
 * @throws `'Matrix length mismatch'` if `args` contains arrays of different lengths
 * @example
 * transpose([[1,2], [3,4], [5,6]], 0) // returns [[1, 3, 5], [2, 4, 6]]
 * transpose([10, 20, [10, 20, 30, 40], 30], 2) // returns [[10, 20, 10, 30], [10, 20, 20, 30], [10, 20, 30, 30], [10, 20, 40, 30]]
 * transpose([4, [1, 9], [3, 5]], 1) // returns [[4, 1, 3], [4, 9, 5]]
 */

export function transpose(args, index) {
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
}
