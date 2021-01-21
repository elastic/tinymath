import { sin } from '../../src/functions/sin.js';

describe('Sine', () => {
  it('numbers', () => {
    expect(sin(0)).toEqual(0);
    expect(sin(1.5707963267948966)).toEqual(1);
  });

  it('arrays', () => {
    expect(sin([0, 1.5707963267948966])).toEqual([0, 1]);
  });
});
