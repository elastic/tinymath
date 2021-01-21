import { square } from '../../src/functions/square.js';

describe('Square', () => {
  it('numbers', () => {
    expect(square(3)).toEqual(9);
    expect(square(-1)).toEqual(1);
  });

  it('arrays', () => {
    expect(square([3, 4, 5])).toEqual([9, 16, 25]);
    expect(square([1, 2, 10])).toEqual([1, 4, 100]);
  });
});
