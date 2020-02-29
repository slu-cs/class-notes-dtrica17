// Name: Darren Ricalton

//////////////////////////////////////////////////////////////// Question 1

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
const newt = labs.map(p => p.seats);
console.log(newt);

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
const mew = labs.filter(lab => lab.seats > 10);
console.log(mew);

// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
labs.sort((a, b) => a.seats - b.seats);
console.log(labs);


//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
console.log(numbers.find(element => element % 2 === 0));

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.
const find = function(array, test) {
  for (const element of array) {
    if (test(element)) {
      return element;
    }
  }
};
console.log(find(numbers, element => element % 2 === 0));


//////////////////////////////////////////////////////////////// Question 3

// This creates the user object described on the quiz.
// It has a question method you can call in part A.
const readline = require('readline');
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A. Make small talk, using traditional callbacks.
//user.question('What is your name? ', response => console.log('Hello ' + response + '.')); // response = 'Alice'
//user.question('How are you doing? ', response => console.log('I am also' + response + '.')); // response = 'fine'

//user.question('What is your name? ', response => 'Hello' + response + '.'); // response = 'Bob'
//user.question('How are you doing? ', response => 'I am also' + response + '.'); // response = 'ok'


// The user.question method doesn't actually return a promise, so here is a question function that does.
// Call this question function in part B instead of calling the user.question method.
const question = function(prompt) {
  return new Promise(resolve => user.question(prompt, resolve));
};

// B. Make small talk again, using promises.
question('What is your name? ')
  .then(result => console.log('Hello ' + result + '.'))
  .then(() => question('How are you doing? ')
    .then(result => console.log('I am also ' + result + '.'))
  )
  .then(() => question('What is your name? ')
    .then(result => console.log('Hello ' + result + '.'))
  )
  .then(() => question('How are you doing? ')
    .then(result => console.log('I am also ' + result + '.'))
  ).catch(error => console.error(error.stack));

/*




//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.
/*
// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.
Promise.all([f1(), f2()])
  .then(function(results) {
    if(results[0] == results[1]){
      console.log('equal');
    }
    else if(results[0] > results[1]){
      console.log('f1');
    }
    else{
      console.log('f2');
    }
  }).catch(error => console.error(error.stack));

*/
