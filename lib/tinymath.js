(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tinymath", [], factory);
	else if(typeof exports === 'object')
		exports["tinymath"] = factory();
	else
		root["tinymath"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
function pow(a, b) {
  if (b == null) throw new Error('Missing exponent');
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.pow(a, b);
    });
  }
  return Math.pow(a, b);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
function add() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return args[0].reduce(function (result, current) {
      return result + current;
    });
    return args[0];
  }

  return args.reduce(function (result, current) {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map(function (val, i) {
        return val + current[i];
      });
    }
    if (Array.isArray(result)) return result.map(function (val) {
      return val + current;
    });
    if (Array.isArray(current)) return current.map(function (val) {
      return val + result;
    });
    return result + current;
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
function log(a, b) {
  if (b == null) {
    if (Array.isArray(a)) {
      return a.map(function (a) {
        return Math.log(a);
      });
    }
    return Math.log(a);
  }

  if (b <= 0) throw new Error('base out of range');

  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.log(a) / Math.log(b);
    });
  }
  return Math.log(a) / Math.log(b);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;
function max() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return args[0].reduce(function (result, current) {
      return Math.max(result, current);
    });
    return args[0];
  }

  return args.reduce(function (result, current) {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map(function (val, i) {
        return Math.max(val, current[i]);
      });
    }
    if (Array.isArray(result)) return result.map(function (val) {
      return Math.max(val, current);
    });
    if (Array.isArray(current)) return current.map(function (val) {
      return Math.max(val, result);
    });
    return Math.max(result, current);
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;
function min() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return args[0].reduce(function (result, current) {
      return Math.min(result, current);
    });
    return args[0];
  }

  return args.reduce(function (result, current) {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map(function (val, i) {
        return Math.min(val, current[i]);
      });
    }
    if (Array.isArray(result)) return result.map(function (val) {
      return Math.min(val, current);
    });
    if (Array.isArray(current)) return current.map(function (val) {
      return Math.min(val, result);
    });
    return Math.min(result, current);
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtract = subtract;
function subtract(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map(function (val, i) {
      return val - b[i];
    });
  }
  if (Array.isArray(a)) return a.map(function (a) {
    return a - b;
  });
  if (Array.isArray(b)) return b.map(function (b) {
    return a - b;
  });
  return a - b;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.evaluate = evaluate;
exports.interpret = interpret;

var _grammar = __webpack_require__(7);

var _functions = __webpack_require__(8);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var parse = exports.parse = _grammar.parse;

function evaluate(expression, scope) {
  return interpret(parse(expression), scope);
}

function interpret(node, scope, injectedFunctions) {
  var functions = Object.assign({}, _functions.functions, injectedFunctions); // eslint-disable-line

  return exec(node);

  function exec(node) {
    var type = getType(node);
    if (type === 'function') {
      return invoke(node);
    }
    if (type === 'string') {
      if (typeof scope[node] === 'undefined') throw new Error('Unknown variable: ' + node);
      return scope[node];
    }
    return node; // Can only be a number at this point
  }

  function invoke(node) {
    var name = node.name,
        args = node.args;

    if (!functions[name]) throw new Error('No such function: ' + name);
    return functions[name].apply(functions, _toConsumableArray(args.map(exec)));
  }
}

function getType(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  if (type === 'object') {
    var keys = Object.keys(x);
    if (keys.length !== 2 || !x.name || !x.args) throw new Error('Invalid AST object');
    return 'function';
  }
  if (type === 'string' || type === 'number') return type;
  throw new Error('Unknown AST property type: ' + type);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function any(expectation) {
      return "any character";
    },

    end: function end(expectation) {
      return "end of input";
    },

    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction = peg$parsestart,
      peg$c0 = "+",
      peg$c1 = peg$literalExpectation("+", false),
      peg$c2 = "-",
      peg$c3 = peg$literalExpectation("-", false),
      peg$c4 = function peg$c4(left, rest) {
    return rest.reduce(function (acc, curr) {
      return {
        name: curr[0] === '+' ? 'add' : 'subtract',
        args: [acc, curr[1]]
      };
    }, left);
  },
      peg$c5 = "*",
      peg$c6 = peg$literalExpectation("*", false),
      peg$c7 = "/",
      peg$c8 = peg$literalExpectation("/", false),
      peg$c9 = function peg$c9(left, rest) {
    return rest.reduce(function (acc, curr) {
      return {
        name: curr[0] === '*' ? 'multiply' : 'divide',
        args: [acc, curr[1]]
      };
    }, left);
  },
      peg$c10 = "(",
      peg$c11 = peg$literalExpectation("(", false),
      peg$c12 = ")",
      peg$c13 = peg$literalExpectation(")", false),
      peg$c14 = function peg$c14(expr) {
    return expr;
  },
      peg$c15 = peg$otherExpectation("arguments"),
      peg$c16 = ",",
      peg$c17 = peg$literalExpectation(",", false),
      peg$c18 = function peg$c18(first, arg) {
    return arg;
  },
      peg$c19 = function peg$c19(first, rest) {
    return [first].concat(rest);
  },
      peg$c20 = peg$otherExpectation("function"),
      peg$c21 = /^[a-z]/,
      peg$c22 = peg$classExpectation([["a", "z"]], false, false),
      peg$c23 = function peg$c23(name, args) {
    return { name: name.join(''), args: args || [] };
  },
      peg$c24 = peg$otherExpectation("literal"),
      peg$c25 = function peg$c25(literal) {
    return literal;
  },
      peg$c26 = peg$otherExpectation("whitespace"),
      peg$c27 = /^[ \t\n\r]/,
      peg$c28 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),
      peg$c29 = /^[A-Za-z_]/,
      peg$c30 = peg$classExpectation([["A", "Z"], ["a", "z"], "_"], false, false),
      peg$c31 = /^[0-9A-Za-z._]/,
      peg$c32 = peg$classExpectation([["0", "9"], ["A", "Z"], ["a", "z"], ".", "_"], false, false),
      peg$c33 = function peg$c33(first, rest) {
    // We can open this up later. Strict for now.
    return [first].concat(rest).join('');
  },
      peg$c34 = peg$otherExpectation("number"),
      peg$c35 = function peg$c35() {
    return parseFloat(text());
  },
      peg$c36 = /^[eE]/,
      peg$c37 = peg$classExpectation(["e", "E"], false, false),
      peg$c38 = ".",
      peg$c39 = peg$literalExpectation(".", false),
      peg$c40 = "0",
      peg$c41 = peg$literalExpectation("0", false),
      peg$c42 = /^[1-9]/,
      peg$c43 = peg$classExpectation([["1", "9"]], false, false),
      peg$c44 = /^[0-9]/,
      peg$c45 = peg$classExpectation([["0", "9"]], false, false),
      peg$currPos = 0,
      peg$savedPos = 0,
      peg$posDetailsCache = [{ line: 1, column: 1 }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsestart() {
    var s0;

    s0 = peg$parseAddSubtract();

    return s0;
  }

  function peg$parseAddSubtract() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseMultiplyDivide();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 43) {
          s5 = peg$c0;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c1);
          }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s5 = peg$c2;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c3);
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseMultiplyDivide();
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 43) {
            s5 = peg$c0;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c1);
            }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s5 = peg$c2;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c3);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseMultiplyDivide();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMultiplyDivide() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseFactor();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s5 = peg$c5;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s5 = peg$c7;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c8);
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseFactor();
          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 42) {
            s5 = peg$c5;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseFactor();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c9(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFactor() {
    var s0;

    s0 = peg$parseGroup();
    if (s0 === peg$FAILED) {
      s0 = peg$parseFunction();
      if (s0 === peg$FAILED) {
        s0 = peg$parseLiteral();
      }
    }

    return s0;
  }

  function peg$parseGroup() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAddSubtract();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c12;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c13);
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c14(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseArguments() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseAddSubtract();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$parse_();
        if (s5 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s6 = peg$c16;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c17);
            }
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parse_();
            if (s7 !== peg$FAILED) {
              s8 = peg$parseAddSubtract();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c18(s2, s8);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c16;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c17);
              }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseAddSubtract();
                if (s8 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c18(s2, s8);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c16;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c17);
              }
            }
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c19(s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c15);
      }
    }

    return s0;
  }

  function peg$parseFunction() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c21.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c22);
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c21.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c22);
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c10;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c11);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseArguments();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s7 = peg$c12;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c23(s2, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c20);
      }
    }

    return s0;
  }

  function peg$parseLiteral() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNumber();
      if (s2 === peg$FAILED) {
        s2 = peg$parseVariable();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c24);
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c27.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c27.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c28);
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c26);
      }
    }

    return s0;
  }

  function peg$parseVariable() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      if (peg$c29.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c30);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c31.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c32);
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c31.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c32);
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNumber() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 45) {
      s1 = peg$c2;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c3);
      }
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseInteger();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseFraction();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseExp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c35();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c34);
      }
    }

    return s0;
  }

  function peg$parseE() {
    var s0;

    if (peg$c36.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }

    return s0;
  }

  function peg$parseExp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseE();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s2 = peg$c2;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c3);
        }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseDigit();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseDigit();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFraction() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c38;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c39);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseDigit();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDigit();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInteger() {
    var s0, s1, s2, s3;

    if (input.charCodeAt(peg$currPos) === 48) {
      s0 = peg$c40;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c41);
      }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$c42.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c43);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseDigit();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDigit();
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseDigit() {
    var s0;

    if (peg$c44.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c45);
      }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = undefined;

var _abs = __webpack_require__(9);

var _add = __webpack_require__(1);

var _cbrt = __webpack_require__(10);

var _ceil = __webpack_require__(11);

var _cube = __webpack_require__(12);

var _divide = __webpack_require__(13);

var _exp = __webpack_require__(14);

var _fix = __webpack_require__(15);

var _floor = __webpack_require__(16);

var _log = __webpack_require__(2);

var _log2 = __webpack_require__(17);

var _max = __webpack_require__(3);

var _mean = __webpack_require__(18);

var _median = __webpack_require__(19);

var _min = __webpack_require__(4);

var _mod = __webpack_require__(20);

var _mode = __webpack_require__(21);

var _multiply = __webpack_require__(22);

var _pow = __webpack_require__(0);

var _random = __webpack_require__(23);

var _range = __webpack_require__(24);

var _round = __webpack_require__(25);

var _sqrt = __webpack_require__(26);

var _square = __webpack_require__(27);

var _subtract = __webpack_require__(5);

var _sum = __webpack_require__(28);

var _unique = __webpack_require__(29);

var functions = exports.functions = {
  abs: _abs.abs,
  add: _add.add,
  cbrt: _cbrt.cbrt,
  ceil: _ceil.ceil,
  cube: _cube.cube,
  divide: _divide.divide,
  exp: _exp.exp,
  fix: _fix.fix,
  floor: _floor.floor,
  log: _log.log,
  log10: _log2.log10,
  max: _max.max,
  mean: _mean.mean,
  median: _median.median,
  min: _min.min,
  mod: _mod.mod,
  mode: _mode.mode,
  multiply: _multiply.multiply,
  pow: _pow.pow,
  random: _random.random,
  range: _range.range,
  round: _round.round,
  sqrt: _sqrt.sqrt,
  square: _square.square,
  subtract: _subtract.subtract,
  sum: _sum.sum,
  unique: _unique.unique
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = abs;
/**
 * Counts the number of unique values in an array
 * @param {Array} a
 * @return {number}
 */
function abs(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.abs(a);
    });
  }
  return Math.abs(a);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cbrt = cbrt;
function cbrt(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.cbrt(a);
    });
  }
  return Math.cbrt(a);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ceil = ceil;
function ceil(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.ceil(a);
    });
  }
  return Math.ceil(a);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cube = cube;

var _pow = __webpack_require__(0);

function cube(a) {
  return (0, _pow.pow)(a, 3);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divide = divide;
function divide(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map(function (val, i) {
      return val / b[i];
    });
  }
  if (Array.isArray(a)) return a.map(function (a) {
    return a / b;
  });
  if (Array.isArray(b)) return b.map(function (b) {
    return a / b;
  });
  return a / b;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exp = exp;
function exp(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.exp(a);
    });
  }
  return Math.exp(a);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fix = fix;
var fixer = function fixer(a) {
  if (a > 0) {
    return Math.floor(a);
  }
  return Math.ceil(a);
};

function fix(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return fixer(a);
    });
  }
  return fixer(a);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floor = floor;
function floor(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.floor(a);
    });
  }
  return Math.floor(a);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log10 = log10;

var _log = __webpack_require__(2);

function log10(a) {
  return (0, _log.log)(a, 10);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mean = mean;

var _add = __webpack_require__(1);

function mean() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return (0, _add.add)(args[0]) / args[0].length;
    return args[0];
  }
  var sum = _add.add.apply(undefined, args);

  if (Array.isArray(sum)) {
    return sum.map(function (val) {
      return val / args.length;
    });
  }

  return sum / args.length;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.median = median;
var findMedian = function findMedian(a) {
  var len = a.length;
  var half = Math.floor(len / 2);

  a.sort(function (a, b) {
    return a > b;
  });

  if (len % 2 === 0) {
    return (a[half] + a[half - 1]) / 2;
  }

  return a[half];
};

var transpose = function transpose(args, index) {
  var len = args[index].length;
  return args[index].map(function (col, i) {
    return args.map(function (row) {
      if (Array.isArray(row)) {
        if (row.length !== len) throw new Error('Matrix length mismatch');
        return row[i];
      }
      return row;
    });
  });
};

function median() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMedian(args[0]);
    return args[0];
  }

  var firstArray = args.findIndex(function (element) {
    return Array.isArray(element);
  });
  if (firstArray !== -1) {
    var result = transpose(args, firstArray);
    return result.map(function (val) {
      return findMedian(val);
    });
  }
  return findMedian(args);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mod = mod;
function mod(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) throw new Error('Matrix length mismatch');
    return a.map(function (val, i) {
      return val % b[i];
    });
  }
  if (Array.isArray(a)) return a.map(function (a) {
    return a % b;
  });
  if (Array.isArray(b)) return b.map(function (b) {
    return a % b;
  });
  return a % b;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mode = mode;
var findMode = function findMode(a) {
  var maxFreq = 0;
  var mapping = {};

  a.map(function (val) {
    if (mapping[val] === undefined) {
      mapping[val] = 0;
    }
    mapping[val] += 1;
    if (mapping[val] > maxFreq) {
      maxFreq = mapping[val];
    }
  });

  return Object.keys(mapping).filter(function (key) {
    return mapping[key] === maxFreq;
  }).map(function (val) {
    return parseFloat(val);
  }).sort(function (a, b) {
    return a - b;
  });
};

var transpose = function transpose(args, index) {
  var len = args[index].length;
  return args[index].map(function (col, i) {
    return args.map(function (row) {
      if (Array.isArray(row)) {
        if (row.length !== len) throw new Error('Matrix length mismatch');
        return row[i];
      }
      return row;
    });
  });
};

function mode() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMode(args[0]);
    return args[0];
  }

  var firstArray = args.findIndex(function (element) {
    return Array.isArray(element);
  });
  if (firstArray !== -1) {
    var result = transpose(args, firstArray);
    return result.map(function (val) {
      return findMode(val);
    });
  }
  return findMode(args);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
function multiply() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (result, current) {
    if (Array.isArray(result) && Array.isArray(current)) {
      if (current.length !== result.length) throw new Error('Matrix length mismatch');
      return result.map(function (val, i) {
        return val * current[i];
      });
    }
    if (Array.isArray(result)) return result.map(function (val) {
      return val * current;
    });
    if (Array.isArray(current)) return current.map(function (val) {
      return val * result;
    });
    return result * current;
  });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
function random(a, b) {
  if (a == null) return Math.random();

  // a: max, generate random number between 0 and a
  if (b == null) {
    if (a < 0) throw new Error("Min is be greater than max");
    return Math.random() * a;
  }

  // a: min, b: max, generate random number between a and b
  if (a > b) throw new Error("Min is be greater than max");
  return Math.random() * (b - a) + a;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;

var _max = __webpack_require__(3);

var _min = __webpack_require__(4);

var _subtract = __webpack_require__(5);

function range() {
  return (0, _subtract.subtract)(_max.max.apply(undefined, arguments), _min.min.apply(undefined, arguments));
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = round;
function round(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (Array.isArray(a)) {
    return a.map(function (a) {
      return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
    });
  }
  return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqrt = sqrt;
function sqrt(a) {
  if (Array.isArray(a)) {
    return a.map(function (a) {
      if (a < 0) throw new Error('Invalid number: negative');
      return Math.sqrt(a);
    });
  }

  if (a < 0) throw new Error('Invalid number: negative');
  return Math.sqrt(a);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;

var _pow = __webpack_require__(0);

function square(a) {
  return (0, _pow.pow)(a, 2);
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
var findSum = function findSum(total, current) {
  return total + current;
};

function sum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (total, current) {
    if (Array.isArray(current)) {
      return total + current.reduce(findSum, 0);
    }
    return total + current;
  }, 0);
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = unique;
/**
 * Counts the number of unique values in an array
 * @param {Array} a
 * @return {number}
 */

function unique(a) {
  if (Array.isArray(a)) {
    if (a.length < 1) return -1;
    return a.filter(function (val, i) {
      return a.indexOf(val) === i;
    }).length;
  }
  return 1;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=tinymath.js.map