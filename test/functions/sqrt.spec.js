import { expect } from 'chai';
import { sqrt } from '../../src/functions/sqrt.js';

describe('sqrt', () => {
  it('numbers', () => {
    expect(sqrt(27)).to.be.equal(Math.sqrt(27));
  });

  it('arrays', () => {
    expect(sqrt([27, 64, 125])).to.be.eql([Math.sqrt(27), Math.sqrt(64), Math.sqrt(125)]);
    expect(sqrt([1, 8, 1000])).to.be.eql([Math.sqrt(1), Math.sqrt(8), Math.sqrt(1000)]);
  });

  it('Invalid negative number', () => {
    expect(() => sqrt(-1)).to.throw();
  });
});
