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
