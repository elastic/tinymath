# Tinymath

Import it:

```javascript
import { evaluate } from tinymath
```

Then use it:

```javascript
evaluate('foo + 20', {foo: [1, 2, 3]}); // [21, 22, 23]
evaluate('foo + bar', {foo: [1, 2, 3], bar: [4, 5, 6]}); // [5, 7, 9]
evaluate('multiply(foo, bar) / 10', {foo: [1, 2, 3], bar: [4, 5, 6]}); // [0.4, 1, 1.8]
```

### Adding Functions
See the `src/functions` directory. Add a new file and export it from `index.js`

#### TODO
- Functions are just functions. This needs definition files so we can generate documentation
- An AST here is overkill, we could definitely do this by injecting functions and scope into the peg parser. 
- Floating point operations have the normal Javascript limitations
