/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

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
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
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
      peg$startRuleFunction  = peg$parsestart,

      peg$c0 = peg$otherExpectation("whitespace"),
      peg$c1 = /^[ \t\n\r]/,
      peg$c2 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),
      peg$c3 = /^[ ]/,
      peg$c4 = peg$classExpectation([" "], false, false),
      peg$c5 = /^["']/,
      peg$c6 = peg$classExpectation(["\"", "'"], false, false),
      peg$c7 = /^[A-Za-z_@.[\]\-]/,
      peg$c8 = peg$classExpectation([["A", "Z"], ["a", "z"], "_", "@", ".", "[", "]", "-"], false, false),
      peg$c9 = /^[0-9A-Za-z._@[\]\-]/,
      peg$c10 = peg$classExpectation([["0", "9"], ["A", "Z"], ["a", "z"], ".", "_", "@", "[", "]", "-"], false, false),
      peg$c11 = peg$otherExpectation("literal"),
      peg$c12 = function(literal) {
          return literal;
        },
      peg$c13 = function(chars) {
          return {
            type: 'variable',
            value: chars.join(''),
            location: simpleLocation(location()),
            text: text()
          };
        },
      peg$c14 = function(rest) {
          return {
            type: 'variable',
            value: rest.join(''),
            location: simpleLocation(location()),
            text: text()
          };
        },
      peg$c15 = "+",
      peg$c16 = peg$literalExpectation("+", false),
      peg$c17 = "-",
      peg$c18 = peg$literalExpectation("-", false),
      peg$c19 = function(left, rest) {
          return rest.reduce((acc, curr) => ({
            type: 'function',
            name: curr[0] === '+' ? 'add' : 'subtract',
            args: [acc, curr[1]],
            location: simpleLocation(location()),
            text: text()
          }), left)
        },
      peg$c20 = "*",
      peg$c21 = peg$literalExpectation("*", false),
      peg$c22 = "/",
      peg$c23 = peg$literalExpectation("/", false),
      peg$c24 = function(left, rest) {
          return rest.reduce((acc, curr) => ({
            type: 'function',
            name: curr[0] === '*' ? 'multiply' : 'divide',
            args: [acc, curr[1]],
            location: simpleLocation(location()),
            text: text()
          }), left)
        },
      peg$c25 = "(",
      peg$c26 = peg$literalExpectation("(", false),
      peg$c27 = ")",
      peg$c28 = peg$literalExpectation(")", false),
      peg$c29 = function(expr) {
          return expr
        },
      peg$c30 = peg$otherExpectation("arguments"),
      peg$c31 = ",",
      peg$c32 = peg$literalExpectation(",", false),
      peg$c33 = function(first, arg) {return arg},
      peg$c34 = function(first, rest) {
          return [first].concat(rest);
        },
      peg$c35 = /^["]/,
      peg$c36 = peg$classExpectation(["\""], false, false),
      peg$c37 = function(value) { return value.join(''); },
      peg$c38 = /^[']/,
      peg$c39 = peg$classExpectation(["'"], false, false),
      peg$c40 = /^[a-zA-Z_\-]/,
      peg$c41 = peg$classExpectation([["a", "z"], ["A", "Z"], "_", "-"], false, false),
      peg$c42 = "=",
      peg$c43 = peg$literalExpectation("=", false),
      peg$c44 = function(name, value) {
        return {
          type: 'namedArgument',
          name: name.join(''),
          value: value,
          location: simpleLocation(location()),
          text: text()
        };
       },
      peg$c45 = peg$otherExpectation("function"),
      peg$c46 = function(name, args) {
          return {
            type: 'function',
            name: name.join(''),
            args: args || [],
            location: simpleLocation(location()),
            text: text()
          };
        },
      peg$c47 = peg$otherExpectation("number"),
      peg$c48 = function() {
          return parseFloat(text());
          // return {
          //   type: 'number',
          //   value: parseFloat(text())
          // };
        },
      peg$c49 = /^[eE]/,
      peg$c50 = peg$classExpectation(["e", "E"], false, false),
      peg$c51 = peg$otherExpectation("exponent"),
      peg$c52 = ".",
      peg$c53 = peg$literalExpectation(".", false),
      peg$c54 = "0",
      peg$c55 = peg$literalExpectation("0", false),
      peg$c56 = /^[1-9]/,
      peg$c57 = peg$classExpectation([["1", "9"]], false, false),
      peg$c58 = /^[0-9]/,
      peg$c59 = peg$classExpectation([["0", "9"]], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

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
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

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
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
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
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

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
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0;

    s0 = peg$parseAddSubtract();

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c1.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c1.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c0); }
    }

    return s0;
  }

  function peg$parseSpace() {
    var s0;

    if (peg$c3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }

    return s0;
  }

  function peg$parseQuote() {
    var s0;

    if (peg$c5.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }

    return s0;
  }

  function peg$parseStartChar() {
    var s0;

    if (peg$c7.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c8); }
    }

    return s0;
  }

  function peg$parseValidChar() {
    var s0;

    if (peg$c9.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
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
          s1 = peg$c12(s2);
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
      if (peg$silentFails === 0) { peg$fail(peg$c11); }
    }

    return s0;
  }

  function peg$parseVariable() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseQuote();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseValidChar();
        if (s4 === peg$FAILED) {
          s4 = peg$parseSpace();
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseValidChar();
          if (s4 === peg$FAILED) {
            s4 = peg$parseSpace();
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseQuote();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c13(s3);
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
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseValidChar();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseValidChar();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s2);
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
    }

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
          s5 = peg$c15;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s5 = peg$c17;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
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
            s5 = peg$c15;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s5 = peg$c17;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c18); }
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
          s5 = peg$c20;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
        if (s5 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s5 = peg$c22;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
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
            s5 = peg$c20;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
          if (s5 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s5 = peg$c22;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
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
            s1 = peg$c24(s2, s3);
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
        s2 = peg$c25;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAddSubtract();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c27;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c28); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c29(s4);
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

  function peg$parseArgument_List() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseArgument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse_();
      if (s4 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s5 = peg$c31;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c32); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse_();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseArgument();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c33(s1, s7);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c31;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c32); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseArgument();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c33(s1, s7);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c31;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c32); }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s2);
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
      if (peg$silentFails === 0) { peg$fail(peg$c30); }
    }

    return s0;
  }

  function peg$parseString() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c35.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c36); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseValidChar();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseValidChar();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (peg$c35.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37(s2);
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
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$c38.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseValidChar();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseValidChar();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c37(s2);
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
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseValidChar();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseValidChar();
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37(s1);
        }
        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parseArgument() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c40.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c41); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c40.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c42;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseString();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c44(s1, s5);
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
    if (s0 === peg$FAILED) {
      s0 = peg$parseAddSubtract();
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
      if (peg$c40.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c40.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c41); }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c25;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseArgument_List();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s7 = peg$c27;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c28); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c46(s2, s5);
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
      if (peg$silentFails === 0) { peg$fail(peg$c45); }
    }

    return s0;
  }

  function peg$parseNumber() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 45) {
      s1 = peg$c17;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
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
            s1 = peg$c48();
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
      if (peg$silentFails === 0) { peg$fail(peg$c47); }
    }

    return s0;
  }

  function peg$parseE() {
    var s0;

    if (peg$c49.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c50); }
    }

    return s0;
  }

  function peg$parseExp() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseE();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s2 = peg$c17;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
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
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }

    return s0;
  }

  function peg$parseFraction() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c52;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c53); }
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
      s0 = peg$c54;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c55); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$c56.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c57); }
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

    if (peg$c58.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c59); }
    }

    return s0;
  }


     function simpleLocation (location) {
    // Returns an object representing the position of the function within the expression,
    // demarcated by the position of its first character and last character. We calculate these values
    // using the offset because the expression could span multiple lines, and we don't want to deal
    // with column and line values.
    return {
     min: location.start.offset,
     max: location.end.offset
    }
   }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
