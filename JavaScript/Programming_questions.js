/*
1,Write a function to check if a given string is a palindrome or not.

Normalize the String: Convert the string to lowercase and remove non-alphanumeric characters to ensure the check is case-insensitive and ignores spaces or punctuation.
Check Palindrome: Compare the normalized string with its reversed version.
Here's a function that implements these steps:

javascript
Copy code
function isPalindrome(str) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  const normalizedStr = str
    .replace(/[^a-z0-9]/gi, '') // Remove non-alphanumeric characters
    .toLowerCase(); // Convert to lowercase

  // Get the reversed string
  const reversedStr = normalizedStr.split('').reverse().join('');

  // Check if the normalized string is equal to the reversed string
  return normalizedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
Explanation:
Normalization: str.replace(/[^a-z0-9]/gi, '') removes any character that is not a letter or digit. toLowerCase() ensures the comparison is case-insensitive.
Reversing: split('') splits the string into an array of characters, reverse() reverses the array, and join('') joins the characters back into a string.
Comparison: Finally, normalizedStr === reversedStr checks if the original normalized string is equal to its reversed version.

*/
/*function isPalindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = str
      .replace(/[^a-z0-9]/gi, '') // Remove non-alphanumeric characters
      .toLowerCase(); // Convert to lowercase
  
    // Get the reversed string
    const reversedStr = normalizedStr.split('').reverse().join('');
  
    // Check if the normalized string is equal to the reversed string
    return normalizedStr === reversedStr;
  }
  
  // Example usage
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
  console.log(isPalindrome("hello")); // Output: false */

function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const reversedStr = str.split('').reverse().join('')
    return reversedStr == normalizedStr
}

console.log(isPalindrome("This this"))
console.log(isPalindrome("mom"))


//2,Write a function that take an array of numbers and return the sum of all positive numbers.
/*function sumOfPositiveNumbers(arr) {
    // Filter the array to include only positive numbers
    const positiveNumbers = arr.filter(num => num > 0);
  
    // Sum up the positive numbers
    const sum = positiveNumbers.reduce((total, num) => total + num, 0);
  
    return sum;
  }
  
  // Example usage
  const numbers = [1, -2, 3, 4, -5, 6];
  console.log(sumOfPositiveNumbers(numbers)); // Output: 14*/
let arr = [1, -2, 3, 4, -5, 7]
function sumOfPositiveNumbers(arr) {
    let positiveNumbers = arr.filter(num => num > 0)
    let sum = positiveNumbers.reduce((total, sum) => total + sum, 0)
    return sum
}
console.log(sumOfPositiveNumbers(arr))

//3,Implement a function to remove duplicates from an array.

let array = [1, 2, 3, 3, 4, 5, 1, 2, 6, 4];
function removeDuplicates(array) {
    return [...new Set(array)];
}
console.log(removeDuplicates(array))

//4,Write a function that reverse a string without using built in reverse function. 
function revString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed;
}
console.log(revString('hi'))

//5,Implement a function to find the minimum and maximum elements in an array.
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
function findMinAndMax(array) {
    // Initialize min and max with the first element of the array
    let min = array[0]
    let max = array[0]
    // Iterate through the array to find the min and max
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } if (array[i] > max) {
            max = array[i]
        }
    }
    return { min, max }
}
console.log(findMinAndMax(numbers))
/*
Explanation:
1,Initial Check: The function starts by checking if the array is empty. If it is, 
an error is thrown since you can't find a minimum or maximum in an empty array.

2,Initialization: min and max are initialized with the first element of the array.
 This serves as the starting point for comparison.

3,Iteration: The function then iterates through the array starting from the second element (index 1)
 and updates min and max whenever a smaller or larger value is found.

4,Return: After completing the iteration, an object containing both the min and max values is returned.
*/

//6,Write a function to find the factorial of a given number.

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact;
}
console.log(factorial(3))

//7,Write a function to count how many times each element is present in an array.
const arr1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
function countOccurances(arr1) {
    let countMap = {};
    arr1.forEach(element => {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    });
    return countMap
}
console.log(countOccurances(arr1))

/*
Explanation:
1,Initialization: An empty object countMap is created to store the counts of each element.
2,Iteration: The forEach method iterates over each element in the array.
*If the element is already a key in countMap, its count is incremented.
*If the element is not in countMap, it is added with an initial count of 1.
3,Return: The function returns the countMap object, which contains the count of each element.
*/

//8,Write a function to convert first letter of each word to uppercase.
function capitalizeFirstLetter(text) {
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
console.log(capitalizeFirstLetter(inputText))

/*
Explanation:
1,Splitting the Text:
text.split(' ') splits the input string into an array of words based on spaces.

2,Capitalizing Each Word:
The map() method processes each word in the array.
For each word, it checks if the word length is greater than 0 to avoid errors with empty strings.
word[0].toUpperCase() + word.slice(1) capitalizes the first letter and appends the rest of the word.

3,Joining the Words:
capitalizedWords.join(' ') combines the words back into a single string with spaces between them.
*/

//9,Write a function to print odd number in an array. 
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function printOddNumbers(array) {
    // Filter the array to get only odd numbers
    let oddNumbers = array.filter(num => num % 2 !== 0)
    // Print each odd number
    //oddNumbers.forEach(num=>console.log(num))
    return oddNumbers
}
console.log(printOddNumbers(numbers1))

//10,Write a function to print sum of even elements in an array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumEvenNumbers(array) {
    // Filter the array to get only even numbers
    let evenNumbers = array.filter(num => num % 2 === 0)
    //Caluclate the sum of even numbers
    let sum = evenNumbers.reduce((acc, curValue) => acc + curValue, 0)
    return sum;
}
console.log(sumEvenNumbers(numbers2))

//11, Write a function to add age inside theobject.
//(Let a=[{name:'neha',age:22},{name:"sanjay",age:24},{name:"suprith",age:28}])

// Initial array
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

/*Explanation:
1,Array Definition: You have an array a where each object already contains an age property.
2,Function addOrUpdateAge:
#Parameters:
*arr: The array of objects you want to process.
*ageValue: The new age value that you want to set for each object.
#Operation:
Use map to iterate over each object in the array.
For each object, create a new object using the spread operator { ...person } and
 update or add the age property with the value provided in ageValue.
#Usage:
The function is called with the array a and a new age value (30 in this case).
The updatedArray will be a new array where each object has its age property set to the new value.
*/

//12. Write a function to convert snake case to camel case.
function snakeToCamel(snakeStr) {
    return snakeStr
        .toLowerCase()              // Convert the entire string to lowercase
        .split('_')                 // Split the string by underscores
        .map((word, index) =>       // Transform each part
            index === 0             // If it's the first part, keep it lowercase
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize the first letter of each subsequent part
        )
        .join('');                  // Join all parts together
}
// Example usage:
const snakeCaseString = "this_is_a_snake_case_string";
const camelCaseString = snakeToCamel(snakeCaseString);

console.log(camelCaseString); // Output: "thisIsASnakeCaseString"


//13. Write a function to convert camel case to snake case.
function camelToSnake(camelStr) {
    return camelStr
        .replace(/([a-z])([A-Z])/g, '$1_$2')  // Insert underscore before uppercase letters
        .toLowerCase();                       // Convert the entire string to lowercase
}

// Example usage:
const camelCaseString1 = "thisIsACamelCaseString";
const snakeCaseString1 = camelToSnake(camelCaseString1);

console.log(snakeCaseString1); // Output: "this_is_a_camel_case_string"

//14. Write a function to find the second minimum element with and without using sort method. 
//1. Finding the Second Minimum Element Without Using the sort Method

function findSecondMinWithoutSort(arr) {
    let min = Infinity;
    let max = Infinity;
    for (let num of arr) {
        if (num < min) {
            secondMin = min
            min = num
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
    }
    return secondMin
}
const number = [7, 2, 5, 2, 8];
console.log(findSecondMinWithoutSort(number))

//2. Finding the Second Minimum Element Without Using the sort Method
const number1 = [7, 2, 5, 2, 8];
function findSecondMinWithSort(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
    return uniqueArr[1]
}
console.log(findSecondMinWithSort(number1))


//15. Write a function for sorting of elements of an array without using sort method.  
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
const numbe = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbe)); // Output: [11, 12, 22, 25, 34, 64, 90]

//16. Write a function to find longest word in an array.

function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
// Example usage:
const wordArray = ["watermelon", "banana", "cherry", "Apple", "grape"];
console.log(findLongestWord(wordArray)); // Output: "watermelon"


//17. Write a function to print common elements in an array. 

function printCommonElements(arr) {
    // Create a set to store unique elements
    const seen = new Set();
    // Create a set to store common elements
    const common = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            // If the element is already in 'seen', add it to 'common'
            common.add(num);
        } else {
            // Otherwise, add the element to 'seen'
            seen.add(num);
        }
    }
    // Print the common elements
    // console.log(Array.from(common).join(', '));
    return common
}
// Example usage:
const numb = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];
console.log(printCommonElements(numb)); // Output: "1, 2, 5"


//18. Write a function to print Fibonacci series. 
function printFibonacciSeries(n) {
    let a = 0
    let b = 1;
    console.log('Fibonacci Series:');
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

// Example usage:
const numberOfTerms = 10;
printFibonacciSeries(numberOfTerms);








