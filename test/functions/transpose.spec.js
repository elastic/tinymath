import { expect } from 'chai';
import { transpose } from '../../src/functions/lib/transpose';

describe('transpose', () => {
  it('2D arrays', () => {
    expect(
      transpose(
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        0
      )
    ).to.be.eql([
      [1, 3, 5],
      [2, 4, 6],
    ]);
    expect(transpose([10, 20, [10, 20, 30, 40], 30], 2)).to.be.eql([
      [10, 20, 10, 30],
      [10, 20, 20, 30],
      [10, 20, 30, 30],
      [10, 20, 40, 30],
    ]);
    expect(transpose([4, [1, 9], [3, 5]], 1)).to.be.eql([
      [4, 1, 3],
      [4, 9, 5],
    ]);
  });

  it('array length mismatch', () => {
    expect(() => transpose([[1], [2, 3]], 0)).to.throw('Array length mismatch');
  });
});
