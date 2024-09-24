/*function isPalindrome(str){

    let normalizedText=str
    let reversedText=str.split('').reverse().join('')
    return normalizedText==reversedText
}

let text='Jayanth ajgshd ASKJ;ALD'
let text1='mom'
let text2='wow'
console.log(isPalindrome(text1))
console.log(isPalindrome(text2))
*/

const { log } = require("console")

/*let array=[2,3,-4,-6,35,6,]

function sumOfPositiveNumbers(array){

    let positiveNumbers=array.filter(num=>num>0)
    let sum=positiveNumbers.reduce((total,num)=>total+num,0)
    return sum
}
console.log(sumOfPositiveNumbers(array))*/

/*let array=[1,2,1,2,3,4,4,5,6,5,7,8]
function removeDuplicates(array){
let removed=[...new Set(array)]
return removed
}
console.log(removeDuplicates(array))*/


/*function reverseStr(str) {

    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i]
    }
    return reversedStr
}
console.log(reverseStr('Hello'))*/

/*let array = [1, 2, 1, 2, 3, 4, 4, 5, 6, 5, 7, 8]
function minAndMax(array) {
    let min = array[0]
    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } if (array[i] > max) {
            max = array[i]
        }
    }
    return { min, max }
}
console.log(minAndMax(array))*/


/*function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(3))*/

/*let array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
function countOccurances(array) {
    let countMap = {}
    array.forEach(element => {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    });
    return countMap
}
console.log(countOccurances(array))*/

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function oddNum(numbers) {
    let odd = numbers.filter(num => num % 2 != 0)
    return odd
}
console.log(oddNum(numbers))*/

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumOfEven(numbers){
    let even=numbers.filter(num=>num%2==0)
    let sumEven=even.reduce((acc,app)=>acc+app,0)
    return sumEven
}
console.log(sumOfEven(numbers))*/


/*function capitalizeFirstLetter(text) {
    // Split the text into words
    let words = text.split(' ')
    // Capitalize the first letter of each word and join them back into a string
    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            // Capitalize the first letter and keep the rest of the word as is
            return word[0].toUpperCase() + word.slice(1)
        }
        return word;//Return the word unchanged if it's empty
    })
    // Join the capitalized words with a space to form the final string
    return capitalizedWords.join(' ');
}
let inputText = "hello i am jayanth"
console.log(capitalizeFirstLetter(inputText))*/

/*function printFibonacciSeries(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a)
        let next = a + b;
        a = b;
        b = next
    }
}
printFibonacciSeries(10)*/


//Palindrome
/*function isPalindrome(string) {
    let normalizedString = string.replace(/[^a-z0-9]/gi).toLowerCase()
    let reversedStr = normalizedString.split('').reverse().join('')
    return reversedStr === normalizedString
}
let text = 'wow'
console.log(isPalindrome(text))*/

//Sum of all +ve numbers
/*let numbers = [1, -1, 2, -2, -3, -4, 3, 4]
function sumOfPositiveNumbers(array) {
    let positiveNumbers = array.filter(num => num > 0)
    let sum = positiveNumbers.reduce((acc, total) => acc + total, 0)
    return sum;
}
console.log(sumOfPositiveNumbers(numbers))*/


//removeDuplicates
/*let array = [1, 1, 2, 2, 3, 4, 5, 4, 6, 5]
function removeDuplicates(array) {
    return [...new Set(array)]
}
console.log(removeDuplicates(array))*/


//reverse a string
/*function reverseStr(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i]
    }
    return reversedStr
}
console.log(reverseStr('hello'))*/


//min and max
/*let numbers = [2, 3, 5, 7, 8, 9]
function minAndMax(array) {
    let min = array[0]
    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } if (array[i] > max) {
            max = array[i]
        }
    }
    return {min,max}
}
console.log(minAndMax(numbers))*/


//factorial
/*function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(4))*/

//how many times each elemnts present in an array
/*let fruits = ['apple', 'bannana', 'apple', 'apple', 'orange', 'bannana']
function countOccurances(array) {
    let countMap = {}
    array.forEach(element => {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    });
    return countMap
}
console.log(countOccurances(fruits))*/

//fibonacciSeries
/*function fibonacciSeries(n) {
    let a = 0, b = 1
    console.log("Fibonacci Series")
    for (let i = 0; i < n; i++) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
fibonacciSeries(12)*/

//common elemnts in array
/*function printCommonElements(array) {
    let unique = new Set()
    let common = new Set()

    for(let num of array){
        if(unique.has(num)){
            common.add(num)
        }else{
            unique.add(num)
        }
    }
    console.log(Array.from(common).join(','))
}
let num=[1,2,3,2,4,3,5,4]
printCommonElements(num)*/

//longest word
/*function findLongestWord(words) {
    let longestWord = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord;
}
let wordArray=["jay","Jayanth"]
console.log(findLongestWord(wordArray))*/

//second min elemnt
/*function findSecondMinEle(array) {
    let min1 = Infinity
    let min2 = Infinity
    for (let num of array) {
        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2 && num !== min1) {
            min2 = num
        }
    }
    return min2;
}
let num=[1,3,4,3,5,6,7]
console.log(findSecondMinEle(num))*/

/*let num=[1,3,4,3,5,6,7]
let min2=num.sort()
console.log(min2[1])*/

//camelToSnakeCase
/*function camelToSnakeCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
}
let camelCase = "thisIsCamelCaseString"
console.log(camelToSnakeCase(camelCase))*/

//snakeToCamel
/*let snakeCase="this_is_camel_case_string"
function snakeCaseToCamelCase(str){
return str.toLowerCase().split('_').map((word,index)=>index===0?word:word.charAt(0).toUpperCase()+word.slice(1)).join('')
}
console.log(snakeCaseToCamelCase(snakeCase))*/

//






// var x = 10
// function myFun() {
//     //var x=5
//     console.log(x)
// }
// myFun()
// console.log(x)


// let y = 2
// function myFun1() {
//     let y = 3
//     console.log(y)
// }
// myFun1()

// const z = 2
// function myFun1() {
//     const z = 3
//     console.log(y)
// }
// myFun1()

// let name = () => { }



// //let new_Array=array.slice(1,4)
// //console.log(new_Array)


// let array = [1, 2, 3, 4, 5, 6]

// array.pop()

// console.log(array)

// //let number=NaN

// function sqr(a) {
//     return a * a
// }

// function cube(x,a) {
//     return x(a)*a
// }

// console.log(cube(sqr,2))



// let x = function () {

// }
// x()


//     (function myFun() {

//     })()


/*function callback() {
    console.log("hello i am callBack")
}

function higherOderFunction(callBack) {
    return callBack()
}

higherOderFunction(callback)

function sqr() {
    return 2 * 2
}

function cube(sqr) {
    return sqr() * 2
}

console.log(cube(sqr))*/



//

/*function sqr(a) {
    return a * a
}

function cube(x, a) {
    return x(a) * a
}

console.log(cube(sqr, 2))*/

/*let Employee = {
    calTax() {
        console.log("Tax rate is 10%")
    }
}

let jay = {
    salary: 50000
}

jay.__proto__ = Employee;

//classes
class Car {
    constructor(brand, mileage) {
        console.log("creating a new object")
        this.brand = brand;
        this.mileage = mileage
    }
    start() {
        console.log("Start")
    }
    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand
    }
}

let toyato = new Car("fortuner", 14)
console.log(toyato)
let lexus = new Car("lexus", 8)
console.log(lexus)*/


//Palindrome
/*function isPalindrome(string) {
    let normalizedString = string.replace(/[^A-Z0-9]/gi).toLowerCase()
    let reversedStr = normalizedString.split('').reverse().join('')
    return reversedStr === normalizedString
}
console.log(isPalindrome('WOW'))*/


//Sum of PositiveNumber
/*let number = [1, -3, 4, 5, -6, -4]
function sumOfPositiveNumbers(array) {
    let positiveNumbers = array.filter(num => num > 0)
    let sum = positiveNumbers.reduce((acc, total) => acc + total, 0)
    return sum;
}
console.log(sumOfPositiveNumbers(number))*/

//removeDuplicates from an array
/*function removeDuplicates(array) {
    return [...new Set(array)]
}
let numbers=[1,3,2,1,2,3,4,5]
console.log(removeDuplicates(numbers))*/

//Reverse a string
/*function reverseString(string) {
    let reversedStr = ' ';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + string[i]
    }
    return reversedStr;
}
console.log(reverseString("hello"))*/

//min and max elemnts in an array
/*let numbers = [205, 405, 105,104]
function minAndMax(array) {
    let min = array[0]
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } if (array[i] > max) {
            max = array[i]
        }
    }
    return { min, max }
}
console.log(minAndMax(numbers))*/

//factorial
/*function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(4))*/

//
/*let numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => {
    console.log(num ** 2)
})

let num = [1, 3, 4, 5, 6, 7, 8, 4]
let nums = num.map((val) => {
    return val * val
})
console.log(nums)
console.log(num)*/

/*let n = prompt("Enter a num :")
let array = [];
for (let i = 1; i <= n; i++) {
    array[i - 1] = i
}
console.log(array)

let sum=array.reduce((acc, total) => acc * total)
console.log(sum)*/

//min and max

/*let num = [1, 3, 4, 5, 6, 7, 8, 4]
function minMax(array) {
    let min = array[0]
    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } if (array[i] > max) {
            max = array[i]
        }
    }
    return { min, max }
}
console.log(minMax(num))*/

//Write a function to count how many times each element is present in an array.
/*let fruits = ["Apple", "Banana", "Orange", "Apple", "Orange", "Apple"]

function countOccurances(array) {

    let countMap = {}
    array.forEach(element => {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    });
    return countMap
}
console.log(countOccurances(fruits))*/

//Fibonacci
/*function fibonacciSeries(n) {
    let a = 0, b = 1;
    for (let i = 0; i <= n; i++) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
//let terms = 10
console.log(fibonacciSeries(5))*/

//common elements in an array
/*let fruits = ["Apple", "Banana", "Orange", "Apple", "Orange", "Apple"]
function printCommonElements(array) {
    let unique = new Set()
    let common = new Set()
    for (let element of array) {
        if (unique.has(element)) {
            common.add(element)
        }else{
            unique.add(element)
        }
    }
    return Array.from(common).join(", ")
}
console.log(printCommonElements(fruits))*/

//Longest word
/*let fruits = ["Apple", "Orange", "Banana", "Apple", "Orange", "Appleeee"]
function findLongestWord(words) {
    let longestWord = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}
console.log(findLongestWord(fruits))*/


//SecondMinElement

/*let num = [45, 5765, 44, 34,]
function SecondMinElement(array) {
    let min1 = Infinity
    let min2 = Infinity
    for (let num of array) {
        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2 && num !== min1) {
            min2 = num
        }
    }
    return min2
}
console.log (SecondMinElement(num))*/

//camel to snake
/*function camelToSnakeCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
}
console.log(camelToSnakeCase("thisIsCamelCaseString"))

function snakeCaseToCamelCase(str) {
    return str.toLowerCase().split('_').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('')
}
console.log(snakeCaseToCamelCase("this_is_camel_case_string"))*/

//
/*let a = [{ name: "neha", age: 22 }, { name: "sanjay", age: 24 }, { name: "suprith", age: 28 }]
function addOrUpdate(arr, ageValue) {
    return arr.map(person => {
        return { ...person, age: ageValue }
    })
}
console.log(addOrUpdate(a,30))*/


//
/*let text = "this is me"
let words = text.split(" ")
let capitalizedWords = words.map(word => {
    if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1)
    }
    return word
})

console.log(capitalizedWords)*/

//oddNumbers
/*function printOddNumbers(array) {
    let oddNum = array.filter(num => num % 2 !== 0)
    return oddNum
}
console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//sumofEven Numbers
function sumOfEven(array) {
    let even = array.filter(num => num % 2 == 0)
    let sum = even.reduce((acc, total) => acc + total, 0)
    return sum
}
console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9]))*/

//Camel to sanke Case without built in function
/*function camelToSnake(camelCase) {
    let snakeCase = '';
    for (let i = 0; i < camelCase.length; i++) {
        let char = camelCase[i]
        //check if the character is an uppercase letters
        if (char >= 'A' && char <= 'Z') {
            //if it is not the first character,add an underscore
            if (i > 0) {
                snakeCase = snakeCase + '_';
            }
            //covert upper to lower case by adjusting ASCII Value
            snakeCase = snakeCase + String.fromCharCode(char.charCodeAt(0) + 32)
        } else {
            //for lower case letters, just append them
            snakeCase = snakeCase + char
        }
    }
    return snakeCase;
}
let result=camelToSnake("camelCaseString")
console.log(result)*/

//for of and for in...

/*let array = [1, 2, 3, 4, 5]
for (const value of array) {
    console.log(value,array)
}
let array1=[6,7,8,9,10]
for(const object in array1){
    console.log(object,array1[object])
}*/

/*let array=["one","two","three"]
let arr=array.includes("one")
console.log(arr);
let string="Hello"
console.log(string.includes("o"))*/

/*console.log(true == " ")

let a = 10;
let b = new Number(10);
let c = 10
console.log(b)
console.log(+true)
console.log(!"xyz")*/







