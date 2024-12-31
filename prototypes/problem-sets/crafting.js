const { craftSupplies } = require('../datasets/crafting');

// To run the code you've written in this file, use node prototypes/problem-sets/crafting.js

console.log('Running crafting.js')

/* Crafting Prompts
Level 1
Code: 
  Write a function called "getSupplyList" that takes in a craft as an argument and returns a list of supplies needed.
*/
function getSupplyList(craftName) {
  suppliesByCraft = craftSupplies[craftName].map((craft) => {
    return craft.name;
  });
  return suppliesByCraft;
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getSupplyList("crossStitching"))
    should print -->      
      ['fabric', 'needle', 'thread', 'scissors', hoop]

e.g.
  console.log(getSupplyList("crocheting"))
    should print -->      
      ['hook', 'yarn', 'scissors']
*/
console.log(getSupplyList("crossStitching"));
console.log(getSupplyList("crocheting"));
/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2
Code: 
  Write a function called "getDetailedList" that takes in a craft as an argument and returns a more detailed list of the supplies needed.
*/
function getDetailedList(craftName) {
  detailedSuppliesByCraft = craftSupplies[craftName].map((craft) => {
    if (craft.amountNeeded > 1) {
      return `I need ${craft.amountNeeded} ${craft.name}s.`
    } else {
      return `I need ${craft.amountNeeded} ${craft.name}.`
    }
  });
  return detailedSuppliesByCraft;
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getDetailedList("weaving"))
    should print -->   
    [
      'I need 1 loom.',
      'I need 1 needle.',
      'I need 6 yarns.',
      'I need 1 scissor.'
    ]

e.g.
  console.log(getDetailedList("crocheting"))
    should print -->      
      [ 'I need 1 hook.', 'I need 3 yarns.', 'I need 1 scissor.' ]
*/
console.log(getDetailedList("weaving"));
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3
Test:
  * Uncomment the module.exports below.
  * Unskip the crafting prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all crafting tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getSupplyList,
  getDetailedList
};
