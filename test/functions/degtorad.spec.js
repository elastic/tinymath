import { expect } from 'chai';
import { degtorad } from '../../src/functions/degtorad.js';

describe('Degrees to Radians', () => {
  it('numbers', () => {
    expect(degtorad(0)).to.be.equal(0);
    expect(degtorad(90)).to.be.equal(1.5707963267948966);
  });

  it('arrays', () => {
    expect(degtorad([0, 90, 180, 360])).to.be.eql([0, 1.5707963267948966, 3.141592653589793, 6.283185307179586]);
  });
});
