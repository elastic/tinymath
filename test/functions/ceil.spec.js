import chai from 'chai';
import { ceil } from '../../src/functions/ceil.js';

chai.expect();
const expect = chai.expect;

describe('Ceil', () => {
  it('numbers', () => {
    expect(ceil(-10.5)).to.be.equal(-10);
    expect(ceil(-10.1)).to.be.equal(-10);
    expect(ceil(10.9)).to.be.eql(11);
  });

  it('arrays', () => {
    expect(ceil([-10.5, -20.9, -30.1, -40.2])).to.be.eql([-10, -20, -30, -40]);
    expect(ceil([ 2.9, 5.1, 3.5, 4.3])).to.be.eql([3, 6, 4, 5]);
  });
});
