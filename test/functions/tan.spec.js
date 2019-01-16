import { expect } from 'chai';
import { tan } from '../../src/functions/tan.js';

describe('Tangent', () => {
  it('numbers', () => {
    expect(tan(0)).to.be.equal(0);
    expect(tan(1)).to.be.equal(1.5574077246549023);
  });

  it('arrays', () => {
    expect(tan([0, 1])).to.be.eql([0, 1.5574077246549023]);
  });
});
