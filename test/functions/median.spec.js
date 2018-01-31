import { expect } from 'chai';
import { median } from '../../src/functions/median.js';

describe('Median', () => {
  it('numbers', () => {
    expect(median(1)).to.be.equal(1);
    expect(median(10, 2, 5, 8)).to.be.equal((8 + 5) / 2);
    expect(median(0.1, 0.2, 0.4, 0.3)).to.be.equal((0.2 + 0.3) / 2);
  });

  it('arrays & numbers', () => {
    expect(median([10, 20, 30, 40], 10, 20, 30)).to.be.eql([15, 20, 25, 25]);
    expect(median(10, [10, 20, 30, 40], [1, 2, 3, 4], 22)).to.be.eql([10, 15, 16, 16]);
  });

  it('arrays', () => {
    expect(median([1, 2, 3, 4], [1, 2, 5, 10])).to.be.eql([1, 2, 4, 7]);
    expect(median([1, 2, 3, 4], [1, 2, 5, 10], [10, 20, 30, 40])).to.be.eql([1, 2, 5, 10]);
    expect(median([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([12 / 2, 50 / 2, 63 / 2, 76 / 2]);
  });

  it('array length mismatch', () => {
    expect(() => median([1, 2], [3])).to.throw();
  });
});
