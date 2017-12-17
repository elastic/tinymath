// tinymath parsing grammar

start
 = Expression

Expression
 = AddSubtract

AddSubtract
 = _ left:MultiplyDivide rest:(('+' / '-') MultiplyDivide)* _ {
  return rest.reduce((acc, curr) => ({
   name: curr[0] === '+' ? 'sum' : 'subtract',
   args: [acc, curr[1]]
  }), left)
 }

MultiplyDivide
 = _ left:Factor rest:(('*' / '/') Factor)* _ {
  return rest.reduce((acc, curr) => ({
   name: curr[0] === '*' ? 'multiply' : 'divide',
   args: [acc, curr[1]]
  }), left)
 }

Factor
 = Group
 / Function
 / Literal

Group = _ '(' _ expr:Expression _ ')' _ {
 return expr
}

Arguments 'arguments'
 = _ first:Expression rest:(_ ',' _ arg:Expression {return arg})* _ ','? _ {
  return [first].concat(rest);
 }

Function "function"
 = _ name:[a-z]+ '(' _ args:Arguments? _ ')' _ {
  return {name: name.join(''), args: args || []};
 }

Literal "literal"
 = _ literal:(Number / Variable) _ { return literal;}

_ "whitespace"
  = [ \t\n\r]*

Variable
 = _ first:[A-Za-z_] rest:[0-9A-Za-z._]* _ { // We can open this up later. Strict for now.
  return [first].concat(rest).join('');
 }

// Numbers. Lol.

Number "number"
  = '-'? Integer Fraction? Exp? { return parseFloat(text()); }

E
  = [eE]

Exp
  = E '-'? Digit+

Fraction
  = '.' Digit+

Integer
  = '0'
  / ([1-9] Digit*)

Digit
 = [0-9]
