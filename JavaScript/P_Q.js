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

// function cube() {
//     return sqr()
// }

// console.log(cube(2))



// let x = function () {

// }
// x()


//     (function myFun() {

//     })()


function callback() {
    console.log("hello i am callBack")
}

function higherOderFunction(callBacks) {
    return callBacks()
}

console.log(higherOderFunction(callback))

function sqr() {
    return 2 * 2
}

function cube(sqr) {
    return sqr()*2
}

console.log(cube(sqr))

































