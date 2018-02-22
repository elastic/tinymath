import { expect } from 'chai';
import { last } from '../../src/functions/last.js';

describe('Last', () => {
  it('numbers', () => {
    expect(last(-10)).to.be.equal(-10);
    expect(last(10)).to.be.equal(10);
  });

  it('arrays', () => {
    expect(last([])).to.be.eql(undefined);
    expect(last([-1])).to.be.eql(-1);
    expect(last([-10, -20, -30, -40])).to.be.eql(-40);
    expect(last([-13, 30, -90, 200])).to.be.eql(200);
  });

  it('skips number validation', () => {
    expect(last).to.have.property('skipNumberValidation', true);
  });
});
