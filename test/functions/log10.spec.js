import { expect } from 'chai';
import { log10 } from '../../src/functions/log10.js';

describe('Log10', () => {
  it('numbers', () => {
    expect(log10(1)).to.be.equal(Math.log(1) / Math.log(10));
    expect(log10(3)).to.be.equal(Math.log(3) / Math.log(10));
    expect(log10(11)).to.be.equal(Math.log(11) / Math.log(10));
    expect(log10(80)).to.be.equal(1.9030899869919433);
  });

  it('arrays', () => {
    expect(log10([3, 4, 5], 3)).to.be.eql([
      Math.log(3) / Math.log(10),
      Math.log(4) / Math.log(10),
      Math.log(5) / Math.log(10),
    ]);
    expect(log10([1, 2, 10], 10)).to.be.eql([
      Math.log(1) / Math.log(10),
      Math.log(2) / Math.log(10),
      Math.log(10) / Math.log(10),
    ]);
  });
});
