import { expect } from 'chai';
import { sqrt } from '../../src/functions/sqrt.js';

describe('Sqrt', () => {
  it('numbers', () => {
    expect(sqrt(9)).to.be.equal(3);
    expect(sqrt(0)).to.be.equal(0);
    expect(sqrt(30)).to.be.equal(5.477225575051661);
  });

  it('arrays', () => {
    expect(sqrt([49, 64, 81])).to.be.eql([7, 8, 9]);
    expect(sqrt([1, 4, 100])).to.be.eql([1, 2, 10]);
  });

  it('Invalid negative number', () => {
    expect(() => sqrt(-1)).to.throw('Unable find the square root of a negative number');
  });
});
