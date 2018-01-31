import { expect } from 'chai';
import { cbrt } from '../../src/functions/cbrt.js';

describe('Cbrt', () => {
  it('numbers', () => {
    expect(cbrt(27)).to.be.equal(Math.cbrt(27));
    expect(cbrt(-1)).to.be.equal(Math.cbrt(-1));
  });

  it('arrays', () => {
    expect(cbrt([27, 64, 125])).to.be.eql([Math.cbrt(27), Math.cbrt(64), Math.cbrt(125)]);
    expect(cbrt([1, 8, 1000])).to.be.eql([Math.cbrt(1), Math.cbrt(8), Math.cbrt(1000)]);
  });
});
