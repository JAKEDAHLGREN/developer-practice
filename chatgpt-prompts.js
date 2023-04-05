// Create a function that takes in an array of numbers and uses the .map() method to create a new array that doubles each number in the original array. The function should then return the new array.

const numsArray = [2, 4, 6, 8, 10]

const doubleEach = (arr) => {
  const doubleNum = arr.map((value) => value * 2 ) 
  return doubleNum
}
console.log(doubleEach(numsArray))
// call the function with the array as the arguement


// Write a function that takes an array of strings and returns a new array where each string has the first letter capitalized. Use the .map() method to accomplish this.

const words = ['hello', 'world', 'javascript']

const capitalizer = (arr) => {
  // I need to iterate through each index of the given array with .map, and for every iteration I want to find the character at index 0, use toUpperCase, and add the new capital letter back to the original string minus(slice(1)) the first character.
  const firtsLetter = arr.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
  return firtsLetter
}
console.log(capitalizer(words))
