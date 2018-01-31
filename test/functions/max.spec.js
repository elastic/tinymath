import { expect } from 'chai';
import { max } from '../../src/functions/max.js';

describe('Max', () => {
  it('numbers', () => {
    expect(max(1)).to.be.equal(1);
    expect(max(10, 2, 5, 8)).to.be.equal(10);
    expect(max(0.1, 0.2, 0.4, 0.3)).to.be.equal(0.4);
  });

  it('arrays & numbers', () => {
    expect(max([88, 20, 30, 40], 60, [30, 10, 70, 90])).to.be.eql([88, 60, 70, 90]);
    expect(max(10, [10, 20, 30, 40], [1, 2, 3, 4], 22)).to.be.eql([22, 22, 30, 40]);
  });

  it('arrays', () => {
    expect(max([1, 2, 3, 4])).to.be.equal(4);
    expect(max([6, 2, 3, 10], [11, 2, 5, 10])).to.be.eql([11, 2, 5, 10]);
    expect(max([30, 55, 9, 4], [72, 24, 48, 10], [10, 20, 30, 40])).to.be.eql([72, 55, 48, 40]);
    expect(max([11, 28, 60, 10], [1, 48, 3, -17])).to.be.eql([11, 48, 60, 10]);
  });

  it('array length mismatch', () => {
    expect(() => max([1, 2], [3])).to.throw();
  });
});
