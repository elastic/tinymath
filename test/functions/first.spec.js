import { first } from '../../src/functions/first.js';

describe('First', () => {
  it('numbers', () => {
    expect(first(-10)).toEqual(-10);
    expect(first(10)).toEqual(10);
  });

  it('arrays', () => {
    expect(first([])).toEqual(undefined);
    expect(first([-1])).toEqual(-1);
    expect(first([-10, -20, -30, -40])).toEqual(-10);
    expect(first([-13, 30, -90, 200])).toEqual(-13);
  });

  it('skips number validation', () => {
    expect(first).to.have.property('skipNumberValidation', true);
  });
});
