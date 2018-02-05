/*
  TODO: These tests are wildly imcomplete
  Need tests for spacing, etc
*/

import { expect } from 'chai';
import { evaluate, parse } from '../lib/tinymath.js';

describe('Parser', () => {
  describe('Numbers', () => {
    it('integers', () => {
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
      expect(parse('foo()')).to.be.eql({ name: 'foo', args: [] });
    });

    it('arguments', () => {
      expect(parse('foo(5,10)')).to.be.eql({ name: 'foo', args: [5, 10] });
    });
  });

  it('missing expression', () => {
    expect(() => parse(undefined)).to.throw('Missing expression');
    expect(() => parse(null)).to.throw('Missing expression');
  });

  it('Failed parse', () => {
    expect(() => parse('')).to.throw('Failed to parse expression');
  });

  it('Not a string', () => {
    expect(() => parse(3)).to.throw('Expression must be a string');
  });
});

describe('Evaluate', () => {
  it('numbers', () => {
    expect(evaluate('10')).to.be.equal(10);
  });

  it('variables', () => {
    expect(evaluate('foo', { foo: 10 })).to.be.equal(10);
    expect(evaluate('bar', { bar: [1, 2] })).to.be.eql([1, 2]);
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
    expect(evaluate('3 + foo', { foo: 5 })).to.be.equal(8);
    expect(evaluate('3 + foo', { foo: [5, 10] })).to.be.eql([8, 13]);
    expect(evaluate('3 + foo', { foo: 5 })).to.be.equal(8);
    expect(evaluate('sum(foo)', { foo: [5, 10, 15] })).to.be.equal(30);
    expect(evaluate('90 / sum(foo)', { foo: [5, 10, 15] })).to.be.equal(3);
    expect(evaluate('multiply(foo, bar)', { foo: [1, 2, 3], bar: [4, 5, 6] })).to.be.eql([
      4,
      10,
      18,
    ]);
  });

  it('equations with arrays using special operator functions', () => {
    expect(evaluate('foo + bar', { foo: [1, 2, 3], bar: [4, 5, 6] })).to.be.eql([5, 7, 9]);
    expect(evaluate('foo - bar', { foo: [1, 2, 3], bar: [4, 5, 6] })).to.be.eql([-3, -3, -3]);
    expect(evaluate('foo * bar', { foo: [1, 2, 3], bar: [4, 5, 6] })).to.be.eql([4, 10, 18]);
    expect(evaluate('foo / bar', { foo: [1, 2, 3], bar: [4, 5, 6] })).to.be.eql([
      1 / 4,
      2 / 5,
      3 / 6,
    ]);
  });

  it('missing expression', () => {
    expect(() => evaluate('')).to.throw('Failed to parse expression');
  });
});
