import { random } from '../../src/functions/random.js';

describe('Random', () => {
  it('numbers', () => {
    const random1 = random();
    expect(random1).toBeGreaterThanOrEqual(0);
    expect(random1).toBeLessThan(1);
    expect(random(0)).toEqual(0);
    const random3 = random(3);
    expect(random3).toBeGreaterThanOrEqual(0);
    expect(random3).toBeLessThan(3);
    const random100 = random(-100, 100);
    expect(random100).toBeGreaterThanOrEqual(-100);
    expect(random100).toBeLessThan(100);
    expect(random(1, 1)).toEqual(1);
    expect(random(100, 100)).toEqual(100);
  });

  it('min greater than max', () => {
    expect(() => random(-1)).toThrow('Min is greater than max');
    expect(() => random(3, 1)).toThrow('Min is greater than max');
  });
});
