import { size } from '../../src/functions/size.js';

describe('Size (also Count)', () => {
  it('array', () => {
    expect(size([])).toEqual(0);
    expect(size([10, 20, 30, 40])).toEqual(4);
  });

  it('not an array', () => {
    expect(() => size(null)).toThrow('Must pass an array');
    expect(() => size(undefined)).toThrow('Must pass an array');
    expect(() => size('string')).toThrow('Must pass an array');
    expect(() => size(10)).toThrow('Must pass an array');
    expect(() => size(true)).toThrow('Must pass an array');
    expect(() => size({})).toThrow('Must pass an array');
    expect(() => size(function () {})).toThrow('Must pass an array');
  });

  it('skips number validation', () => {
    expect(size).toHaveProperty('skipNumberValidation', true);
  });
});
