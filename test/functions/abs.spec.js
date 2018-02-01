import chai from 'chai';
import { abs } from '../../src/functions/abs.js';

chai.expect();
const expect = chai.expect;

describe('Abs', () => {
  it('numbers', () => {
    expect(abs(-10)).to.be.equal(10);
    expect(abs(10)).to.be.equal(10);
  });

  it('arrays', () => {
    expect(abs([-1])).to.be.eql([1]);
    expect(abs([-10, -20, -30, -40])).to.be.eql([10, 20, 30, 40]);
    expect(abs([-13, 30, -90, 200])).to.be.eql([13, 30, 90, 200]);
  });
});
