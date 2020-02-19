// 1.

// built-in filter function
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
console.log(odds);

// example call
const filter = function(array, transform) {
  const copy = [];
  for (const element of array) {
    if (element % 2 > 0)
    copy.push(element);
  }
  return copy;
}

const odds2 = filter(numbers, x => x%2 > 0);
console.log(odds2);


// 2.
const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a,b) => a - b);
