import { expect } from 'chai';
import { first } from '../../src/functions/first.js';

describe('First', () => {
  it('numbers', () => {
    expect(first(-10)).to.be.equal(-10);
    expect(first(10)).to.be.equal(10);
  });

  it('arrays', () => {
    expect(first([])).to.be.eql(undefined);
    expect(first([-1])).to.be.eql(-1);
    expect(first([-10, -20, -30, -40])).to.be.eql(-10);
    expect(first([-13, 30, -90, 200])).to.be.eql(-13);
  });
});
