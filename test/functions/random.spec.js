import { random } from '../../src/functions/random.js';

describe('Random', () => {
  it('numbers', () => {
    // the upper bound of within() is inclusive, but the upper bound of random() is exclusive
    expect(random()).to.be.within(0, 1);
    expect(random(0)).toEqual(0);
    expect(random(3)).to.be.within(0, 3);
    expect(random(-100, 100)).to.be.within(-100, 100);
    expect(random(1, 1)).toEqual(1);
    expect(random(100, 100)).toEqual(100);
  });

  it('min greater than max', () => {
    expect(() => random(-1)).toThrow('Min is greater than max');
    expect(() => random(3, 1)).toThrow('Min is greater than max');
  });
});
