import chai from 'chai';
import { mod } from '../../src/functions/mod.js';

chai.expect();
const expect = chai.expect;

describe('Modulus', () => {
  it('number, number', () => {
    expect(mod(13, 8)).to.be.equal(5);
    expect(mod(0.10, 0.02)).to.be.equal(0.10 % 0.02);
  });

  it('array, number', () => {
    expect(mod([13, 26, 34, 42], 10)).to.be.eql([3, 6, 4, 2]);
  });

  it('number, array', () => {
    expect(mod(10, [3, 7, 2, 4])).to.be.eql([1, 3, 0, 2]);
  });

  it('array, array', () => {
    expect(mod([11, 48, 60, 72], [4, 13, 9, 5])).to.be.eql([3, 9, 6, 2]);
  });

  it('array length mismatch', () => {
    expect(() => mod([1, 2], [3])).to.throw();
  });
});
