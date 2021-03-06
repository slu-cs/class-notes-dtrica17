// Function syntax

// Function definition
const avg = function(a, b) {
  return (a + b) / 2;
};

// Function call
console.log(avg(5, 6));

// Another definition
const print = function(a, b) {
  console.log(`a=${a}, b=${b}`); //  ` key is above the tab key
};

// Undefined values
const result = print(7, 8);
console.log(result);
print(9); // b is Undefined
print(); // a and b are Undefined

// Object literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
};

// Method call
console.log(rectangle.area());

// Constructor definition
const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

// Shared Method definition
Rectangle.prototype.area =  function() {
  return this.width * this.height;
};

// Constructing objects
const small = new Rectangle(1, 2);
const large = new Rectangle(10, 20);

// Method calls
console.log(small.area());
console.log(large.area());
