import chai from 'chai';
import { unique } from '../../src/functions/unique.js';

chai.expect();
const expect = chai.expect;

describe('Unique', () => {
  it('numbers', () => {
    expect(unique(1)).to.be.equal(1);
    expect(unique(10000)).to.be.equal(1);
  });

  it('arrays', () => {
    expect(unique([])).to.be.equal(-1);
    expect(unique([-10, -20, -30, -40])).to.be.eql(4);
    expect(unique([-13, 30, -90, 200])).to.be.eql(4);
    expect(unique([1, 2, 3, 4, 2, 2, 2, 3, 4, 2, 4, 5, 2, 1, 4, 2])).to.be.eql(5);
  });
});
