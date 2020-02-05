// JavaScript Object Exercises
// Get comfortable with the syntax for objects, arrays, and functions.

// 1.
// Constructor for each course
const Course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};

// Constructing all 4 courses. Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
const web = new Course('CS', 332);
const mathstat = new Course('STAT', 326);
const bridge = new Course('MATH', 280);
const film =  new Course('FILM', 211);

// Create an array of objects representing the courses you are taking this semester.
const courses = [web, mathstat, bridge, film];
console.log(courses);

// Iterate through this array to find the largest course number in your schedule.
largest = 0;
for (let i=0; i < courses.length; i++) {
  if (courses[i].number > courses[largest].number) {
    largest = i;
  }
}

// print out largest course number
console.log(courses[largest].number);

// 2.
// Define a constructor function for Book objects. Each book should have a title and an array of authors.
const Book = function(title, authors){
  this.title = title;
  this.authors = authors;
};

// Define a shared method for books that lets you check whether a given author was one of the authors in this book.
Book.prototype.check =  function(author) {
  return this.authors.includes(author);
};

// Construct a book
const moby = new Book('Moby Dick', ['Herman Melville']);
console.log(moby);

// Test method
console.log(moby.check('Herman Melville')); // should be true



// 3.
// Define a function that works like the range function in Python
let result = '[';
const range = function(a, b) {
  while (a < b) {
    result = result + a + ', ';
    a++;
  }
  result = result - ', ';
  result = result + ']';
  console.log(result);
}



// For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7]
range(3, 8);
