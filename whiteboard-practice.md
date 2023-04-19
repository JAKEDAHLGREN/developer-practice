## 4-19-2023 ##

### 1 ###

# what kind of management style to you want to see?

I appreciate when a manager leads by example, and not has the "do as I say, not as I do approach".
Someone who can communicate their expectations clearly, doesn't micro-manage, and will 

# what is a relational database?

I think of it like an excel sheet, it is made up of rows and columns. the colums are defined by symbols, which name the data displayed in the column. the rows are each an instance/object of the class(table)

# Create a database table, for client that sells cookies online, what columns would you suggest they have in the Cookie table. name:string, price:integer, gluten_free:string, minimum_quantity:integer

call the most expensive cookie

SELECT type, price
FROM Cookie
ORDER_BY price.desc
FOR price.max || price.desc
LIMIT 1



### 2 ###
# What are ideal traits for a co-worker?

personable, someone who is intuitive and can 'read the room', they can communicate clearly, they are open to collaboration, able to express conflicts/problems without placing blame, constructive critisism

# scripting vs markup language?

A scripting language is what you use to define your functions and behaviors AKA logic

markup language is the structure/visual aspect of your application

# what is SQL?

* A domain specific language used with databases *
Is a relational database, that is formated by class/table, and each row is an instance of that class. there are prime keys that give a unique id to each instance, and the columns are defined with a symbol that describes what data is being shown

prompt: create a database table, for client who works at a greenhouse, to keep track of the plants that are for sale. what columns/symbol to use, and datatype - name:string, type:string, inventory:integer, price:integer, indoor_outdoor:string

How to call all plants from db

SELECT * :type_of
FROM plants

(or in the rails console)
Plants.all

How to call all plants that start with

Select type_of
From Plants
WHERE type_of LIKE % p

### 4-12-2023

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

When you create an infinite loop and the server continues running your function and using the working memory until it crashes your computer, unthe iteration is terminated.

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





















