import { cube } from '../../src/functions/cube.js';

describe('Cube', () => {
  it('numbers', () => {
    expect(cube(3)).toEqual(27);
    expect(cube(-1)).toEqual(-1);
  });

  it('arrays', () => {
    expect(cube([3, 4, 5])).toEqual([27, 64, 125]);
    expect(cube([1, 2, 10])).toEqual([1, 8, 1000]);
  });
});
