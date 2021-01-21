import { tan } from '../../src/functions/tan.js';

describe('Tangent', () => {
  it('numbers', () => {
    expect(tan(0)).toEqual(0);
    expect(tan(1)).toEqual(1.5574077246549023);
  });

  it('arrays', () => {
    expect(tan([0, 1])).toEqual([0, 1.5574077246549023]);
  });
});
