write a func. that takes in a string, and checks if that string is a palindrome

Const firstWord = "racecar"

Pseudo 

Input: string
Output: "${string}, is a paldrome" or "${word}, is not a paldrome"

Process:
- Declare a function palTester
- parameter takes in a (string)
- if string is equal to string.reverse 
- return  "${word}, is a paldrome"
- else 
return "${word}, is not a paldrome"

const palTester = (string) => {
  if(string === string.reverse) {
    return "${string}, is a palindrome"
  } else {
    return "${string}, is not a palindrome"
  }
}
console.log(palTester(firstWord))


Whiteboard # 2

value in a mentor

I really appreciate someone who leads by example, and not someone who subscribes to the "do as I say not as I do" mentallity

Stack overflow?

When you create an infinite loop and the server continues running your function and using the working memory, until the iteration is terminated.

what would you get if you ran 'hello' + 3 = 4
type coercioin- when JavaScript doesn't discern between two different data types.

takes in a single word string, creat a function that takes in a string and returns the middle letter

pseudo

Declare a func called middleLetter
give it the parameter of str
I can use the .split("") method to seperate each character of the word
I can use .filter(array.length * .5)
return index
console.log(middleLetter(singleWord))
then I can use a for loop and set it to for(let i=[0]; i=array.length * .5; i++)
