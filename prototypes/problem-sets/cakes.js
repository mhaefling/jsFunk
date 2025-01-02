const { cakes } = require('../datasets/cakes');

// To run the code you've written in this file, use node prototypes/problem-sets/cakes.js

console.log('Running cakes.js')

/* Cakes Prompts
Level 1
Code: 
  Write a function called "getStockCounts" that returns an array of objects that include just the flavor of the cake and how much of that cake is in stock.
*/
function getStockCounts() {
  stockCounts = [];
  cakes.forEach((cake) => {
    cakeObject = { flavor: `${cake.cakeFlavor}`, inStock: cake.inStock }
    stockCounts.push(cakeObject)
  });
  return stockCounts;
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStockCounts())
    should print --> 
      [
       { flavor: 'dark chocolate', inStock: 15 },
       { flavor: 'yellow', inStock: 14 },
        ..etc
      ]
*/
console.log(getStockCounts());
/*
Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2
Code: 
  Write a function called "getInStock" that returns an array of only the cakes that are in stock.
*/
function getInStock() {
  cakesInStock = []
  cakes.forEach((cake) => {
    if (cake.inStock > 0) {
      cakesInStock.push(cake);
    };
  });
  return cakesInStock;
};
/*
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getInStock())
    should print -->   
    [
      {
      cakeFlavor: 'dark chocolate',
      filling: null,
      frosting: 'dark chocolate ganache',
      toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
      inStock: 15
      },
      {
        cakeFlavor: 'yellow',
        filling: 'citrus glaze',
        frosting: 'chantilly cream',
        toppings: ['berries', 'edible flowers'],
        inStock: 14
      },
      ..etc
    ]
*/
console.log(getInStock());
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3
Code: 
  Write a function called "doInventory" that returns the total amount of cakes in stock.
*/
function doInventory() {
  totalInStock = cakes.reduce((acc, cake) => {
    acc += cake.inStock;
    return acc;
  }, 0);
  return totalInStock;
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(doInventory())
    should print -->  59
*/
console.log(doInventory())
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


  
/*
Level 4
Code: 
  Write a function called "getToppings" that returns an array of all unique toppings (no duplicates) needed to bake every cake in the dataset.
*/
function getToppings() {
  allToppings = []
  cakes.forEach((cake) => {
    allToppings.push(cake.toppings)
  });
  singleAllToppings = allToppings.flat()
  uniqueToppings = [];
  singleAllToppings.forEach((topping) => {
    if (!uniqueToppings.includes(topping)) {
      uniqueToppings.push(topping)
    }
  })
  return uniqueToppings;
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getToppings())
    should print -->  
        ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
*/
console.log(getToppings());
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5
Code: 
  I need to make a grocery list.  Write a function called "makeGroceryList" that will give me an object where the keys are each topping, and the values are the amount of that topping I need to buy.
*/
function makeGroceryList() {
  groceryList = cakes.reduce((acc, cake) => {
    cake.toppings.forEach((topping) => {
      if (!acc[topping]) {
        acc[topping] = 0
      };
      if (cake.toppings.includes(topping)) {
        acc[topping]++
      }
    });
    return acc;
  }, {});
  return groceryList;
};
/*
Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(makeGroceryList())
    should print -->  
      {
        'dutch process cocoa': 1,
        'toasted sugar': 3,
        'smoked sea salt': 3,
        'berries': 2,
        ...etc
      }
*/
console.log(makeGroceryList())
/*
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/



/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the 5 Cakes Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 5 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getStockCounts,
  getInStock,
  doInventory,
  getToppings,
  makeGroceryList
};
