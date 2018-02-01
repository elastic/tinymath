import { expect } from 'chai';
import { square } from '../../src/functions/square.js';

describe('Square', () => {
  it('numbers', () => {
    expect(square(3)).to.be.equal(9);
    expect(square(-1)).to.be.equal(1);
  });

  it('arrays', () => {
    expect(square([3, 4, 5])).to.be.eql([9, 16, 25]);
    expect(square([1, 2, 10])).to.be.eql([1, 4, 100]);
  });
});
