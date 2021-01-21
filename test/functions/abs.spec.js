import { abs } from '../../src/functions/abs.js';

describe('Abs', () => {
  it('numbers', () => {
    expect(abs(-10)).toEqual(10);
    expect(abs(10)).toEqual(10);
  });

  it('arrays', () => {
    expect(abs([-1])).toEqual([1]);
    expect(abs([-10, -20, -30, -40])).toEqual([10, 20, 30, 40]);
    expect(abs([-13, 30, -90, 200])).toEqual([13, 30, 90, 200]);
  });
});
