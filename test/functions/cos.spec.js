import { cos } from '../../src/functions/cos.js';

describe('Cosine', () => {
  it('numbers', () => {
    expect(cos(0)).toEqual(1);
    expect(cos(1.5707963267948966)).toEqual(6.123233995736766e-17);
  });

  it('arrays', () => {
    expect(cos([0, 1.5707963267948966])).toEqual([1, 6.123233995736766e-17]);
  });
});
