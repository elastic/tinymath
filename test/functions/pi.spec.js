import { pi } from '../../src/functions/pi.js';

describe('PI', () => {
  it('constant', () => {
    expect(pi()).toEqual(Math.PI);
  });
});
