import { expect } from 'chai';
import { random } from '../../src/functions/random.js';

describe('Random', () => {
  it('numbers', () => {
    // the upper bound of within() is inclusive, but the upper bound of random() is exclusive
    expect(random()).to.be.within(0, 1);
    expect(random(0)).to.be.equal(0);
    expect(random(3)).to.be.within(0, 3);
    expect(random(-100, 100)).to.be.within(-100, 100);
    expect(random(1, 1)).to.be.equal(1);
    expect(random(100, 100)).to.be.equal(100);
  });

  it('min greater than max', () => {
    expect(() => random(-1)).to.throw();
    expect(() => random(3, 1)).to.throw();
  });
});
