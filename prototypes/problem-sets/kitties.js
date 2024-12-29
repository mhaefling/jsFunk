const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

// To run the code you've written in this file, use node prototypes/problem-sets/kitties.js

console.log('Running kitties.js')

/* Kitty Prompts*/
/*
Level 1
Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 
*/

// function findOrangeNames () {
//   orangeCats = kitties.filter((kitty) => {
//     return kitty.color === 'orange';
//   });
//   orangeCatNames = orangeCats.map((orangeKitty) => {
//     return orangeKitty.name;
//   });
//   return orangeCatNames;
// };

/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']
*/

// console.log(findOrangeNames())

/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// 1. Create a function named findOrangeNames
// 2. iterate over the kitties array with .filter()  to find the objects that contain the properity color with the value orange
// 3. iterate over the returned objects using .map() to pull out the values of the properity name of each object.
// 4. return the value of of the variable orangeCatNames that the array containing the names were stored in.


/*
Level 2
Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.
*/

// function sortByAge() {
//   sortedByAge = kitties.sort((a, b) => {
//     return b.age - a.age
//   });
//   return sortedByAge;
// };

/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]
*/

// console.log(sortByAge());

/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// 1. Create a function named sortByAge
// 2. Create a block variable called sortedByAge that is the result of iterating over the kitties array using the sort() function.
// 3. Provide the sort function 2 block variables, (a, b)
// 4. subtract a age from b age to return a list of objects sorted by oldest to youngest.

/*
Level 3
Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.
*/

// function growUp() {
//   grownKitties = kitties.forEach(kitty => {
//     kitty.age += 2;
//   });
//   return grownKitties
// };

/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]
*/

// console.log(growUp())

/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

// 1. create a  function called growUp
// 2. create a block variable called grownKitties that stores the return of iterating over the kitties array with the filter function
// 3. using a block variable in filter function called kitty, confirm if the objects age properity has a value greater than or equal to 2
// 4. if it does return that object.

/*
Level 4
Currently, your functions are probably using the imported `kitties` global  variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.
*/

function findOrangeNames (dataSet) {
  orangeAnimal = dataSet.filter((animal) => {
    return animal.color === 'orange';
  });
  orangeAnimalNames = orangeAnimal.map((orangeAnimal) => {
    return orangeAnimal.name;
  });
  return orangeAnimalNames;
};

function sortByAge(dataSet) {
  sortedByAge = dataSet.sort((a, b) => {
    return b.age - a.age;
  });
  return sortedByAge;
};

function growUp(dataSet) {
  grownAnimals = dataSet.forEach(animal => {
    animal.age += 2;
  });
  return dataSet;
};

/*
Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]
*/
// console.log(findOrangeNames(kitties));
// console.log(findOrangeNames(puppers));
// console.log(sortByAge(kitties));
// console.log(sortByAge(puppers));
// console.log(growUp(kitties));
// console.log(growUp(puppers));
/*
Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
*/

// 1. added a parameter to each function.
// 2. changed the variable names to be more general "animal(s)" instead of kitties or cat.

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/





module.exports = {
  findOrangeNames,
  sortByAge,
  growUp
};
