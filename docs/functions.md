# Functions
This document provides detailed information about the functions available in Tinymath and lists what parameters each function accepts, the return value of that function, and examples of how each function behaves. Most of the functions below accept arrays and apply JavaScript Math methods to each element of that array. For the functions that accept multiple arrays as parameters, the function generally does calculation index by index. Any function below can be wrapped by another function as long as the return type of the inner function matches the acceptable parameter type of the outer function.

## abs( a )
Calculates the absolute value of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The absolute value of `a`. Returns an array with the the absolute values of each element if `a` is an array.  
**Example**  
```js
abs(-1) // returns 1
abs(2) // returns 2
abs([-1 , -2, 3, -4]) // returns [1, 2, 3, 4]
```
***
## add( ...args )
Calculates the sum of one or more numbers/arrays passed into the function. If at least one array of numbers is passed into the function, the function will calculate the sum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The sum of all numbers in `args` if `args` contains only numbers. Returns an array of sums of the elements at each index, including all scalar numbers in `args` in the calculation at each index if `args` contains at least one array.  
**Throws**:

- `'Matrix length mismatch'` if `args` contains arrays of different lengths

**Example**  
```js
add(1, 2, 3) // returns 6
add([10, 20, 30, 40], 10, 20, 30) // returns [70, 80, 90, 100]
add([1, 2], 3, [4, 5], 6) // returns [(1 + 3 + 4 + 6), (2 + 3 + 5 + 6)] = [14, 16]
```
***
## cbrt( a )
Calculates the cube root of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The cube root of `a`. Returns an array with the the cube roots of each element if `a` is an array.  
**Example**  
```js
cbrt(-27) // returns -3
cbrt(94) // returns 4.546835943776344
cbrt([27, 64, 125]) // returns [3, 4, 5]
```
***
## ceil( a )
Calculates the ceiling of a number, i.e. rounds a number towards positive infinity. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The ceiling of `a`. Returns an array with the the ceilings of each element if `a` is an array.  
**Example**  
```js
ceil(1.2) // returns 2
ceil([1.1, 2.2, 3.3]) // returns [2, 3, 4]
```
***
## count( a )
Returns the length of an array. Alias for size


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>number</code> - The length of the array. Returns 1 if `a` is not an array.  
**Throws**:

- `'Must pass an array'` if `a` is not an array

**Example**  
```js
count([]) // returns 0
count([-1, -2, -3, -4]) // returns 4
count(100) // returns 1
count('foo') // returns 1
```
***
## cube( a )
Calculates the cube of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The cube of `a`. Returns an array with the the cubes of each element if `a` is an array.  
**Example**  
```js
cube(-3) // returns -27
cube([3, 4, 5]) // returns [27, 64, 125]
```
***
## divide( a,   b )
Divides two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | dividend, a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | divisor, a number or an array of numbers, `b` != 0 |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The quotient of `a` and `b` if both are numbers. Returns an array with the quotients applied index-wise to each element if `a` or `b` is an array.  
**Throws**:

- `'Matrix length mismatch'` if `a` and `b` are arrays with different lengths
- `'Cannot divide by 0'` if 'b' equals 0 or contains 0

**Example**  
```js
divide(6, 3) // returns 2
divide([10, 20, 30, 40], 10) // returns [1, 2, 3, 4]
divide(10, [1, 2, 5, 10]) // returns [10, 5, 2, 1]
divide([14, 42, 65, 108], [2, 7, 5, 12]) // returns [7, 6, 13, 9]
```
***
## exp( a )
Calculates the exponent of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The exponent of `a`. Returns an array with the exponents of each element if `a` is an array.  
**Example**  
```js
exp(2) // returns e^2 = 7.3890560989306495
exp([1, 2, 3]) // returns [e^1, e^2, e^3] = [2.718281828459045, 7.3890560989306495, 20.085536923187668]
```
***
## first( a )
Returns the first element of an array. If anything other than an array is passed in, the input is returned.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>\*</code> - The first element of 'a'. Returns `a` if `a` is not an array.  
**Example**  
```js
first(2) // returns 2
first('foo') // returns 'foo'
first([1, 2, 3]) // returns 1
```
***
## fix( a )
Calculates the fix of a number, i.e. rounds a number towards 0. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The fix of `a`. Returns an array with the the fixes for each element if `a` is an array.  
**Example**  
```js
fix(1.2) // returns 1
fix(-1.8) // returns 1
fix([1.8, 2.9, -3.7, -4.6]) // returns [1, 2, -3, -4]
```
***
## floor( a )
Calculates the floor of a number, i.e. rounds a number towards negative infinity. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The floor of `a`. Returns an array with the the floor of each element if `a` is an array.  
**Example**  
```js
floor(1.2) // returns 1
floor([1.7, 2.8, 3.9]) // returns [1, 2, 3]
```
***
## last( a )
Returns the last element of an array. If anything other than an array is passed in, the input is returned.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>\*</code> - The last element of 'a'. Returns `a` if `a` is not an array.  
**Example**  
```js
last(2) // returns 2
last('foo') // returns 'foo'
last([1, 2, 3]) // returns 3
```
***
## log( a,   b )
Calculates the logarithm of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers, all numbers must be greater than 0 |
| b | <code>Object</code> | (optional) base for the logarithm. If not provided a value, the default base is e, and the natural log is calculated. |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The logarithm of `a`. Returns an array with the the logarithms of each element if `a` is an array.  
**Throws**:

- `'Base out of range'` if `b` <= 0

**Example**  
```js
log(1) // returns 0
log(64, 8) // returns 2
log(42, 5) // returns 2.322344707681546
log([2, 4, 8, 16, 32], 2) // returns [1, 2, 3, 4, 5]
```
***
## log10( a )
Calculates the logarithm base 10 of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The logarithm of `a`. Returns an array with the the logarithms base 10 of each element if `a` is an array.  
**Example**  
```js
log(10) // returns 1
log(100) // returns 2
log(80) // returns 1.9030899869919433
log([10, 100, 1000, 10000, 100000]) // returns [1, 2, 3, 4, 5]
```
***
## max( ...args )
Finds the maximum value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the maximum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The maximum value of all numbers if `args` contains only numbers. Returns an array with the the maximum values at each index, including all scalar numbers in `args` in the calculation at each index if `args` contains at least one array.  
**Throws**:

- `'Matrix length mismatch'` if `args` contains arrays of different lengths

**Example**  
```js
max(1, 2, 3) // returns 3
max([10, 20, 30, 40], 15) // returns [15, 20, 30, 40]
max([1, 9], 4, [3, 5]) // returns [4, 9]
```
***
## mean( ...args )
Finds the mean value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mean by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The mean value of all numbers if `args` contains only numbers. Returns an array with the the mean values of each index, including all scalar numbers in `args` in the calculation at each index if `args` contains at least one array.  
**Example**  
```js
mean(1, 2, 3) // returns 2
mean([10, 20, 30, 40], 20) // returns [15, 20, 25, 30]
mean([1, 9], 5, [3, 4]) // returns [3, 6]
```
***
## median( ...args )
Finds the median value(s) of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the median by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The median value of all numbers if `args` contains only numbers. Returns an array with the the median values of each index, including all scalar numbers in `args` in the calculation at each index if `args` contains at least one array.  
**Example**  
```js
median(1, 1, 2, 3) // returns 1.5
median(1, 1, 2, 2, 3) // returns 2
median([10, 20, 30, 40], 10, 20, 30) // returns [15, 20, 25, 25]
median([1, 9], 4, [3, 5]) // returns [3, 4]
```
***
## min( ...args )
Finds the minimum value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the minimum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The minimum value of all numbers if `args` contains only numbers. Returns an array with the the minimum values of each index, including all scalar numbers in `args` in the calculation at each index if `a` is an array.  
**Throws**:

- `'Matrix length mismatch'` if `args` contains arrays of different lengths

**Example**  
```js
min(1, 2, 3) // returns 1
min([10, 20, 30, 40], 25) // returns [10, 20, 25, 25]
min([1, 9], 4, [3, 5]) // returns [1, 4]
```
***
## mod( a,   b )
Remainder after dividing two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | dividend, a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | divisor, a number or an array of numbers, `b` != 0 |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The remainder of `a` divided by `b` if both are numbers. Returns an array with the the remainders applied index-wise to each element if `a` or `b` is an array.  
**Throws**:

- `'Matrix length mismatch'` if `a` and `b` are arrays with different lengths
- `'Cannot divide by 0'` if 'b' equals 0 or contains 0

**Example**  
```js
mod(10, 7) // returns 3
mod([11, 22, 33, 44], 10) // returns [1, 2, 3, 4]
mod(100, [3, 7, 11, 23]) // returns [1, 2, 1, 8]
mod([14, 42, 65, 108], [5, 4, 14, 2]) // returns [5, 2, 9, 0]
```
***
## mode( ...args )
Finds the mode value(s) of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mode by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - An array mode value(s) of all numbers if `args` contains only numbers. Returns an array of arrays with mode value(s) of each index, including all scalar numbers in `args` in the calculation at each index  if `args` contains at least one array.  
**Example**  
```js
mode(1, 1, 2, 3) // returns [1]
mode(1, 1, 2, 2, 3) // returns [1,2]
mode([10, 20, 30, 40], 10, 20, 30) // returns [[10], [20], [30], [10, 20, 30, 40]]
mode([1, 9], 4, [3, 5]) // returns [[1, 3, 4], [4, 5, 9]]
```
***
## multiply( a,   b )
Multiplies two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The product of `a` and `b` if both are numbers. Returns an array with the the products applied index-wise to each element if `a` or `b` is an array.  
**Throws**:

- `'Matrix length mismatch'` if `a` and `b` are arrays with different lengths

**Example**  
```js
multiply(6, 3) // returns 18
multiply([10, 20, 30, 40], 10) // returns [100, 200, 300, 400]
multiply(10, [1, 2, 5, 10]) // returns [10, 20, 50, 100]
multiply([1, 2, 3, 4], [2, 7, 5, 12]) // returns [2, 14, 15, 48]
```
***
## pow( a,   b )
Calculates the cube root of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> | the power that `a` is raised to |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - `a` raised to the power of `b`. Returns an array with the each element raised to the power of `b` if `a` is an array.  
**Throws**:

- `'Missing exponent'` if `b` is not provided

**Example**  
```js
pow(2,3) // returns 8
pow([1, 2, 3], 4) // returns [1, 16, 81]
```
***
## random( a,   b )
Generates a random number within the given range where the lower bound is inclusive and the upper bound is exclusive. If no numbers are passed in, it will return a number between 0 and 1. If only one number is passed in, it will return .


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | (optional) must be greater than 0 if `b` is not provided |
| b | <code>number</code> | (optional) must be greater |

**Returns**: <code>number</code> - A random number between 0 and 1 if no numbers are passed in. Returns a random number between 0 and `a` if only one number is passed in. Returns a random number between `a` and `b` if two numbers are passed in.  
**Throws**:

- `'Min is be greater than max'` if `a` < 0 when only `a` is passed in or if `a` > `b` when both `a` and `b` are passed in

**Example**  
```js
random() // returns a random number between 0 (inclusive) and 1 (exclusive)
random(10) // returns a random number between 0 (inclusive) and 10 (exclusive)
random(-10,10) // returns a random number between -10 (inclusive) and 10 (exclusive)
```
***
## range( ...args )
Finds the range of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the range by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The range value of all numbers if `args` contains only numbers. Returns an array with the the range values at each index, including all scalar numbers in `args` in the calculation at each index if `args` contains at least one array.  
**Example**  
```js
range(1, 2, 3) // returns 2
range([10, 20, 30, 40], 15) // returns [5, 5, 15, 25]
range([1, 9], 4, [3, 5]) // returns [3, 5]
```
***
## round( a,   b )
Rounds a number towards the nearest integer by default or decimal place if specified. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> | (optional) number of decimal places, default value: 0 |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The rounded value of `a`. Returns an array with the the rounded values of each element if `a` is an array.  
**Example**  
```js
round(1.2) // returns 2
round(-10.51) // returns -11
round(-10.1, 2) // returns -10.1
round(10.93745987, 4) // returns 10.9375
round([2.9234, 5.1234, 3.5234, 4.49234324], 2) // returns [2.92, 5.12, 3.52, 4.49]
```
***
## size( a )
Returns the length of an array. Alias for count


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>number</code> - The length of the array. Returns 1 if `a` is not an array.  
**Throws**:

- `'Must pass an array'` if `a` is not an array

**Example**  
```js
size([]) // returns 0
size([-1, -2, -3, -4]) // returns 4
size(100) // returns 1
size('foo') // returns 1
```
***
## sqrt( a )
Calculates the square root of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The square root of `a`. Returns an array with the the square roots of each element if `a` is an array.  
**Throws**:

- `'Unable find the square root of a negative number'` if `a` < 0

**Example**  
```js
sqrt(9) // returns 3
sqrt(30) //5.477225575051661
sqrt([9, 16, 25]) // returns [3, 4, 5]
```
***
## square( a )
Calculates the square of a number. For arrays, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The square of `a`. Returns an array with the the squares of each element if `a` is an array.  
**Example**  
```js
square(-3) // returns 9
square([3, 4, 5]) // returns [9, 16, 25]
```
***
## subtract( a,   b )
Subtracts two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The difference of `a` and `b` if both are numbers or an array of differences applied index-wise to each element.  
**Throws**:

- `'Matrix length mismatch'` if `a` and `b` are arrays with different lengths

**Example**  
```js
subtract(6, 3) // returns 3
subtract([10, 20, 30, 40], 10) // returns [0, 10, 20, 30]
subtract(10, [1, 2, 5, 10]) // returns [9, 8, 5, 0]
subtract([14, 42, 65, 108], [2, 7, 5, 12]) // returns [12, 35, 52, 96]
```
***
## sum( ...args )
Calculates the sum of one or more numbers/arrays passed into the function. If at least one array is passed, the function will sum up one or more numbers/arrays of numbers and distinct values of an array. Sum accepts arrays of different lengths.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | one or more numbers or arrays of numbers |

**Returns**: <code>number</code> - The sum of one or more numbers/arrays of numbers including distinct values in arrays  
**Example**  
```js
sum(1, 2, 3) // returns 6
sum([10, 20, 30, 40], 10, 20, 30) // returns 160
sum([1, 2], 3, [4, 5], 6) // returns 21
sum([10, 20, 30, 40], 10, [1, 2, 3], 22) // returns 138
```
***
## unique( a )
Counts the number of unique values in an array


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>number</code> - The number of unique values in the array. Returns 1 if `a` is not an array.  
**Example**  
```js
unique(100) // returns 1
unique([]) // returns 0
unique([1, 2, 3, 4]) // returns 4
unique([1, 2, 3, 4, 2, 2, 2, 3, 4, 2, 4, 5, 2, 1, 4, 2]) // returns 5
```
