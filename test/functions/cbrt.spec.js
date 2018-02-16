import { expect } from 'chai';
import { cbrt } from '../../src/functions/cbrt.js';

describe('Cbrt', () => {
  it('numbers', () => {
    expect(cbrt(27)).to.be.equal(3);
    expect(cbrt(-1)).to.be.equal(-1);
    expect(cbrt(94)).to.be.equal(4.546835943776344);
  });

  it('arrays', () => {
    expect(cbrt([27, 64, 125])).to.be.eql([3, 4, 5]);
    expect(cbrt([1, 8, 1000])).to.be.eql([1, 2, 10]);
  });
});
