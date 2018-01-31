import { expect } from 'chai';
import { round } from '../../src/functions/round.js';

describe('Round', () => {
  it('numbers', () => {
    expect(round(-10.51)).to.be.equal(-11);
    expect(round(-10.1, 2)).to.be.equal(-10.1);
    expect(round(10.93745987, 4)).to.be.equal(10.9375);
  });

  it('arrays', () => {
    expect(round([-10.51, -20.9, -30.1, -40.2])).to.be.eql([-11, -21, -30, -40]);
    expect(round([2.9234, 5.1234, 3.5234, 4.49234324], 2)).to.be.eql([2.92, 5.12, 3.52, 4.49]);
  });
});
