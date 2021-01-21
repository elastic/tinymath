import { mode } from '../../src/functions/mode.js';

describe('Mode', () => {
  it('numbers', () => {
    expect(mode(1)).toEqual(1);
    expect(mode(10, 2, 5, 8)).toEqual([2, 5, 8, 10]);
    expect(mode(0.1, 0.2, 0.4, 0.3)).toEqual([0.1, 0.2, 0.3, 0.4]);
    expect(mode(1, 1, 2, 3, 1, 4, 3, 2, 4)).toEqual([1]);
  });

  it('arrays & numbers', () => {
    expect(mode([10, 20, 30, 40], 10, 20, 30)).toEqual([[10], [20], [30], [10, 20, 30, 40]]);
    expect(mode([1, 2, 3, 4], 2, 3, [3, 2, 4, 3])).toEqual([[3], [2], [3], [3]]);
  });

  it('arrays', () => {
    expect(mode([1, 2, 3, 4], [1, 2, 5, 10])).toEqual([[1], [2], [3, 5], [4, 10]]);
    expect(mode([1, 2, 3, 4], [1, 2, 1, 2], [2, 3, 2, 3], [4, 3, 2, 3])).toEqual([
      [1],
      [2, 3],
      [2],
      [3],
    ]);
  });

  it('array length mismatch', () => {
    expect(() => mode([1, 2], [3])).toThrow();
  });
});
