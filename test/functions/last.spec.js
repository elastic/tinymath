import { last } from '../../src/functions/last.js';

describe('Last', () => {
  it('numbers', () => {
    expect(last(-10)).toEqual(-10);
    expect(last(10)).toEqual(10);
  });

  it('arrays', () => {
    expect(last([])).toEqual(undefined);
    expect(last([-1])).toEqual(-1);
    expect(last([-10, -20, -30, -40])).toEqual(-40);
    expect(last([-13, 30, -90, 200])).toEqual(200);
  });

  it('skips number validation', () => {
    expect(last).to.have.property('skipNumberValidation', true);
  });
});
