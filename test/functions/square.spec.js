import { expect } from 'chai';
import { square } from '../../src/functions/square.js';

describe('Square', () => {
  it('numbers', () => {
    expect(square(3)).to.be.equal(Math.pow(3, 2));
    expect(square(-1)).to.be.equal(Math.pow(-1, 2));
  });

  it('arrays', () => {
    expect(square([3, 4, 5])).to.be.eql([Math.pow(3, 2), Math.pow(4, 2), Math.pow(5, 2)]);
    expect(square([1, 2, 10])).to.be.eql([Math.pow(1, 2), Math.pow(2, 2), Math.pow(10, 2)]);
  });
});
