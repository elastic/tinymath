import chai from 'chai';
import { subtract } from '../../src/functions/subtract.js';

chai.expect();
const expect = chai.expect;

describe('Sutract', () => {
  it('number, number', () => {
    expect(subtract(10, 2)).to.be.equal(8);
    expect(subtract(0.1, 0.2)).to.be.eql(0.1 - 0.2);
  });

  it('array, number', () => {
    expect(subtract([10, 20, 30, 40], 10)).to.be.eql([0, 10, 20, 30]);
  });

  it('number, array', () => {
    expect(subtract(10, [1, 2, 5, 10])).to.be.eql([9, 8, 5, 0]);
  });

  it('array, array', () => {
    // const lengthErr = new Error('Matrix length mismatch');
    expect(subtract([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([10, 46, 57, 68]);

    expect(() => subtract([1, 2], [3])).to.throw();
  });
});
