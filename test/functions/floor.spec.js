import { expect } from 'chai';
import { floor } from '../../src/functions/floor.js';

describe('Floor', () => {
  it('numbers', () => {
    expect(floor(-10.5)).to.be.equal(Math.floor(-10.5));
    expect(floor(-10.1)).to.be.equal(Math.floor(-10.1));
    expect(floor(10.9)).to.be.equal(Math.floor(10.9));
  });

  it('arrays', () => {
    expect(floor([-10.5, -20.9, -30.1, -40.2])).to.be.eql([
      Math.floor(-10.5),
      Math.floor(-20.9),
      Math.floor(-30.1),
      Math.floor(-40.2),
    ]);
    expect(floor([2.9, 5.1, 3.5, 4.3])).to.be.eql([
      Math.floor(2.9),
      Math.floor(5.1),
      Math.floor(3.5),
      Math.floor(4.3),
    ]);
  });
});
