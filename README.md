# Tinymath

Tinymath is a tiny arithmetic and function evaluator for simple numbers and arrays. Named properties can be accessed from an optional scope parameter and new functions can be added without rebuilding. Enjoy.

See [Function Documentation](/docs/functions.md) for details on built-in functions available in Tinymath.

```javascript
import { evaluate } from tinymath

// Simple math
evaluate('10 + 20'); // 30
evaluate('round(3.141592)') // 3

// Named properties
evaluate('foo + 20', {foo: 5}); // 25

// Arrays
evaluate('bar + 20', {bar: [1, 2, 3]}); // [21, 22, 23]
evaluate('bar + baz', {bar: [1, 2, 3], baz: [4, 5, 6]}); // [5, 7, 9]
evaluate('multiply(bar, baz) / 10', {bar: [1, 2, 3], baz: [4, 5, 6]}); // [0.4, 1, 1.8]
```

### Adding Functions

Functions can be injected, and built in function overwritten, via the 3rd argument to `evaluate`:

```javascript
import { evaluate } from tinymath

evaluate('plustwo(foo)', {foo: 5}, {
    plustwo: function(a) {
        return a + 2;
    }
}); // 7
```

### Parsing

You can get to the parsed AST by importing `parse`

```javascript
import { parse } from tinymath

parse('1 + random()')
/*
{
   "name": "add",
   "args": [
      1,
      {
         "name": "random",
         "args": []
      }
   ]
}
*/
```

#### TODO

* Functions are just functions. This needs definition files so we can generate documentation
* An AST here is overkill, we could definitely do this by injecting functions and scope into the peg parser.
* Floating point operations have the normal Javascript limitations
