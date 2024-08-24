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






