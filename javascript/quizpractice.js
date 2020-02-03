// JavaScript Object Exercises
// Get comfortable with the syntax for objects, arrays, and functions.

// 1. Create an array of objects representing the courses you are taking this semester.
// Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
// Iterate through this array to find the largest course number in your schedule.

// Constructor for each course
const Course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};

// Constructing all 4 courses
const web = new Course('CS', 332);
const mathstat = new Course('STAT', 326);
const bridge = new Course('MATH', 280);
const film =  new Course('FILM', 211);

// Construct array
const courses = [web, mathstat, bridge, film];
console.log(courses);

// finding largest course number
for (let i=0; i < courses.length; i++) {
  largest = 0;
  if (courses[i].number > courses[largest].number) {
    largest = i;
  }
}

console.log(courses[largest]);

// 2. Define a constructor function for Book objects.
// Each book should have a title and an array of authors.
// Define a shared method for books that lets you check whether a given author was one of the authors in this book.

// 3. Define a function that works like the range function in Python.
// For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].
