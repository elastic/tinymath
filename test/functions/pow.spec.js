import { expect } from 'chai';
import { pow } from '../../src/functions/pow.js';

describe('Pow', () => {
  it('numbers', () => {
    expect(pow(3, 2)).to.be.equal(9);
    expect(pow(-1, -1)).to.be.equal(-1);
    expect(pow(5, 0)).to.be.equal(1);
  });

  it('arrays', () => {
    expect(pow([3, 4, 5], 3)).to.be.eql([Math.pow(3, 3), Math.pow(4, 3), Math.pow(5, 3)]);
    expect(pow([1, 2, 10], 10)).to.be.eql([Math.pow(1, 10), Math.pow(2, 10), Math.pow(10, 10)]);
  });

  it('missing exponent', () => {
    expect(() => pow(1)).to.throw('Missing exponent');
  });
});
