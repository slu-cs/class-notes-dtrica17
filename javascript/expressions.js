// Expression syntax in Javascript
/*
Same as Java
*/

// Booleans
true
false

// Logic
!false
true && false
true || false

// Numbers (all one type)
3.14

// Equality (to check if two things are equal)
3 === 3.0 // true
3 !== 3.14 // true

// Ordering
3 > 2
3 >= 2
2 < 3
2 <= 3

// Strings
'hello'

// Concatenation
'a' + 'b' === 'ab'

// Arithmetic
3 + 2 === 5
3 - 2 === 1
3 * 2 === 6
3 / 2 === 1.5
3 % 2 === 1
3 ** 2 === 9

// Type coercion
'3' + 2 === '32'
'3' + true === '3true'
'3' - 2 === 1
3 + true === 4

// Loose equality operator (==)
'3' == 3
true == 1
false == 0
false == ''
'' == 0

// Template strings
console.log('3+2 is ' + (3+2));
console.log(`3+2 is ${3+2}`);   // equal to above
