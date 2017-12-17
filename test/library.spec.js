/*
  TODO: These tests are wildly imcomplete
  Need tests for spacing, etc
*/

import chai from 'chai';
import { evaluate, parse } from '../lib/tinymath.js';

chai.expect();
const expect = chai.expect;

describe('Parser', () => {
  describe('Numbers', () => {
    it('intergers', () => {
      expect(parse('10')).to.be.equal(10);
    });

    it('floats', () => {
      expect(parse('10.5')).to.be.equal(10.5);
    });

    it('negatives', () => {
      expect(parse('-10')).to.be.equal(-10);
      expect(parse('-10.5')).to.be.equal(-10.5);
    });
  });

  describe('Variables', () => {
    it('strings', () => {
      expect(parse('foo')).to.be.equal('foo');
    });
  });

  describe('Functions', () => {
    it('no arguments', () => {
      expect(parse('foo()')).to.be.deep.equal({name: 'foo', args: []});
    });

    it('arguments', () => {
      expect(parse('foo(5,10)')).to.be.deep.equal({name: 'foo', args: [5, 10]});
    });
  });
});

describe('Evaluate', () => {
  it('numbers', () => {
    expect(evaluate('10')).to.be.equal(10);
  });

  it('variables', () => {
    expect(evaluate('foo', {foo: 10})).to.be.equal(10);
    expect(evaluate('bar', {bar: [1, 2]})).to.be.deep.equal([1, 2]);
  });

  it('equations', () => {
    expect(evaluate('3 + 4')).to.be.equal(7);
    expect(evaluate('10 - 2')).to.be.equal(8);
    expect(evaluate('8 + 6 / 3')).to.be.equal(10);
    expect(evaluate('10 * (1 + 2)')).to.be.equal(30);
    expect(evaluate('(3 - 4) * 10')).to.be.equal(-10);
    expect(evaluate('-1 - -12')).to.be.equal(11);
    expect(evaluate('5/20')).to.be.equal(0.25);
    expect(evaluate('1 + 1 + 2 + 3 + 12')).to.be.equal(19);
    expect(evaluate('100 / 10 / 10')).to.be.equal(1);
  });

  it('equations with functions', () => {
    expect(evaluate('3 + multiply(10, 4)')).to.be.equal(43);
    expect(evaluate('3 + multiply(10, 4, 5)')).to.be.equal(203);
  });

  it('equations with variables', () => {
    expect(evaluate('3 + foo', {foo: 5})).to.be.equal(8);
    expect(evaluate('3 + foo', {foo: [5, 10]})).to.be.deep.equal([8, 13]);
    expect(evaluate('3 + foo', {foo: 5})).to.be.equal(8);
    expect(evaluate('sum(foo)', {foo: [5, 10, 15]})).to.be.equal(30);
    expect(evaluate('90 / sum(foo)', {foo: [5, 10, 15]})).to.be.equal(3);
  });
});
