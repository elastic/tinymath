import chai from 'chai';
import { fix } from '../../src/functions/fix.js';

chai.expect();
const expect = chai.expect;

describe('Fix', () => {
  it('numbers', () => {
    expect(fix(-10.5)).to.be.equal(-10);
    expect(fix(-10.1)).to.be.equal(-10);
    expect(fix(10.9)).to.be.equal(10);
  });

  it('arrays', () => {
    expect(fix([-10.5, -20.9, -30.1, -40.2])).to.be.eql([-10, -20, -30, -40]);
    expect(fix([ 2.9, 5.1, 3.5, 4.3])).to.be.eql([2, 5, 3, 4]);
  });
});
