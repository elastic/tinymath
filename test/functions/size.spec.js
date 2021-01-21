import { expect } from 'chai';
import { size } from '../../src/functions/size.js';

describe('Size (also Count)', () => {
  it('array', () => {
    expect(size([])).to.be.equal(0);
    expect(size([10, 20, 30, 40])).to.be.equal(4);
  });

  it('not an array', () => {
    expect(() => size(null)).to.throw('Must pass an array');
    expect(() => size(undefined)).to.throw('Must pass an array');
    expect(() => size('string')).to.throw('Must pass an array');
    expect(() => size(10)).to.throw('Must pass an array');
    expect(() => size(true)).to.throw('Must pass an array');
    expect(() => size({})).to.throw('Must pass an array');
    expect(() => size(function () {})).to.throw('Must pass an array');
  });

  it('skips number validation', () => {
    expect(size).to.have.property('skipNumberValidation', true);
  });
});
