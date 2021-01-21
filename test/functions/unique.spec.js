import { unique } from '../../src/functions/unique.js';

describe('Unique', () => {
  it('numbers', () => {
    expect(unique(1)).toEqual(1);
    expect(unique(10000)).toEqual(1);
  });

  it('arrays', () => {
    expect(unique([])).toEqual(0);
    expect(unique([-10, -20, -30, -40])).toEqual(4);
    expect(unique([-13, 30, -90, 200])).toEqual(4);
    expect(unique([1, 2, 3, 4, 2, 2, 2, 3, 4, 2, 4, 5, 2, 1, 4, 2])).toEqual(5);
  });

  it('skips number validation', () => {
    expect(unique).to.have.property('skipNumberValidation', true);
  });
});
