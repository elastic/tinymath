import { expect } from 'chai';
import { clamp } from '../../src/functions/clamp.js';

describe('Clamp', () => {
  it('numbers', () => {
    expect(clamp(10, 20)).to.be.equal(20);
    expect(clamp(10, 5, 8)).to.be.equal(8);
    expect(clamp(1, 2, 3)).to.be.equal(2);
    expect(clamp(0.5, 0.2, 0.4)).to.be.equal(0.4);
  });

  it('arrays & numbers', () => {
    expect(clamp([10, 20, 30, 40], 15)).to.be.eql([15, 20, 30, 40]);
    expect(clamp([10, 20, 30, 40], 15, 25)).to.be.eql([15, 20, 25, 25]);
    expect(clamp(10, [15, 2, 4, 20])).to.be.eql([15, 10, 10, 20]);
    expect(clamp(10, [15, 2, 4, 20], 25)).to.be.eql([15, 10, 10, 20]);
    expect(clamp(35, 10, [20, 30, 40, 50])).to.be.eql([20, 30, 35, 35]);
    expect(clamp([1, 9], 3, [4, 5])).to.be.eql([3, 5]);
  });

  it('arrays', () => {
    expect(clamp([6, 28, 32, 10], [11, 2, 5, 10], [20, 21, 22, 23])).to.be.eql([11, 21, 22, 10]);
    expect(clamp([11, 28, 60, 10], [1, 48, 3, -17])).to.be.eql([11, 48, 60, 10]);
  });

  it('errors', () => {
    expect(() => clamp(1, 4, 3)).to.throw('Min must be less than max');
    expect(() => clamp([1, 2], [3], 3)).to.throw('Array length mismatch');
  });
});
