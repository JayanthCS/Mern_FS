//sort
/*function sortSecMin(array) {
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
let number=[34,67,45,767,34,5]
console.log(sortSecMin(number))*/

//Duplicates from an array
/*let number=[34,67,45,767,34,5,67,45]
function removeDuplicates(array){
      return [...new Set(array)]
}
console.log(removeDuplicates(number))*/

//min and max elemnts
/*let num = [4, 3, 7, 6, 8, 9]
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
console.log(minAndMax(num))*/

//camel to sanke
/*let camelCaseString="thisIsCamelCaseString"
function camelToSnakeCase(str){
return str.replace(/([a-z])([A-Z])/g , '$1_$2').toLowerCase()
}
console.log(camelToSnakeCase(camelCaseString))*/

//snake to camel
/*let sankecaseString='this_is_sanke_case_string'
function snakeToCamel(str){
return str.split("_").map((word,index)=>index===0?word:word.charAt(0).toUpperCase()+word.slice(1)).join('')
}
console.log(snakeToCamel(sankecaseString))*/

//Reverse a string
/*function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i]
    }
    return reversedStr;
}
console.log(reverseString("hello"))*/

//Longest Elements in an array
/*let names = ["Jayanth", "Annayya", "Karthik", "yeaswanth", "Marulasidda", "Punith", "Manu Swamy"]
function findLongestWord(array) {
    let longestWord = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i]
        }
    }
    return longestWord
}
console.log(findLongestWord(names))*/

//Factorial
/*function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
     return fact;
}
console.log(factorial(4))*/

//fibonacci
/*function fibonacci(n) {
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
fibonacci(10)*/

//Repeatation
/*let fruits = ["Banana", "Orange", "Banana", "Apple", "Orange", "Banana", 'apple']
function countOccourance(array) {
    let countMap = {}
    array.forEach(element => {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    });
    return countMap;
}
console.log(countOccourance(fruits))*/

//bubble sort
/*function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]            }
        }
    }
    return array
}
let num=[54,67,23,45,78,23,86,24,56]
console.log(bubbleSort(num))*/


//capiatlize first letter
/*function capiatlizeFirstLetter(text) {
    let words = text.split(' ')
    let capiatlizedWord = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1)
        }
       // return word
    })
    return capiatlizedWord.join(' ')
}
console.log(capiatlizeFirstLetter("hello this is jayanth"))*/

//isPalindrome

/*function isPalindrome(string){
let normalizedStr=string.replace(/[^a-z0-9]/gi).toLowerCase()
let reversedStr=normalizedStr.split('').reverse().join('')
return reversedStr===normalizedStr
}
console.log(isPalindrome('mom'))*/

/*let numbers = [2, 3, 4, 2, 3, 4, 2, 1, 5, 6]
function printCommon(array) {
    let unique = new Set()
    let common = new Set()
    for (let num of array) {
        if (unique.has(num)) {
            common.add(num)
        }else{
            unique.add(num)
        }
    }
    console.log(Array.from(common).sort().join(','))
}
printCommon(numbers)*/

function sqr(num){
return num*num
}
function cube(x,num){
return x(num)*num
}
console.log(cube(sqr,3))




















