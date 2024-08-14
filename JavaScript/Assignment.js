//Voting

let age = prompt("Enter your age")

if (age >= 18) {
    console.log("You are eligible for voting")
} else {
    ageRequiredToVote = 18 - age;
    console.log(`You still have to wait ${ageRequiredToVote} years for voting`)
}

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

7,What is typeof operator
Ans:Typeof operator is used to check the type of variable which is declared.

8,What is the difference between null and undefined


9,What is the difference between an attribute and a property

*/

