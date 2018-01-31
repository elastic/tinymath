import { expect } from 'chai';
import { divide } from '../../src/functions/divide.js';

describe('Divide', () => {
  it('number, number', () => {
    expect(divide(10, 2)).to.be.equal(5);
    expect(divide(0.1, 0.02)).to.be.equal(0.1 / 0.02);
  });

  it('array, number', () => {
    expect(divide([10, 20, 30, 40], 10)).to.be.eql([1, 2, 3, 4]);
  });

  it('number, array', () => {
    expect(divide(10, [1, 2, 5, 10])).to.be.eql([10, 5, 2, 1]);
  });

  it('array, array', () => {
    expect(divide([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([11, 24, 20, 18]);
  });

  it('array length mismatch', () => {
    expect(() => divide([1, 2], [3])).to.throw();
  });
});
