import { expect } from 'chai';
import { log } from '../../src/functions/log.js';

describe('Log', () => {
  it('numbers', () => {
    expect(log(1)).to.be.equal(Math.log(1));
    expect(log(1, null)).to.be.equal(Math.log(1, null));
    expect(log(3, 2)).to.be.equal(Math.log(3) / Math.log(2));
    expect(log(11, 3)).to.be.equal(Math.log(11) / Math.log(3));
    expect(log(42, 5)).to.be.equal(2.322344707681546);
  });

  it('arrays', () => {
    expect(log([3, 4, 5], 3)).to.be.eql([
      Math.log(3) / Math.log(3),
      Math.log(4) / Math.log(3),
      Math.log(5) / Math.log(3),
    ]);
    expect(log([1, 2, 10], 10)).to.be.eql([
      Math.log(1) / Math.log(10),
      Math.log(2) / Math.log(10),
      Math.log(10) / Math.log(10),
    ]);
  });

  it('base out of range', () => {
    expect(() => log(1, -1)).to.throw();
  });
});
