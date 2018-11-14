import { expect } from 'chai';
import { radtodeg } from '../../src/functions/radtodeg.js';

describe('Radians to Degrees', () => {
  it('numbers', () => {
    expect(radtodeg(0)).to.be.equal(0);
    expect(radtodeg(1.5707963267948966)).to.be.equal(90);
  });

  it('arrays', () => {
    expect(radtodeg([0, 1.5707963267948966, 3.141592653589793, 6.283185307179586])).to.be.eql([0, 90, 180, 360]);
  });
});
