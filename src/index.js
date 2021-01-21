import get from 'object-get';
import { parse as parseFn } from './grammar';
import { functions as includedFunctions } from './functions';

export function parse(input, options) {
  if (input == null) {
    throw new Error('Missing expression');
  }

  if (typeof input !== 'string') {
    throw new Error('Expression must be a string');
  }

  try {
    return parseFn(input, options);
  } catch (e) {
    throw new Error(`Failed to parse expression. ${e.message}`);
  }
}

export function evaluate(expression, scope = {}, injectedFunctions = {}) {
  scope = scope || {};
  return interpret(parse(expression), scope, injectedFunctions);
}

export function interpret(node, scope, injectedFunctions) {
  const functions = Object.assign({}, includedFunctions, injectedFunctions); // eslint-disable-line
  return exec(node);

  function exec(node) {
    const type = node.type;

    if (type === 'function') return invoke(node);

    if (type === 'variable') {
      const val = getValue(scope, node.value);
      if (typeof val === 'undefined') throw new Error(`Unknown variable: ${node.value}`);
      return val;
    }
    if (type === 'namedArgument') {
      // We are ignoring named arguments in the interpreter
      throw new Error(`Named arguments are not supported in tinymath itself, at ${node.name}`);
    }

    return node; // Can only be a number at this point
  }

  function invoke(node) {
    const { name, args } = node;
    const fn = functions[name];
    if (!fn) throw new Error(`No such function: ${name}`);
    const execOutput = args.map(exec);
    if (fn.skipNumberValidation || isOperable(execOutput)) return fn(...execOutput);
    return NaN;
  }
}

function getValue(scope, node) {
  // attempt to read value from nested object first, check for exact match if value is undefined
  const val = get(scope, node);
  return typeof val !== 'undefined' ? val : scope[node];
}

function isOperable(args) {
  return args.every((arg) => {
    if (Array.isArray(arg)) return isOperable(arg);
    return typeof arg === 'number' && !isNaN(arg);
  });
}
