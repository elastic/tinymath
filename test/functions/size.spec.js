import { expect } from 'chai';
import { size } from '../../src/functions/size.js';

describe('Size (also Count)', () => {
  it('array', () => {
    expect(size([])).to.be.equal(0);
    expect(size([10, 20, 30, 40])).to.be.equal(4);
  });

  it('not an array', () => {
    expect(() => size(null)).to.throw();
    expect(() => size(undefined)).to.throw();
    expect(() => size('string')).to.throw();
    expect(() => size(10)).to.throw();
    expect(() => size(true)).to.throw();
    expect(() => size({})).to.throw();
    expect(() => size(function() {})).to.throw();
  });

  it('skips number validation', () => {
    expect(size).to.have.property('skipNumberValidation', true);
  });
});
