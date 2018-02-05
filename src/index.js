import { parse as parseFn } from './grammar';
import { functions as includedFunctions } from './functions';

export const parse = parseFn;

export function evaluate(expression, scope) {
  let parsedExp;
  try {
    parsedExp = parse(expression);
  } catch (e) {
    throw new Error('Failed to parse empty expression.');
  }
  return interpret(parsedExp, scope);
}

export function interpret(node, scope, injectedFunctions) {
  const functions = Object.assign({}, includedFunctions, injectedFunctions); // eslint-disable-line

  return exec(node);

  function exec(node) {
    const type = getType(node);
    if (type === 'function') {
      return invoke(node);
    }
    if (type === 'string') {
      if (typeof scope[node] === 'undefined') throw new Error(`Unknown variable: ${node}`);
      return scope[node];
    }
    return node; // Can only be a number at this point
  }

  function invoke(node) {
    const { name, args } = node;
    if (!functions[name]) throw new Error(`No such function: ${name}`);
    return functions[name](...args.map(exec));
  }
}

function getType(x) {
  const type = typeof x;
  if (type === 'object') {
    const keys = Object.keys(x);
    if (keys.length !== 2 || !x.name || !x.args) throw new Error('Invalid AST object');
    return 'function';
  }
  if (type === 'string' || type === 'number') return type;
  throw new Error(`Unknown AST property type: ${type}`);
}
