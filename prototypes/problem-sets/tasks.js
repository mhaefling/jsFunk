const { count } = require('console');
const { tasks } = require('../datasets/tasks');

// To run the code you've written in this file, use node prototypes/problem-sets/tasks.js

console.log('Running tasks.js')

/* Tasks Prompts
Level 1
Code: 
  Write a function called "getAverageTime" that determines the average time for all tasks.
*/
// function getAverageTime() {
//   totalTime = tasks.reduce((acc, time) => {
//     acc += time.minutesNeeded;
//     return acc;
//   }, 0);
//   averageTime = totalTime / tasks.length
//   return `The average time for all tasks is ${averageTime} minutes.`
// };
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime())
    should print -->      
      'The average time for all tasks is 100 minutes.'
*/
// console.log(getAverageTime());
/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
1. use reduce to iterate through each objects minutesNeeded key
2. add all of those keys together into one variable called totalTime
3. take the value of totalTime and divide it by the length of the tasks array
4. assign that value to a variable called averageTime
5. use the return keyword and use string interpolation to print the return sentence.
*/


/*
Level 2
Code: 
  Write a function called "getTasksByPerson" that takes in an argument of a person's name and outputs a list of their assigned tasks.
*/
function getTasksByPerson(name) {
  // tasksByPerson = [];
  // tasks.forEach((task) => {
  //   if (task.assignedTo === name) {
  //     tasksByPerson.push(task.taskName);
  //   };
  // });
  // return tasksByPerson;
  tasksByPerson = tasks.reduce((acc, task) => {
    if (task.assignedTo === name) {
      acc.push(task.taskName);
    };
    return acc;
  }, [])
  return tasksByPerson
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getTasksByPerson("Leta"))
    should print -->  ['write README', 'refactor']

e.g.
  console.log(getTasksByPerson("Travis"))
    should print -->  [ 'debug issue #14', 'add feature #38' ]
*/
console.log(getTasksByPerson("Leta"));
console.log(getTasksByPerson("Travis"));
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
1. iterate over the tasks array to check if the assignedTo value is the same as the name passed to the function.
2. if the name matches add the taskName value to an array.
*/


/*
Level 3
Code: 
  Write a function called "getStatusTimes" that returns an object with the total minutes for each status.
*/
function getStatusTimes() {
  minsPerStatus = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = 0
    };
    acc[task.status] += task.minutesNeeded;
    return acc;
  }, {});
  return minsPerStatus;
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStatusTimes())
    should print --> 
    { 
      inProgress: 180, 
      complete: 350, 
      inTriage: 170 
    }
*/
console.log(getStatusTimes());
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 4

Code: 
  Refactor your "getAverageTime" function so that it takes in a status and returns the average time for tasks with that status.
*/
function getAverageTime(taskStatus) {
  let count = 0;
  totalTime = tasks.reduce((acc, task) => {
    if (task.status === taskStatus) {
      count++
      acc += task.minutesNeeded;
    };
    return acc;
  }, 0);
  averageTime = totalTime / count
  return `The average time for all ${taskStatus} tasks is ${averageTime} minutes.`
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime("complete"))
    should print -->      
      'The average time for all complete tasks is 87.5 minutes.'

e.g.
  console.log(getAverageTime("inProgress"))
    should print -->      
      'The average time for all inProgress tasks is 90 minutes.'
*/
console.log(getAverageTime("complete"));
console.log(getAverageTime("inProgress"));
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the tasks prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all tasks tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/


module.exports = {
  getAverageTime,
  getTasksByPerson,
  getStatusTimes
};
