import { expect } from 'chai';
import { exp } from '../../src/functions/exp.js';

describe('Exp', () => {
  it('numbers', () => {
    expect(exp(3)).to.be.equal(Math.exp(3));
    expect(exp(0)).to.be.equal(Math.exp(0));
    expect(exp(5)).to.be.equal(Math.exp(5));
  });

  it('arrays', () => {
    expect(exp([3, 4, 5])).to.be.eql([Math.exp(3), Math.exp(4), Math.exp(5)]);
    expect(exp([1, 2, 10])).to.be.eql([Math.exp(1), Math.exp(2), Math.exp(10)]);
    expect(exp([10])).to.be.eql([Math.exp(10)]);
  });
});
