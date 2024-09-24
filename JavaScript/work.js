

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













