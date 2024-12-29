const { students } = require('../datasets/students');

// To run the code you've written in this file, use node prototypes/problem-sets/students.js

console.log('Running students.js')

/* Students Prompts
Level 1
Code: 
  Write a function called "findEnrolledStudents" that returns the name of all students who are enrolled.
*/

function findEnrolledStudents() {
  let enrolledStudents = []
  students.forEach((student) => {
    if (student.enrolled === true) {
      enrolledStudents.push(student.name);
    };
  });
  return enrolledStudents
};

/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findEnrolledStudents())
    should print -->      
      ["John", "Bob", "Eve"]
*/

// console.log(findEnrolledStudents(students));

/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

/*
Level 2
Code: 
  Write a function called "getAverageGrade" that takes in a student's name and returns that student's average grade.
*/

function getAverageGrade(studentName) {
  grades = [];
  students.forEach((student) => {
    if (student.name === studentName) {
      grades = student.grades;
    };
  });
  total = grades.reduce((acc, grade) => {
    acc += grade;
    return acc;
  }, 0);
  return total / grades.length;
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageGrade("John"))
    should print -->  86.25
e.g.
  console.log(getAverageGrade("Bob"))
    should print -->  84.5
*/

// console.log(getAverageGrade("John"))
// console.log(getAverageGrade("Bob"))
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// 1. find the object that contains the correct student name.
// 2. Isolate the grades array
// 3. reduce the array and get the total
// 4. take the total and divide it by the amount of elements in the grades array.


/*
Level 3
Code: 
  Write a function called "findBestAverageGrade" that returns the name of the student with the highest average grade.
*/
function findBestAverageGrade() {
  allStudentAverages = [];
  students.forEach((student) => {
    allStudentAverages.push([student.name, getAverageGrade(student.name)])
  });
  sorted = allStudentAverages.sort((a, b) => {
    return b[1] - a[1]
  })
  return sorted[0][0]
};

/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findBestAverageGrade())
    should print -->  "Eve"
*/
// console.log(findBestAverageGrade());
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// 1. iterate over the students array, feeding each students name into the findAverageGrade Function.
// 2. store each result with the students name and average
// 3. iterate over the results to find the highest average and output that persons name.

/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the students prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all students tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/


module.exports = {
  findEnrolledStudents,
  getAverageGrade,
  findBestAverageGrade
};
