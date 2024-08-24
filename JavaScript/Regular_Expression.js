//Sum of even numbers in an array
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumOfEvenNum(array) {
    let evenNumbers = array.filter(num => num % 2 == 0)
    let sum = evenNumbers.reduce((total, acc) => total + acc, 0)
    return sum
}
let sumOfEvenNumbers = sumOfEvenNum(numbers)
console.log(sumOfEvenNumbers)*/

//Print the odd numbers in string
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function oddNumbers(array){
    let oddNum = array.filter(num => num % 2 != 0)
    return oddNum;
}
console.log(oddNumbers(numbers))*/

//convert first letter of each word to upper case
/*let inputText = 'hello this is me'
function capitalizeFirstLetter(text) {
    let words = text.split(' ');

    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1)
        }
        return word;
    });
    return capitalizedWords.join(' ')
}
console.log(capitalizeFirstLetter(inputText))*/

//function to add age inside the object
/*let a = [
    { name: 'neha', age: 22 },
    { name: 'sanjay', age: 24 },
    { name: 'suprith', age: 28 }
];

function addOrUpdateAge(arr,ageValue){
    return arr.map(person=>{
        return {...person,age:ageValue}
    })
}
console.log(addOrUpdateAge(a,25))
console.log(a)*/

//convert snakeCase to camelCase
/*let snakeCaseString = 'this_is_a_snake_case_string'
function snakeCaseToCamelCase(snakeStr) {
    return snakeStr.toLowerCase()
        .split('_')
        .map((word, index) =>
            index === 0
                ? word 
                : word.charAt(0).toUpperCase() + word.slice(1))
                .join('')

}
console.log(snakeCaseToCamelCase(snakeCaseString))*/

//convert camelCase to snakeCase
/*function camelToSnake(camelStr) {
    return camelStr
        .replace(/([a-z])([A-Z])/g, '$1_$2')  // Insert underscore before uppercase letters
        .toLowerCase();                       // Convert the entire string to lowercase
}

// Example usage:
const camelCaseString1 = "thisIsACamelCaseString";
const snakeCaseString1 = camelToSnake(camelCaseString1);

console.log(snakeCaseString1);*/

//second min element with and without sort method
//without sort method
/*let num = [4, 5, 3, 6, 7, 8, 9]
function findSecondMinWithoutSort(array) {
    let min = Infinity
    let max = Infinity
    for (let num of array) {
        if (num < min) {
            secondMin = min//Infinity
            min = num//
        } else if (num < secondMin && num !== min) {
            secondMin = num
        }
    }
    return secondMin
}
console.log(findSecondMinWithoutSort(num))

//with sort method
let num1 = [4, 5, 3, 6, 7, 8, 9]
function findSecondMinWithSort(array){
let uniqueArr=[...new Set(array)].sort()
return uniqueArr[1]
}
console.log(findSecondMinWithSort(num1))*/

//longest word in an array
/*let wordArray = ["jay", "apple"]
function longestWord(array) {
    let longestWord = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i]
        }
    }
    return longestWord;
}
console.log(longestWord(wordArray))*/

//common elemnts in an array
/*let num = [1, 2, 3, 1, 2, 4, 5, 4, 5, 6, 7, 8]
function printCommonElenets(array) {
    let unique = new Set()
    let common = new Set()
    for (let num of array) {
        if (unique.has(num)) {
            common.add(num)
        } else {
            unique.add(num)
        }
    }
    return Array.from(common).join(',')
}
console.log(printCommonElenets(num))*/

//Fibonacci Series
function printFibonacciSeries(n) {
    let a = 0, b = 1;
    console.log("Fibonacci Series:")
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b
        a = b
        b = next
    }
}
let numberOfTerms = 10;
printFibonacciSeries(numberOfTerms)









