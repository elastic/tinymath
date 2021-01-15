// tinymath parsing grammar

start
  = Expression

// characters

_ "whitespace"
  = [ \t\n\r]*

Space
  = [ ]

Quote
  = [\"\']

StartChar
  = [A-Za-z_@.\[\]-]

ValidChar
  = [0-9A-Za-z._@\[\]-]

// literals and variables

Literal "literal"
  = _ literal:(Number / Variable) _ {
    return literal;
  }

// Quoted variables are interpreted as strings
// but unquoted variables are more restrictive
Variable
  = _ Quote chars:(ValidChar / Space)* Quote _ {
    return chars.join('');
  }
  / _ rest:ValidChar+ _ {
    return rest.join('');
  }

// expressions

Expression
  = AddSubtract

AddSubtract
  = _ left:MultiplyDivide rest:(('+' / '-') MultiplyDivide)* _ {
    return rest.reduce((acc, curr) => ({
      name: curr[0] === '+' ? 'add' : 'subtract',
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

Group
  = _ '(' _ expr:Expression _ ')' _ {
    return expr
  }

Argument_List "arguments"
  = first:Argument rest:(_ ',' _ arg:Argument {return arg})* _ ','? {
    return [first].concat(rest);
  }
  
Argument
 = name:[a-zA-Z_-]+ _ '=' _ value:Literal {
  return {
   name: name.join(''),
   value: value,
  };
 }
 / arg:Expression

Function "function"
  = _ name:[a-zA-Z_-]+ '(' _ args:Argument_List? _ ')' _ {
    return {name: name.join(''), args: args || []};
  }

// Numbers. Lol.

Number "number"
  = '-'? Integer Fraction? Exp? { return parseFloat(text()); }

E
  = [eE]

Exp "exponent"
  = E '-'? Digit+

Fraction
  = '.' Digit+

Integer
  = '0'
  / ([1-9] Digit*)

Digit
  = [0-9]
