import { expect } from 'chai';
import { add } from '../../src/functions/add.js';

describe('Add', () => {
  it('numbers', () => {

    expect(add(10, 2, 5, 8)).to.be.equal(25);
    expect(add(0.1, 0.2, 0.4, 0.3)).to.be.equal(0.1 + 0.2 + 0.3 + 0.4);
  });

  it('arrays & numbers', () => {
    expect(add([10, 20, 30, 40], 10, 20, 30)).to.be.eql([70, 80, 90, 100]);
    expect(add(10, [10, 20, 30, 40], [1, 2, 3, 4], 22)).to.be.eql([43, 54, 65, 76]);
  });

  it('arrays', () => {
    expect(add([1, 2, 3, 4])).to.be.equal(10);
    expect(add([1, 2, 3, 4], [1, 2, 5, 10])).to.be.eql([2, 4, 8, 14]);
    expect(add([1, 2, 3, 4], [1, 2, 5, 10], [10, 20, 30, 40])).to.be.eql([12, 24, 38, 54]);
    expect(add([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([12, 50, 63, 76]);

  });

  it('array length mismatch', () => {
    expect(() => add([1, 2], [3])).to.throw();
  });
});
