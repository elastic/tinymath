import { expect } from 'chai';
import { sin } from '../../src/functions/sin.js';

describe('Sine', () => {
  it('numbers', () => {
    expect(sin(0)).to.be.equal(0);
    expect(sin(1.5707963267948966)).to.be.equal(1);
  });

  it('arrays', () => {
    expect(sin([0, 1.5707963267948966])).to.be.eql([0, 1]);
  });
});
