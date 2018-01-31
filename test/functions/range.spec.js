import { expect } from 'chai';
import { range } from '../../src/functions/range.js';

describe('Range', () => {
  it('numbers', () => {
    expect(range(1)).to.be.equal(0);
    expect(range(10, 2, 5, 8)).to.be.equal(8);
    expect(range(0.1, 0.2, 0.4, 0.3)).to.be.equal(0.4 - 0.1);
  });

  it('arrays & numbers', () => {
    expect(range([88, 20, 30, 40], 60, [30, 10, 70, 90])).to.be.eql([58, 50, 40, 50]);
    expect(range(10, [10, 20, 30, 40], [1, 2, 3, 4], 22)).to.be.eql([21, 20, 27, 36]);
  });

  it('arrays', () => {
    expect(range([1, 2, 3, 4])).to.be.equal(3);
    expect(range([6, 2, 3, 10], [11, 2, 5, 10])).to.be.eql([5, 0, 2, 0]);
    expect(range([30, 55, 9, 4], [72, 24, 48, 10], [10, 20, 30, 40])).to.be.eql([62, 35, 39, 36]);
    expect(range([11, 28, 60, 10], [1, 48, 3, -17])).to.be.eql([10, 20, 57, 27]);
  });

  it('array length mismatch', () => {
    expect(() => range([1, 2], [3])).to.throw();
  });
});
