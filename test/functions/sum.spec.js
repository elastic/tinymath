import chai from 'chai';
import { sum } from '../../src/functions/sum.js';

chai.expect();
const expect = chai.expect;

describe('Sum', () => {
  it('numbers', () => {
    expect(sum(10, 2, 5, 8)).to.be.equal(25);
    expect(sum(0.1, 0.2, 0.4, 0.3)).to.be.eql(0.1 + 0.2 + 0.3 + 0.4);
  });

  it('arrays & numbers', () => {
    expect(sum([10, 20, 30, 40], 10, 20, 30)).to.be.eql(160);
    expect(sum([10, 20, 30, 40], 10, [1, 2, 3], 22)).to.be.eql(138);
  });

  it('arrays', () => {
    expect(sum([1, 2, 3, 4], [1, 2, 5, 10])).to.be.eql(28);
    expect(sum([1, 2, 3, 4], [1, 2, 5, 10], [10, 20, 30, 40])).to.be.eql(128);
    expect(sum([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql(201);
  });
});
