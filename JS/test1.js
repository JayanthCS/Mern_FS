console.log("Yes this is jayanth!!")
document.getElementById("main").innerHTML = "Hello jayanth!!"

let name = "jayanth"

console.log("My name is ", name)


/* Numbers */
let age = 20
let height = 5.7
const PI = 3.142

// console.log(Math.round(PI))
// console.log(Math.round(height))
// console.log(Math.ceil(PI))
// console.log(Math.pow(4, 3))


/* Strings */
let blank = ' '
let firstName = 'Virat'
let lastName = 'Kohli'


let bioData = `Virat Kohli (Hindi pronunciation: 
    born 5 November 1988) is an Indian international 
   cricketer and the former captain of the Indian national 
   cricket team who plays as a right-handed batsman for 
   Royal Challengers Bangalore in the IPL and for Delhi 
   in Indian domestic cricket. Widely regarded as one of 
   the greatest batsmen of all time,[4] Kohli holds the 
   records for scoring most runs in T20 internationals 
   and in the IPL. In 2020, the International Cricket 
   Council named him the male cricketer of the decade. 
   Kohli has also contributed to India's 
   successes, including winning the 2011 
   World Cup and the 2013 Champions trophy.`


let fullName = firstName + ' ' + lastName
// console.log(firstName)
// console.log(lastName)
// console.log(fullName)

let something = 'Virat Kohli (\'Hindi\' pronunciation: born 5 November 1988) is an Indian international '


//console.log(something)


let num1 = 200
let num2 = 100
//console.log("The sum of "+ num1 + " and "+ num2 + " is  "+ sum)
//console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)


//console.log(lastName)
//console.log(lastName[lastName.length-2])
//console.log(lastName.length)

//console.log(lastName.toUpperCase())
//console.log(bioData.length)
//console.log(bioData.substr(663,17))
//console.log(lastName.length)
//console.log(lastName[5])

//console.log(lastName)
//console.log(lastName.substring(2, 3))


let team = "Royal Challengers Bangalore"
//console.log(team.split('Challengers'))
let someText = "          Challengers            "
//console.log(someText.trim().length)

//console.log(bioData.includes('runs'))
//console.log(bioData)
let new_String=bioData.replace('India', 'Africa');
console.log(new_String)
console.log(new_String.startsWith('Virat'))
console.log(new_String.endsWith('trophy.'))
console.log(new_String.indexOf('Virat'))
console.log(new_String.lastIndexOf('cricket'))

let age1=33
let name1= ' jayanth'

let disc1= 'Hi i am '
let disc2= ' and i am '

disc1=disc1.concat(name1, disc2 , age1, 'years old')
console.log(disc1)

let cricket = /cricket/g
console.log(bioData.match(cricket))

let year_pattren=/\d{4}/g

console.log(bioData.match(year_pattren))


let string='jayanth is a developer'

console.log(string.split('').reverse().join(''))