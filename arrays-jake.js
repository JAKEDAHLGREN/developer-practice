// Consider the variable:

 var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.

console.log(groceryList.push("soda"))
console.log(groceryList)
//Output: 4
//Output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.concat("granola"))
//Output: [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
// output: [ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.slice(0, 2).concat("beans"))
// Output: [ 'chips', 'dip', 'beans' ]
// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.

console.log(numbers.unshift(0))
console.log(numbers)
// Output: 6
// [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.

console.log(numbers.push(12))
console.log(numbers)
// Output: 7
// [0,  2,  4, 6, 8, 10, 12]

// Write the code that will remove the first number from the array.

console.log(numbers.shift())
console.log(numbers)
// Output: 0
// [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

console.log([0].concat(numbers))
// Output: [0,  2,  4, 6, 8, 10, 12]

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2))
// Output: 0

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))
// Output: 5

// Write the code that returns the number at the third index.

console.log(numSet[3])
// Output: 8

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(""))
// Output: yarra

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

const charsReversed = characters.reverse()
console.log(charsReversed)
// Output: [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"))
// Output: a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""))
// Output: array

// Create two arrays consisting of three first names of your cohort members in each.
let arrayClass = ["Jake", "Nikki", "Jose"]
let arrayNames = ["Brandon", "Marc", "Felix"]

// Write the code that sorts the names in alphabetical order.

console.log(arrayClass.sort())
console.log(arrayNames.sort())
// Output: [ 'Jake', 'Jose', 'Nikki' ]
// [ 'Brandon', 'Felix', 'Marc' ]

// Write the code that sorts the names in reverse alphabetical order.

console.log(arrayClass.sort().reverse())
console.log(arrayNames.sort().reverse())
// Output: [ 'Nikki', 'Jose', 'Jake' ]
// [ 'Marc', 'Felix', 'Brandon' ]

// Write the code that sorts all the names in alphabetical order in a single array.

console.log(arrayClass.concat(arrayNames))
// Output: [ 'Nikki', 'Jose', 'Jake', 'Marc', 'Felix', 'Brandon' ]

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.


console.log(numbers)

// Write the code that adds the values from odd indexes into the oddIndexes array.