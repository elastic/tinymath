import { expect } from 'chai';
import { cube } from '../../src/functions/cube.js';

describe('Cube', () => {
  it('numbers', () => {
    expect(cube(3)).to.be.equal(27);
    expect(cube(-1)).to.be.equal(-1);
  });

  it('arrays', () => {
    expect(cube([3, 4, 5])).to.be.eql([27, 64, 125]);
    expect(cube([1, 2, 10])).to.be.eql([1, 8, 1000]);
  });
});
