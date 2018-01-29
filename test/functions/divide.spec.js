import chai from 'chai';
import { divide } from '../../src/functions/divide.js';

chai.expect();
const expect = chai.expect;

describe('Divide', () => {
  it('number, number', () => {
    expect(divide(10, 2)).to.be.equal(5);
    expect(divide(0.10, 0.02)).to.be.equal(0.10 / 0.02);
  });

  it('array, number', () => {
    expect(divide([10, 20, 30, 40], 10)).to.be.eql([1, 2, 3, 4]);
  });

  it('number, array', () => {
    expect(divide(10, [1, 2, 5, 10])).to.be.eql([10, 5, 2, 1]);
  });

  it('array, array', () => {
    // const lengthErr = new Error('Matrix length mismatch');
    expect(divide([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([11, 24, 20, 18]);

    expect(() => divide([1, 2], [3])).to.throw();
  });
});
