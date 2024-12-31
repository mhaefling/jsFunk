const { count } = require('console');
const { coloradoPlants } = require('../datasets/plants');

// To run the code you've written in this file, use node prototypes/problem-sets/plants.js

console.log('Running plants.js')

/* Plants Prompts
Level 1
Code: 
  Write a function called "findSpringBloomers" that finds how many plants have a blooming season any time in the spring.
*/
function findSpringBloomers() {
  total = 0
  coloradoPlants.forEach((plant) => {
    if (plant.bloomingSeason.includes('Spring'))
      total++
  });
  return total
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findSpringBloomers())
    should print --> 8     
*/
console.log(findSpringBloomers());
/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2
Code: 
  Write a function called "findAverageHeight" that returns the average height of all the plants.
*/
// function findAverageHeight() {
//  totalPlantHeight = coloradoPlants.reduce((acc, plant) => {
//    acc += plant.height
//    return acc;
//  }, 0);
//  averageHeight = totalPlantHeight / coloradoPlants.length
//  return averageHeight
// };
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight())
    should print -->  59.2
*/
// console.log(findAverageHeight());
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3
Code: 
  Refactor your "findAverageHeight" function so that it takes in a habitat and returns the average height of the plants with that habitat. Don't worry about rounding the decimals.
*/
function findAverageHeight(habitat) {
  plantCount = 0
  totalPlantHeight = coloradoPlants.reduce((acc, plant) => {
    if (plant.habitat.includes(habitat)) {
      plantCount++
      acc += plant.height
    }
    return acc;
  }, 0);
  averageHeight = totalPlantHeight / plantCount
  return averageHeight
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight("meadows"))
    should print -->  18

e.g.
  console.log(findAverageHeight("forests"))
    should print -->  117.33
*/
console.log(findAverageHeight("meadows"));
console.log(findAverageHeight("forests"));
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 4
Code: 
  Write a function called "organizeByHabitat" that returns an object the plants organized by habitat.
*/
function organizeByHabitat() {
  plantsByHabitat = coloradoPlants.reduce((acc, plant) => {
    if (!acc[plant.habitat]) {
      acc[plant.habitat] = []
    }
    if (acc[plant.habitat]) {
       acc[plant.habitat].push(plant.name)
    }
    return acc;
  }, {});
  return plantsByHabitat;
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(organizeByHabitat())
    should print -->  
    {
      meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not', 'Fireweed' ],
      forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
      moutains: [ 'Columbian Lily' ],
      mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
      grasslands: [ 'Indian Paintbrush' ]
    }
*/
console.log(organizeByHabitat())
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the plants prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all plants tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  findSpringBloomers,
  findAverageHeight,   organizeByHabitat
};
