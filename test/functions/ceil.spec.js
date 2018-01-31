import { expect } from 'chai';
import { ceil } from '../../src/functions/ceil.js';

describe('Ceil', () => {
  it('numbers', () => {
    expect(ceil(-10.5)).to.be.equal(Math.ceil(-10.5));
    expect(ceil(-10.1)).to.be.equal(Math.ceil(-10.1));
    expect(ceil(10.9)).to.be.equal(Math.ceil(10.9));
  });

  it('arrays', () => {
    expect(ceil([-10.5, -20.9, -30.1, -40.2])).to.be.eql([
      Math.ceil(-10.5),
      Math.ceil(-20.9),
      Math.ceil(-30.1),
      Math.ceil(-40.2),
    ]);
    expect(ceil([2.9, 5.1, 3.5, 4.3])).to.be.eql([
      Math.ceil(2.9),
      Math.ceil(5.1),
      Math.ceil(3.5),
      Math.ceil(4.3)],
  );
  });
});
