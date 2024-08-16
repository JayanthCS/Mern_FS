//Voting

// let age = prompt("Enter your age")

// if (age >= 18) {
//     console.log("You are eligible for voting")
// } else {
//     ageRequiredToVote = 18 - age;
//     console.log(`You still have to wait ${ageRequiredToVote} years for voting`)
// }


//Reverse an array

let a=['jay','abi','Anni','Karthi']

console.log(a.reverse())

//callback

function callback(){
    console.log("Hi")
  }
  
  function main(x){
   return x()
  }
  main(callback)
  //console.log(main(callback))

  

/* What is ECMAScript
What is the purpose of the array slice method
What is the purpose of the array splice method
What is the difference between let and var
What is the reason to choose the name let as a keyword
How do you redeclare variables in switch block without an error
What is a callback function
What is typeof operator
What is the difference between null and undefined
What is the difference between an attribute and a property
How do you remove trailing spaces of a string in javascript
How do you define multiline strings
What would be the result of 1+2+'3'
What is an anonymous function, write syntaxt
What are primitive data types
What is nodejs
What are the different types of loops in javascript
How do you reversing an array
How do you list all properties of a javascript object
How do you convert character to ASCII code
What happens if we add two arrays
What are the differences between for...of and for...in statements
Is that possible to use expressions in switch cases?


***What is ECMAScript
Ans:Europian Computer Manufacturers Association.
ECMAScript is a standardized scripting language specification that serves as the basis for various
programming languages, the most notable of which is JavaScript. Developed by ECMA International, 
the specification defines the core features and syntax of the language,
ensuring consistency across different implementations.

1,What is the purpose of the array slice method
Ans:In Slice() it will create a new array by coping the array elements from the original array.

2,What is the purpose of the array splice method
Ans:It will mutates the original array by removing, replacing or by adding elements to it
    It is used to remove or add the elements to existing array.

3,What is the difference between let and var 
Ans:*Variables declared by let are only available inside the block where they're defined,and 
    Once the variable declared with let we cannot be declare using let keyword.
   * Variables declared by var are available throughout the function in which they're declared, and
    If we declare variable using var we can re-initialise using var.

4,What is the reason to choose the name let as a keyword
Ans:let : Block-Scoped Variables
The reason why the let keyword was introduced to javascript was because function scope is confusing and 
this led to a number of bugs and errors.

5,How do you redeclare variables in switch block without an error
We can overcome this problem by enclosing the code for every case statement inside a block using 
the curly brackets({}) and then redeclare the variables inside that code block using the let keyword.
Eg:
const str = "GFG";
switch(str){
    case "gfg": {
        let name = "gfg";
        console.log(name);
        break;
    }
    case "GFG": {
        let name = "GFG";
        console.log(name);
        break;
    }
    default:
        console.log("GeeksforGeeks");
}
        output:GFG

6,What is a callback function
Ans:A JavaScript callback is a function which is to be executed after another function has
finished execution. A more formal definition would be - Any function that is passed as an argument
to another function so that it can be executed in that other function is called as a callback function.       
Eg:
function callback(){
  console.log("Hi")
}

function main(x){
 return x()
}

console.log(main(callback))


7,What is typeof operator
Ans:Typeof operator is used to check the type of variable which is declared.

8,What is the difference between null and undefined
Ans:**undefined**
 means a variable has been declared but has not yet been assigned a value, 
 **null**
is an assignment value, meaning that a variable has been declared and given the value of null

9,What is the difference between an attribute and a property
Ans:**Attributes**
They are used to give more details about the element, such as the ID, class, or style. 
These attributes are only used when the page is first loaded and cannot be changed by JavaScript.
**Properties**
are the values that can be accessed and modified through the DOM with JavaScript.

10,How do you remove trailing spaces of a string in javascript
Ans:The trim() method of String values removes whitespace from both ends of this string and returns a new string,
without modifying the original string. To return a new string with whitespace trimmed from just one end,
use trimStart() or trimEnd() .

11,How do you define multiline strings
Ans:There are three ways to create strings that span multiple lines:
*By using template literals.
*By using the + operator – the JavaScript concatenation operator.
*By using the \ operator – the JavaScript backslash operator and escape character.

12,What would be the result of 1+2+'3'
Ans:'33'

13,What is an anonymous function, write syntaxt
Ans:Anonymous function nothing but we can create a function without the function name or
Anonymous functions are self-invoking or self-executing. This means they are called just after the declaration.
They are called using brackets() just after declaring the function. 
If we do not use the invoking brackets after function definition,they will be just defined and not called
function() {
    // Function Body
 }
or
(function(){
  //Function body
})()

14,What are primitive data types
Ans:The five primitive data types in JavaScript are String, Number, Boolean, Undefined, and Null.

15,What is nodejs
Ans:
Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server

16,What are the different types of loops in javascript
Ans:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

17,How do you reversing an array
Ans:We can use reverse() 
let a=['jay','abi','Anni','Karthi']
console.log(a.reverse())

18,How do you list all properties of a javascript object
Ans:The getOwnPropertyNames() method returns all properties. 
The Object.keys() method returns all enumerable properties.
If you define object properties without enumerable:false, the two methods will return the same.

19,How do you convert character to ASCII code
Ans:using JavaScript charCodeAt() method

20,What happens if we add two arrays
Ans:So, we see now what happens when we add two arrays. In summary, 
the addition of arrays causes them to be coerced into strings, 
which does that by joining the elements of the arrays in a comma-separated string and then string-concatenating the joined strings
let arr1=['jay','abi','Anni','Karthi']
let arr2=[1,3,6,8]
console.log(arr1.concat(arr2))
//output:['jay','abi','Anni','Karthi',1,3,6,8]

21,Is that possible to use expressions in switch cases?
Ans:This is how it works:
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed

22,What are the differences between for...of and for...in statements

*/


let arr1=['jay','abi','Anni','Karthi',4,56,76]
let arr2=[1,3,6,8]
let result=arr1+arr2
console.log(result)//converts each array to string
console.log(arr1.concat(arr2))//create a new array in a single line by combining both the array elements.


//output:['jay','abi','Anni','Karthi',1,3,6,8]

let Student={
    name:'jay',
    age:24,
    country:'India'

}

console.log(Object.getOwnPropertyNames(Student))
console.log(Object.entries(Student))


let b='create The a new array in a single line by combining both the array elements.the'
console.log(b.match(/The/gi))
console.log(b.search('The'))
