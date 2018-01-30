import { expect } from 'chai';
import { round } from '../../src/functions/round.js';

describe('Round', () => {
  it('numbers', () => {
    expect(round(-10.51)).to.be.equal(-11);
    expect(round(-10.1)).to.be.equal(-10);
    expect(round(10.9)).to.be.equal(11);
  });

  it('arrays', () => {
    expect(round([-10.51, -20.9, -30.1, -40.2])).to.be.eql([-11, -21, -30, -40]);
    expect(round([2.9, 5.1, 3.5, 4.49])).to.be.eql([3, 5, 4, 4]);
  });
});
