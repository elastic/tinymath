# Tinymath

```javascript
import { evaluate } from tinymath
```

```javascript
tinymath.evaluate('foo + 20', {foo: [1, 2, 3]});
tinymath.evaluate('foo + bar', {foo: [1, 2, 3], bar: [4, 5, 6]});
tinymath.evaluate('multiply(foo, bar) / 10', {foo: [1, 2, 3], bar: [4, 5, 6]});
```

### Adding Functions
See the `src/functions` directory. Add a new file and export it from `index.js`

#### TODO
- Functions are just functions. This needs definition files so we can generate documentation
- Basic arithmetic only, eg, no exponents. You could easily write a power function though
- A lot more functions, eg `round()`
- An AST here is overkill, we could definitely do this by injecting functions and scope into the peg parser. 
