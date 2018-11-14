import { expect } from 'chai';
import { pi } from '../../src/functions/pi.js';

describe('PI', () => {
  it('constant', () => {
    expect(pi()).to.be.equal(Math.PI);
  });
});
