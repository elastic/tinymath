# Functions

## abs( a )
Calculates the absolute value of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The absolute value of 'a' or an array with the absolute values of each element.  
**Example**  
```js
abs(-1) //returns 1
abs([-1 , -2, -3, -4]) //returns [1, 2, 3, 4]
```
***
## add( ...args )
Calculates the sum of one or more numbers/arrays passed into the function. If at least one array of numbers is passed into the function, the function will calculate the sum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The sum of one or more numbers/arrays of numbers if all arguments are numbers or an array of sums of the elements at each index, including scalar numbers.  
**Example**  
```js
add(1, 2, 3) //returns 6
add([10, 20, 30, 40], 10, 20, 30) //returns [70, 80, 90, 100]
add([1, 2], 3, [4, 5], 6) //returns [14, 16]
```
***
## cbrt( a )
Calculates the cube root of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The cube root of 'a' or an array with the cube roots of each element.  
**Example**  
```js
cbrt(-27) //returns -3
cbrt([27, 64, 125]) //returns [3, 4, 5]
```
***
## ceil( a )
Calculates the ceiling of a number, i.e. rounds a number towards positive infinity. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The ceiling of a number or an array of the ceilings of each element.  
**Example**  
```js
ceil(1.2) //returns 2
ceil([1.1, 2.2, 3.3]) //returns [2, 3, 4]
```
***
## count( a )
Returns the length of an array. Alias for size


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | any array |

**Returns**: <code>number</code> - the length of the array  
**Example**  
```js
count([]) //returns 0
count([-1, -2, -3, -4]) //returns 4
```
***
## cube( a )
Calculates the cube of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The cube of 'a' or an array with the cubes of each element.  
**Example**  
```js
cube(-3) //returns -27
cube([3, 4, 5]) //returns [27, 64, 125]
```
***
## divide( a,   b )
Divides two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | dividend, a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | divisor, a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The quotient of 'a' and 'b' if both are numbers or an array of quotients applied index-wise to each element.  
**Example**  
```js
divide(6, 3) //returns 2
divide([10, 20, 30, 40], 10) //returns [1, 2, 3, 4]
divide(10, [1, 2, 5, 10]) //returns [10, 5, 2, 1]
divide([14, 42, 65, 108], [2, 7, 5, 12]) //returns [7, 6, 13, 9]
```
***
## exp( a )
Calculates the exponent of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - exponent of a number or an array of exponents of each element.  
**Example**  
```js
exp(2) //returns e^2 = 7.3890560989306495
exp([1, 2, 3]) //returns [e^1, e^2, e^3] = [2.718281828459045, 7.3890560989306495, 20.085536923187668]
```
***
## first( a )
Returns the first element of an array. If anything other than an array is passed in, the input is returned.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | preferably an array but any input is accepted |

**Returns**: <code>\*</code> - first element of an array or the same input is returned  
**Example**  
```js
first(2) //returns 2
first('foo') //returns 'foo'
first([1, 2, 3]) //returns 1
```
***
## fix( a )
Calculates the fix of a number, i.e. rounds a number towards 0. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The fix of a number or an array of the fixes for each element.  
**Example**  
```js
fix(1.2) //returns 1
fix(-1.8) //returns 1
fix([1.8, 2.9, -3.7, -4.6]) //returns [1, 2, -3, -4]
```
***
## floor( a )
Calculates the floor of a number, i.e. rounds a number towards negative infinity. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The floor of a number or an array of the floor of each element.  
**Example**  
```js
floor(1.2) //returns 1
floor([1.7, 2.8, 3.9]) //returns [1, 2, 3]
```
***
## last( a )
Returns the last element of an array. If anything other than an array is passed in, the input is returned.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | preferably an array but any input is accepted |

**Returns**: <code>\*</code> - last element of an array or the same input is returned  
**Example**  
```js
last(2) //returns 2
last('foo') //returns 'foo'
last([1, 2, 3]) //returns 3
```
***
## log( a,   b )
Calculates the logarithm of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>Object</code> | optional base for the logarithm. If not provided a value, the default base is e, and the natural log is calculated. |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - logarithm of a number or an array of logarithms of each element.  
**Example**  
```js
log(1) //returns 0
log(64, 8) //returns 2
log([2, 4, 8, 16, 32], 2) //returns [1, 2, 3, 4, 5]
```
***
## log10( a )
Calculates the logarithm base 10 of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - logarithm of a number or an array of logarithms of each element.  
**Example**  
```js
log(10) //returns 1
log(100) //returns 2
log([10, 100, 1000, 10000, 100000]) //returns [1, 2, 3, 4, 5]
```
***
## max( ...args )
Finds the maximum value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the maximum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The maximum value of all numbers if all inputs are numbers or an array of maximum values at each index, including scalar numbers.  
**Example**  
```js
max(1, 2, 3) //returns 3
max([10, 20, 30, 40], 15) //returns [15, 20, 30, 40]
max([1, 9], 4, [3, 5]) //returns [4, 9]
```
***
## mean( ...args )
Finds the mean value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mean by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The mean value of all numbers if all inputs are numbers or an array of mean values of each index, including scalar numbers.  
**Example**  
```js
mean(1, 2, 3) //returns 2
mean([10, 20, 30, 40], 20) //returns [15, 20, 25, 30]
mean([1, 9], 5, [3, 4]) //returns [3, 6]
```
***
## median( ...args )
Finds the median value(s) of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the median by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - an array median value(s) of all numbers if all inputs are numbers or an array of arrays of median values of each index, including scalar numbers.  
**Example**  
```js
median(1, 1, 2, 3) //returns 1.5
median(1, 1, 2, 2, 3) //returns 2
median([10, 20, 30, 40], 10, 20, 30) //returns [15, 20, 25, 25]
median([1, 9], 4, [3, 5]) //returns [3, 4]
```
***
## min( ...args )
Finds the minimum value of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the minimum by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The minimum value of all numbers if all inputs are numbers or an array of minimum values of each index, including scalar numbers.  
**Example**  
```js
min(1, 2, 3) //returns 1
min([10, 20, 30, 40], 25) //returns [10, 20, 25, 25]
min([1, 9], 4, [3, 5]) //returns [1, 4]
```
***
## mod( a,   b )
Remainder after dividing two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | dividend, a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | divisor, a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The remainder of 'a' divided by 'b' if both are numbers or an array of remainders applied index-wise to each element.  
**Example**  
```js
mod(10, 7) //returns 3
mod([11, 22, 33, 44], 10) //returns [1, 2, 3, 4]
mod(100, [3, 7, 11, 23]) //returns [1, 2, 1, 8]
mod([14, 42, 65, 108], [5, 4, 14, 2]) //returns [5, 2, 9, 0]
```
***
## mode( ...args )
Finds the mode value(s) of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the mode by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - an array mode value(s) of all numbers if all inputs are numbers or an array of arrays of mode values of each index, including scalar numbers.  
**Example**  
```js
mode(1, 1, 2, 3) //returns [1]
mode(1, 1, 2, 2, 3) //returns [1,2]
mode([10, 20, 30, 40], 10, 20, 30) //returns [[10], [20], [30], [10, 20, 30, 40]]
mode([1, 9], 4, [3, 5]) //returns [[1, 3, 4], [4, 5, 9]]
```
***
## multiply( a,   b )
Multiplies two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The product of 'a' and 'b' if both are numbers or an array of products applied index-wise to each element.  
**Example**  
```js
multiply(6, 3) //returns 18
multiply([10, 20, 30, 40], 10) //returns [100, 200, 300, 400]
multiply(10, [1, 2, 5, 10]) //returns [10, 20, 50, 100]
multiply([1, 2, 3, 4], [2, 7, 5, 12]) //returns [2, 14, 15, 48]
```
***
## pow( a,   b )
Calculates the cube root of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> | the power that 'a' is raised to |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - 'a' raised to the power of 'b' or an array of each element raised to the power of 'b'.  
**Example**  
```js
pow(2,3) //returns 8
pow([1, 2, 3], 4) //returns [1, 16, 81]
```
***
## random( a,   b )
Generates a random number within the given range where the lower bound is inclusive and the upper bound is exclusive. If no numbers are passed in, it will return a number between 0 and 1. If only one number is passed in, it will return .


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | (optional) must be greater than 0 if 'b' is not provided |
| b | <code>number</code> | optional, must be greater |

**Returns**: <code>number</code> - generates a number between 0 and 1 if no numbers are passed in, a number between 0 and 'a' if only one number is passed in, or a number between 'a' and 'b' if two numbers are passed in  
**Example**  
```js
random() //returns a number between 0 and 1
random(10) //returns a number between 0 and 10
random(-10,10) //returns a number between -10 and 10
```
***
## range( ...args )
Finds the range of one of more numbers/arrays of numbers into the function. If at least one array of numbers is passed into the function, the function will find the range by index.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The range value of all numbers if all inputs are numbers or an array of range values at each index, including scalar numbers.  
**Example**  
```js
range(1, 2, 3) //returns 2
range([10, 20, 30, 40], 15) //returns [5, 5, 15, 25]
range([1, 9], 4, [3, 5]) //returns [3, 5]
```
***
## round( a,   b )
Rounds a number towards the nearest integer by default or decimal place if specified. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> | number of decimal places, default value: 0 |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The ceiling of a number or an array of the ceilings of each element.  
**Example**  
```js
round(1.2) //returns 2
round(-10.51) //returns -11
round(-10.1, 2) //returns -10.1
round(10.93745987, 4) //returns 10.9375
round([2.9234, 5.1234, 3.5234, 4.49234324], 2) //returns [2.92, 5.12, 3.52, 4.49]
```
***
## size( a )
Returns the length of an array. Alias for count


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | any array |

**Returns**: <code>number</code> - the length of the array  
**Example**  
```js
size([]) //returns 0
size([-1, -2, -3, -4]) //returns 4
```
***
## sqrt( a )
Calculates the square root of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The square root of 'a' or an array with the square roots of each element.  
**Example**  
```js
sqrt(9) //returns 3
sqrt([9, 16, 25]) //returns [3, 4, 5]
```
***
## square( a )
Calculates the square of a number. For arrays, the function will be applied to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The square of 'a' or an array with the squares of each element.  
**Example**  
```js
square(-3) //returns 9
square([3, 4, 5]) //returns [9, 16, 25]
```
***
## subtract( a,   b )
Subtracts two numbers. If at least one array of numbers is passed into the function, the function will be applied index-wise to each element.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |
| b | <code>number</code> \| <code>Array.&lt;number&gt;</code> | a number or an array of numbers |

**Returns**: <code>number</code> \| <code>Array.&lt;number&gt;</code> - The difference of 'a' and 'b' if both are numbers or an array of differences applied index-wise to each element.  
**Example**  
```js
subtract(6, 3) //returns 3
subtract([10, 20, 30, 40], 10) //returns [0, 10, 20, 30]
subtract(10, [1, 2, 5, 10]) //returns [9, 8, 5, 0]
subtract([14, 42, 65, 108], [2, 7, 5, 12]) //returns [12, 35, 52, 96]
```
***
## sum( ...args )
Calculates the sum of one or more numbers/arrays passed into the function. If at least one array is passed, the function will sum up one or more numbers/arrays of numbers and distinct values of an array.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> \| <code>Array.&lt;number&gt;</code> | any number of arguments |

**Returns**: <code>number</code> - The sum of one or more numbers/arrays of numbers including distinct values in arrays  
**Example**  
```js
sum(1, 2, 3) //returns 6
sum([10, 20, 30, 40], 10, 20, 30) //returns 160
sum([1, 2], 3, [4, 5], 6) //returns 21
```
***
## unique( a )
Counts the number of unique values in an array


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;any&gt;</code> | array of any values |

**Returns**: <code>number</code> - number of unique values in the array or 1 if anything other than an array is passed in  
**Example**  
```js
unique(100) //returns 1
unique([]) //returns 0
unique([1, 2, 3, 4]) //returns 4
unique([1, 2, 3, 4, 2, 2, 2, 3, 4, 2, 4, 5, 2, 1, 4, 2]) //returns 5
```


