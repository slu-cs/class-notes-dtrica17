// Some sample exercises in Javascript

// 1. Print the sum of the squares of the integers from 1 through 10
let sum = 0;
for (let x = 1; x <= 10; x++) {
  console.log(x * x);
  sum = sum + x * x;
}
console.log(`Total sum of squares: ${sum}`);


// 2. Print the first Fibonacci number that is greater than 1000
let n = 1
let result = 1;
while (result < 1000){
  let temp = result;
  result = result + n;
  n = temp;
}
console.log(`The first Fibonacci number that is greater than 1000: ${result}`);


// 3. Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both
let count = 0;
for (let x = 0; x < 101; x++){
  if ((x % 3 === 0) & (x % 5 !== 0)){
    count ++;
  }
  if ((x % 5 === 0) & (x % 3 !== 0)){
    count ++;
  }
}
console.log(count);


// 4. Print the smallest integer that is divisible by all the integers from 1 through 10
let integers = [];
for (let x = 1; x < 10000; x++){
  if ((x % 1 === 0) & (x % 2 === 0) & (x % 3 === 0) & (x % 4 === 0) & (x % 5 === 0) & (x % 6 === 0) & (x % 7 === 0) & (x % 8 === 0) & (x % 9 === 0) & (x % 10 === 0)){
    integers.push(x);
  }
}
console.log(integers[0]);
