//First letter of each word to uppercase
/*let inputText = "hello this is me"
function capitalizeFirstLetter(text) {
    let words = text.split(' ')
    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1)
        }
        return word
    })
    return capitalizedWords.join(' ')
}
console.log(capitalizeFirstLetter(inputText))*/

//Snake to camel
/*let snakeCaseString = 'this_is_snake_case_string'
function snakeCaseToCamelCase(snakeStr) {
    return snakeStr.toLowerCase().split('_').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('')
}
console.log(snakeCaseToCamelCase(snakeCaseString))

//camel to snake
let camelCaseString = 'thisIsCamelCaseString'
function camelCaseToSnakeCase(camelStr) {
    return camelStr.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()

}
console.log(camelCaseToSnakeCase(camelCaseString))

//second min value without using sort method
let num = [1, 3, 5, 6, 7, 8]
function findSecondMinWithoutSort(array) {
    let min1 = Infinity
    let min2 = Infinity
    for (let num of array) {
        if (num < min1) {
            min1 = min2;
            min2 = num;
        } else if (num < min2 && num !== min1) {
            min2 = num
        }
    }
    return min2
}
console.log(findSecondMinWithoutSort(num))
//
let num1 = [2, 1, 3, 3, 5, 6, 7, 8]
function withSort(array) {
    let uniquearray = num1.sort()
    return uniquearray[1]
}
console.log(withSort(num1))


//longest word in an array
let wordArray = ["jay", "Apple"]
function findLongestWord(words) {
    let longestWord = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}
console.log(findLongestWord(wordArray))*/

//print commom elemnts in an array
/*function printCommonElements(array) {
    let seen = new Set()
    let common = new Set()
    for (let num of array) {
        if (seen.has(num)) {
            common.add(num)
        } else {
            seen.add(num)
        }
    }
    console.log(Array.from(common).join(' '))
}
let num = [1, 2, 2, 3, 3, 4, 6, 7, 8, 1, 2]
printCommonElements(num)*/

//Fibonacci series
/*function fibonacciSeries(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
let terms = 10
fibonacciSeries(terms)

//palindrome
function isPalindrome(str) {
    let normalizedString = str.replace(/[^a-z0-9]/gi).toLowerCase();
    let reverseString = normalizedString.split('').reverse().join('')
    return reverseString === normalizedString
}

console.log(isPalindrome("Wow"))*/

//sumOfAllPositiveNumbers
/*let num = [1, -1, 2, -3, 3]
function sumOfAllPositiveNumbers(array) {
    let positiveNumbers = array.filter(num => num > 0)
    let sum = positiveNumbers.reduce((total, acc) => total + acc, 0)
    return sum;

}
console.log(sumOfAllPositiveNumbers(num))*/

//duplicates

/*let num=[1,1,2,3,4,3,4,5,6]
function removeDuplicates(array){
return [...new Set(array)]
}
console.log(removeDuplicates(num))*/

//addAge
let a = [
    { name: 'neha', age: 22 },
    { name: 'sanjay', age: 24 },
    { name: 'suprith', age: 28 }
];

// Function to add or update age property
function addOrUpdateAge(arr, ageValue) {
    return arr.map(person => {
        // Add or update the 'age' property
        return { ...person, age: ageValue };
    });
}

// Example usage: updating all ages to 30
let updatedArray = addOrUpdateAge(a, 30);

console.log(updatedArray);



