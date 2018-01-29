import chai from 'chai';
import { floor } from '../../src/functions/floor.js';

chai.expect();
const expect = chai.expect;

describe('Floor', () => {
  it('numbers', () => {
    expect(floor(-10.5)).to.be.equal(-11);
    expect(floor(-10.1)).to.be.equal(-11);
    expect(floor(10.9)).to.be.equal(10);
  });

  it('arrays', () => {
    expect(floor([-10.5, -20.9, -30.1, -40.2])).to.be.eql([-11, -21, -31, -41]);
    expect(floor([ 2.9, 5.1, 3.5, 4.3])).to.be.eql([2, 5, 3, 4]);
  });
});
