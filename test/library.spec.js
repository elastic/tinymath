/*
  TODO: These tests are wildly imcomplete
  Need tests for spacing, etc
*/

import { expect } from 'chai';
import { evaluate, parse } from '..';

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
      expect(parse('f')).to.be.equal('f');
      expect(parse('foo')).to.be.equal('foo');
    });

    it('allowed characters', () => {
      expect(parse('_foo')).to.be.equal('_foo');
      expect(parse('@foo')).to.be.equal('@foo');
      expect(parse('.foo')).to.be.equal('.foo');
      expect(parse('-foo')).to.be.equal('-foo');
      expect(parse('_foo0')).to.be.equal('_foo0');
      expect(parse('@foo0')).to.be.equal('@foo0');
      expect(parse('.foo0')).to.be.equal('.foo0');
      expect(parse('-foo0')).to.be.equal('-foo0');
    });
  });

  describe('quoted variables', () => {
    it('strings with double quotes', () => {
      expect(parse('"foo"')).to.be.equal('foo');
      expect(parse('"f b"')).to.be.equal('f b');
      expect(parse('"foo bar"')).to.be.equal('foo bar');
      expect(parse('"foo bar fizz buzz"')).to.be.equal('foo bar fizz buzz');
      expect(parse('"foo   bar   baby"')).to.be.equal('foo   bar   baby');
    });

    it('strings with single quotes', () => {
      /* eslint-disable prettier/prettier */
      expect(parse('\'foo\'')).to.be.equal('foo');
      expect(parse('\'f b\'')).to.be.equal('f b');
      expect(parse('\'foo bar\'')).to.be.equal('foo bar');
      expect(parse('\'foo bar fizz buzz\'')).to.be.equal('foo bar fizz buzz');
      expect(parse('\'foo   bar   baby\'')).to.be.equal('foo   bar   baby');
      /* eslint-enable prettier/prettier */
    });

    it('allowed characters', () => {
      expect(parse('"_foo bar"')).to.be.equal('_foo bar');
      expect(parse('"@foo bar"')).to.be.equal('@foo bar');
      expect(parse('".foo bar"')).to.be.equal('.foo bar');
      expect(parse('"-foo bar"')).to.be.equal('-foo bar');
      expect(parse('"_foo0 bar1"')).to.be.equal('_foo0 bar1');
      expect(parse('"@foo0 bar1"')).to.be.equal('@foo0 bar1');
      expect(parse('".foo0 bar1"')).to.be.equal('.foo0 bar1');
      expect(parse('"-foo0 bar1"')).to.be.equal('-foo0 bar1');
    });

    it('invalid characters in double quotes', () => {
      const check = str => () => parse(str);
      expect(check('" foo bar"')).to.throw('but "\\"" found');
      expect(check('"foo bar "')).to.throw('but "\\"" found');
      expect(check('"0foo"')).to.throw('but "\\"" found');
      expect(check('" foo bar"')).to.throw('but "\\"" found');
      expect(check('"foo bar "')).to.throw('but "\\"" found');
      expect(check('"0foo"')).to.throw('but "\\"" found');
    });

    it('invalid characters in single quotes', () => {
      const check = str => () => parse(str);
      /* eslint-disable prettier/prettier */
      expect(check('\' foo bar\'')).to.throw('but "\'" found');
      expect(check('\'foo bar \'')).to.throw('but "\'" found');
      expect(check('\'0foo\'')).to.throw('but "\'" found');
      expect(check('\' foo bar\'')).to.throw('but "\'" found');
      expect(check('\'foo bar \'')).to.throw('but "\'" found');
      expect(check('\'0foo\'')).to.throw('but "\'" found');
      /* eslint-enable prettier/prettier */
    });
  });

  describe('Functions', () => {
    it('no arguments', () => {
      expect(parse('foo()')).to.be.eql({ name: 'foo', args: [] });
    });

    it('arguments', () => {
      expect(parse('foo(5,10)')).to.be.eql({ name: 'foo', args: [5, 10] });
    });

    it('arguments with strings', () => {
      expect(parse('foo("string with spaces")')).to.be.eql({
        name: 'foo',
        args: ['string with spaces'],
      });

      /* eslint-disable prettier/prettier */
      expect(parse('foo(\'string with spaces\')')).to.be.eql({
        name: 'foo',
        args: ['string with spaces'],
      });
      /* eslint-enable prettier/prettier */
    });
  });

  it('Missing expression', () => {
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

  it('equations with quoted variables', () => {
    expect(evaluate('"b" * 7', { b: 3 })).to.be.eql(21);
    expect(evaluate('"space name" * 2', { 'space name': [1, 2, 21] })).to.be.eql([2, 4, 42]);
    expect(evaluate('sum("space name")', { 'space name': [1, 2, 21] })).to.be.eql(24);
  });

  it('equations with injected functions', () => {
    expect(
      evaluate(
        'plustwo(foo)',
        { foo: 5 },
        {
          plustwo: function(a) {
            return a + 2;
          },
        }
      )
    ).to.be.equal(7);
    expect(
      evaluate('negate(1)', null, {
        negate: function(a) {
          return -a;
        },
      })
    ).to.be.equal(-1);
    expect(
      evaluate('stringify(2)', null, {
        stringify: function(a) {
          return '' + a;
        },
      })
    ).to.be.equal('2');
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

  it('missing referenced scope when used in injected function', () => {
    expect(() =>
      evaluate('increment(foo)', null, {
        increment: function(a) {
          return a + 1;
        },
      })
    ).to.throw('Unknown variable: foo');
  });

  it('invalid context datatypes', () => {
    expect(evaluate('mean(foo)', { foo: [true, true, false] })).to.be.NaN;
    expect(evaluate('mean(foo + bar)', { foo: [true, true, false], bar: [1, 2, 3] })).to.be.NaN;
    expect(evaluate('mean(foo)', { foo: ['dog', 'cat', 'mouse'] })).to.be.NaN;
    expect(evaluate('mean(foo + 2)', { foo: ['dog', 'cat', 'mouse'] })).to.be.NaN;
    expect(evaluate('foo + bar', { foo: NaN, bar: [4, 5, 6] })).to.be.NaN;
  });
});
