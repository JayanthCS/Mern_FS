

// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5


//DOM
/*let div = document.createElement("div")
let child = document.createTextNode("Hello this is div tag")
div.appendChild(child)
let element = document.getElementById("div1")
element.appendChild(div)
//div.removeChild(child)

function myFunc() {
    document.getElementById("myBtn").style.backgroundColor = "red"
    document.getElementById("myBtn").style.color = "white"
    document.getElementById("p").innerHTML=Date()
}
let events = document.getElementById("myBtn")
events.addEventListener("click", myFunc)*/

//prototype chaining
/*function myFunc(name, age) {
    this.name = name
    this.age = age
}

myFunc.prototype.deatils = function()  {
   console.log(this.age);
   console.log(this.name);
}

 let s1=new myFunc("Jayanth",25)
s1.deatils()*/

//promise
/*function promiseFunc() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log("hello")
           resolve("successes")
       }, 4000);
   })
}
promiseFunc().then((data)=>{console.log(data)})*/

//Promise chaining
/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getData", dataId)
            resolve("Successes")
        },2000)
    })

}

getData(1).then(() => { return getData(2) }).then(() => { return getData(3) }).then((res) => { console.log(res) })*/

//callback hell
/*function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log('data', dataId)
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, () => { getData(2, () => { getData(3, () => { console.log("done") }) }) })*/

//Async and Await

/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId)
            resolve(200)
        }, 2000);
    });
}

async function gettingData() {
    await getData(1)
    await getData(2)
    await getData(3)

}
gettingData()

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Details");
            resolve(200);
        }, 6000);
    });
}

async function getWeatherData() {
    await api()
    await api()
}
getWeatherData()*/


//CAMEL TO SNAKE CASE
/*function camelToSnake(camelCase) {
    let snakeCase = ""
    for (let i = 0; i < camelCase.length; i++) {
        let char = camelCase[i]
        if (char >= 'A' && char <= 'Z') {
            if (i > 0) {
                snakeCase = snakeCase + '_'
            }
            snakeCase = snakeCase + String.fromCharCode(char.charCodeAt(0) + 32)
        }
        else {
            snakeCase = snakeCase + char
        }
    }
    return snakeCase;
}
console.log(camelToSnake("jayanthFullStack"));*/

//sum of even numbers
/*function sumOfEven(array) {
    let sum = 0;
  
    for (let num of array) {
        if (num % 2 == 0) {
           sum =sum+num
        }
    }
    console.log(sum) 
}
let array=[1,2,3,4,5,6,7,8,9]
sumOfEven(array)*/

//factorial
/*function factorial(n) {
    let fact = 1
    for (let index = 1; index <= n; index++) {

        console.log(index)
        fact = fact * index
    }
    return fact
}
console.log(factorial(4))*/


/*let fruits = ["Apple", "Orange", "Banana", "Pomogranet"]
function findLongestword(words) {
    let longestwWord = words[0]
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestwWord.length) {
            longestwWord = words[i]
        }
    }
    return longestwWord
}
console.log(findLongestword(fruits));

//common elements
function printCommonElements(array) {
    let common = new Set()
    let unique = new Set()
    for (let num of array) {
        if (unique.has(num)) {
            comm = common.add(num)
        } else {
            unique.add(num)
        }
    }
    return comm
}
let arr = [1, 3, 2, 1, 2, 3, 4, 5, 6, 4, 5, 6]
console.log(printCommonElements(arr));

function positiveNumbers(array) {
    let sum=0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveNum = array[i]
          
            sum=sum+positiveNum
        }
    }
   return sum  
}
let nums=[1,2,-3,-4,3,4]
console.log(positiveNumbers(nums));*/






// let x=10;
// let y='10'


// if(){

// }else{

// }

// if(){

// }else if(){

// }

// let numOfWheels=10;
// switch(numOfWheels){
//     case 1 :console.log("it is just a wheel ")
//     break;
//     case 2 :console.log("it is a bike ")
//     break;
//     case 3 :console.log("it is  a auto ")
//     break;
//     case 4 :console.log("it is a car ")
//     break;
//     default:console.log("invalid");
// }

// let array=[]
// let arr=Array()
// let arr1=Array(8).fill(0)
// console.log(arr1);


// let x=1.234
// console.log(Math.floor(x))

// let count=4
// count>5?console.log("number is greater than 5")
// :console.log("number is less than 5");

// let numOfWheels=10;
// switch(numOfWheels){
//     case 1 :console.log("it is just a wheel ")
//     break;
//     case 10 :console.log("it is a bike ")
//     break;
//     case 3 :console.log("it is  a auto ")
//     break;
//     case 4 :console.log("it is a car ")
//     break;
//     default:console.log("invalid");
// }

// let arr=Array(2)
// arr.fill(4)
// console.log(arr);

// var str="Jayanth"
// var str="Jayanth cs"

// console.log(str);

// let something=null
// console.log(something)

//let x=1.49
//console.log(Math.round(x));//1
//console.log(Math.ceil(x));//2
//console.log(Math.floor(x));//1
// let y = 9;
// console.log(Math.pow(9,0.5));

// //let string = `Ancient manuscripts also divided sentences into paragraphs 
//               with line breaks (newline) followed by an initial at the beginning of the next paragraph.
//               An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. 
//               This style can be seen, for example, in the original Old English manuscript of Beowulf.
//               Outdenting is still used in English typography, though not commonly.
//               [2] Modern English typography usually indicates a new paragraph by indenting the first line.
//               This style can be seen in the (handwritten) United States Constitution from 1787. 
//               For additional ornamentation, a hedera leaf or other symbol can be added to
//               the inter-paragraph white space, or put in the indentation space.`


//console.log(string.toLocaleUpperCase());  
//console.log(string.substr(2,10));//from 2 index to total character of 10
//console.log(string.substring(2,10));//starting from 2 index to ending at 10 index
//console.log(string.split(''));
//console.log(string.trim());//trim the spaces btween word or sentence
//console.log(string.includes("style"));//true
// let new_string=string.replace('style','styleeee')
// console.log(new_string);
// console.log(string.startsWith('Ancient'));
// console.log(string.endsWith('space.'));
//console.log(string.lastIndexOf('into'));
// console.log(string.charAt(10));
// console.log(string.charCodeAt(10));//ASCII Value
//console.log(+true);//1
//console.log(+false);//0

// let x="Jayanth"
// let y='cs'
//console.log(x.concat(" ",y));//Jayanth cs
//console.log(x.repeat(2));//JayanthJayanth
// let x=5;
// console.log(x==10);//fasle
// console.log(x!=10);//true

// let x = 10
// let y = 20
// if (x > 5 && y < x) {//Both condition should be true
//     console.log("condition is true");
// }else{
//     console.log("condition is false");
// }


// let x = 10
// let y = 20
// if (x > 5 || y < x) {//Any one condition should be true
//     console.log("condition is true");
// }else{
//     console.log("condition is false");
// }


// let count=0
// console.log(count--);
// //console.log(count)
// console.log(count--);
// console.log(count)

//Ternary operator
// let count=10;
// count>15?console.log("count in >5"):console.log("count is < 5");

// let score = 34
// if (score >= 85) {
//     console.log("Distinction");
// } else if (score >=60) {
//     console.log("first class");
// } else if (score >= 35) {
//     console.log("just pass");
// }else{
//     console.log("fail");
// }

// let numberOfWheels=0
// switch(numberOfWheels){
// case 1:console.log("it is a wheel");
// break;
// case 2:console.log("it is a bike");
// break;
// case 3:console.log("it is a auto");
// break;
// case 4:console.log("it is a car");
// break;
// default:console.log("invalid entry");
// }

//Arrays
// let arr="Jayanth".split("")
// console.log(arr);
// let arr = Array(1).fill(0)
// console.log(arr);

// let array = [2,4,1,6,3,8,10,9]
// array.sort()
// console.log(array);

// let text = ""
// let i = 0
// while (i < 10) {
//     text = text + i
//     i++   
// }


// do {
//     text = text + i
//     i++
// } while (i < 10)
// console.log(text);

// function printVoterNameAndAge(name="Jayanth", age = 19) {
//    return {name,age}
// }
// console.log(printVoterNameAndAge());

//HOFs
// function sumOfTwoNum(a, b) {
//     return 2+2;
// }

// function sumOfThreeNum(c, x) {
//     return c + x()
// }

// console.log(sumOfThreeNum(3,sumOfTwoNum))

// let array=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(array.flat());

//var x=10
// {
//     const x=20
//     x=x+1
//     console.log(x);//Throw error if we use let means we can re assign the value

// }
//console.log(x);

// let letter=new Set(['A','B','C','D','A'])
// console.log(letter);

// let letters=new Set()
// letters.add("A")
// letters.add("B")
// letters.add("A")
// letters.add("C")
// letters.add("D")
// console.log(letters);

// let maps = new Map([["APPLES",500],['Banana',300]])

// console.log(maps.get("APPLES"));
// console.log(maps.delete("APPLES"));
// console.log(maps.size);
// console.log(maps);


// let maps1=new Map()
// maps1.set("APPLES",500)
// maps1.set('Banana',300)
// console.log(maps1);


// let Person = {
//     fname: "Jay",
//     lname: "cs",
//     fullName: function (city, age) {
//         return this.fname + " " + this.lname + " " + city + " " +age
//     }
// }

// let Person1 = {
//     fname: "abhi",
//     lname: 'cs'
// }
// let Person2 = {
//     fname: "Anni",
//     lname: 'um'
// }

// console.log(Person.fullName.call(Person1, 'chikkamagaluru', 24));

// console.log(Person.fullName.apply(Person2,["kadur",26]));
// let fullNamee=Person.fullName.bind(Person2,"Banglore",30)
// console.log(fullNamee());


//closures
// function myFunc() {
//     a = 2
//     return function myFunc2(b = 2) {
//         return a + b
//     }

// }
// let my = myFunc()
// console.log(my());

// function makeCounter() {
//     let count = 0
//     return function () {
//         count++
//         return count
//     }
// }
// let counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


//classes
// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     present() {
//         return this.brand
//     }
// }

// class Model extends Car {
//     constructor(brand, model) {
//         super(brand)
//         this.model = model
//     }

//     show() {
//         return this.present() + " " + this.model
//     }
// }

// let myCar = new Model("ford", 2015)
// console.log(myCar.show())


// console.log(1<<"2"|"3");

//promises//callback hell
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNextData) {
//             getNextData()
//         }
//     }, 3000)
// }

// getData(1, () => { getData(2, () => { getData(3, () => { console.log("sucsses") }) }) })

//promise chaining

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Succsses")
//         }, 3000);
//     })
// }

// getData(1).then(() => { return getData(2) })
//     .then(() => { return getData(2) })
//     .then((data) => {
//         console.log(data);
//     })


//Async and Await

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Succsses")
//         }, 2000);
//     })
// }
// async function func() {
//     await getData(1)
//     await getData(2)
//     console.log("hello")
//     await getData(3)
//     await getData(4).then((data) => {
//         console.log(data);
//     })
// }
// func()


//localStorage.setItem("user", "Jay")
//sessionStorage.setItem("name","Jay")
// let username = localStorage.getItem("user")
// console.log(username);
// localStorage.removeItem("user")






// function vowels(alphabets) {
//     let vowels = ""
//     for (let i = 0; i < alphabets.length; i++) {
//         char = alphabets[i]
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//             vowels = vowels + char
//         }
//     }
//     return vowels
// }
// console.log(vowels("abcdefghijklmnopqrstuvwxyz"));



// let arr=["Jayanth","Chikammagaluru","jay@gmail.com","html","css","js"]
// let [name,city,email,...skills]=arr
// console.log(name,city,email,...skills);

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let combined_array=[...arr1,...arr2]
// console.log(combined_array);  


// let array=[7,8,9,[4,5,6,[1,2,3]]]
// let falt_array=array.flat(array)

// let falt_array2=falt_array.flat(falt_array)
// console.log(falt_array2);


// let a=[1,2,3]
// let b=[4,5,6]
// let combined=[...a,...b]
// let combined1=a.concat(b)
// console.log(combined1);



// function myfunc(...arguments){
//     return arguments
// }
// console.log( myfunc("jay","abhi"));

//Assignments

// function myfunc(...arguments){
//     return arguments
// }
// console.log( myfunc("jay","abhi"));



// let array=[7,8,9,[4,5,6,[1,2,3]]]
// console.log(array.flat(Infinity));

//  let falt_array=array.flat()
//  console.log(falt_array);
//  let falt_array2=falt_array.flat()
//  console.log(falt_array2);


//Objects methods

//target object
// let person1={
//     firsName:"Jay",
//     lastName:"cs",
//     age:50,
//     eyeColor:"blue"
// }
// //source object
// let person2={
//     firsName:"Anne",
//     lastName:"Smith"
// }

//Object.assign(target,source)
//console.log(Object.assign(person1,person2));

//Object.entries(object):Returns an array of key/value pair
//console.log(Object.entries(person1));

//Object.fromEntries():creates an object from a list of ket/value pairs
// let fruits=[
//     ["apples",300],
//     ["pears",400],
//     ["bananas",500]
// ]
// let myObj=Object.fromEntries(fruits)
// console.log(myObj);

//Object.values(object):return the single dimension array of object values
//console.log(Object.values(person1));

//Object.keys(object):returns an array with the key of an abject
// console.log(Object.keys(person1));

//Object.groupBy(object,callback):groups the elements of an object according to string values returned from a callback function
//does not change the original object
//create an array
// let fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:200},
//     {name:"oranges",quantity:400},
//     {name:"kiwi",quantity:500}
// ]

// //call back function to group elements
// function myCallback({quantity}){
// return quantity>200?"ok":"low";
// }

// //group by quantity
// let result=Object.groupBy(fruits,myCallback)
// console.log(result);

//Object,craete(object)
// let man=Object.create(person1)
// man.firsName="peter"
// console.log(man);

//template literals
// let s="jayanth \n cherranahalli"
// let s1=`jayanth
//                   cherranahalli`
// console.log(s);
// console.log(s1)

// let nestedArrat = [7, 8, 9, [4, 5, 6, [1, 2, 3]]]
// function flattenArray(array) {
//     let result = []
//     for (let item of array) {
//         if (Array.isArray(item)) {
//             result = result.concat(flattenArray(item))
//         }else{
//             result.push(item)
//         }
//     }
//     return result
// }

// let flattenedArray=flattenArray(nestedArrat)
// console.log(flattenedArray);


// let array=Array(1,2,3,4)
// console.log(array);
// let array1=Array(4).fill(5)
// console.log(array1);





















































