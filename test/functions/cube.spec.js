import { expect } from 'chai';
import { cube } from '../../src/functions/cube.js';

describe('Cube', () => {
  it('numbers', () => {
    expect(cube(3)).to.be.equal(Math.pow(3, 3));
    expect(cube(-1)).to.be.equal(Math.pow(-1, 3));
  });

  it('arrays', () => {
    expect(cube([3, 4, 5])).to.be.eql([Math.pow(3, 3), Math.pow(4, 3), Math.pow(5, 3)]);
    expect(cube([1, 2, 10])).to.be.eql([Math.pow(1, 3), Math.pow(2, 3), Math.pow(10, 3)]);
  });
});
