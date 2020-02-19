// 1.

// built-in filter function
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
console.log(odds);

// example call
const filter = function(array, transform) {
  const copy = [];
  for (const element of array) {
    if (transform(element))
    copy.push(element);
  }
  return copy;
}

const odds2 = filter(numbers, x => x%2 > 0);
console.log(odds2);


// 2.
const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a,b) => a - b);
console.log(numbers2);

numbers2.sort((a,b) => b - a);
console.log(numbers2);

// 3.

// Read majors.csv (which needs to be on your VM when you run this code).
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});

// Create an array of objects, so that each line of the file is represented by an object with three properties
const rows = [];
file.on('line', function(line) {
  const columns = line.split(',');
  rows.push({
    discipline: columns[0],
    majors: Number(columns[1]),
    minors: Number(columns[2])
  });
});


// Then use the sort method (with a new arrow function) to sort disciplines by popularity.
// Let the popularity score for a discipline be the number of majors it has plus half the number of minors.
file.on('close', function() {
  rows.sort((a,b) => (a.majors + a.minors/2) - (b.majors + b.minors/2));
});
