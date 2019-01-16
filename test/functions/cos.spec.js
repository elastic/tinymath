import { expect } from 'chai';
import { cos } from '../../src/functions/cos.js';

describe('Cosine', () => {
  it('numbers', () => {
    expect(cos(0)).to.be.equal(1);
    expect(cos(1.5707963267948966)).to.be.equal(6.123233995736766e-17);
  });

  it('arrays', () => {
    expect(cos([0, 1.5707963267948966])).to.be.eql([1, 6.123233995736766e-17]);
  });
});
