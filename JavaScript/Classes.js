/*class Vehicle {

    constructor(w, c) {
        this.wheel = w
        this.color = c
        this.airBag = 2
    }

    airBags(no_of_air_bags) {
        this.airBag = no_of_air_bags
    }

}
let car = new Vehicle(4, 'red')
let car1 = new Vehicle(6, "black")
console.log(car.wheel)
car.airBags(10)
console.log(car.airBag)
console.log(car1.airBag)

class Person {
    constructor(fname, lname, age, state) {
        this.fn = fname
        this.ln = lname
        this.ag = age
        this.st = state
    }

    details() {
        console.log(this.fn, this.ln, this.ag, this.st)
    }

    fullName() {
        console.log(this.fn + " " + this.ln)
    }
}

let sachin = new Person("sachin", "tendulkar", 50, 'Delhi')
sachin.fullName()
sachin.details()


class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ages() {
        return this.name + " " + this.age
    }
    //static methods
    static fun() {
        console.log("he is good!!")
    }
}

let myCar = new Car("Jayanth", 24);
console.log(myCar.ages())
Car.fun()


//Inheritance

class GrandFather {
    constructor() {
        console.log("Invoking a default constructor")
    }
}

class Father extends GrandFather {
    constructor() {
        super()
    }
}

//let GF_1 = new GrandFather();
let F_1 = new Father()
//console.log(F_1)*/


//////

/*class Vehicle1 {
    constructor(wheels, seats) {
        this.wheels = wheels
        this.seats = seats
    }

    details(){
        console.log(`the vehicle has ${this.wheels} wheels and ${this.seats} seats`)
    }

}

class Car extends Vehicle1 {
    constructor(w,s) {
        super(w,s)
    }
}

class Truck extends Vehicle1 {
    constructor(w,s) {
        super(w,s)
    }
}

let C1=new Car(4,6)
let T1=new Truck(6,3)
C1.details()
T1.details()*/


//Getter and Setter
/*class Car {
    constructor(brand) {
        this.brand = brand;
    }

    get cname() {
        return this.brand;
    }
    set cname(x) {
        this.brand = x
    }
}

let myCar=new Car("Ford")
//console.log(myCar.cname)
myCar.cname="Volvo"
console.log(myCar.cname) */








/*let num = 1
let name = 'jay'
console.log(num * name)

let array = [1, 2, 3, 4, 5, 6]
let new_array = array.slice(1, 3)
console.log(new_array)

function sqr(num) {
    return num * num
}
function cube(x, num) {
    return x(num) * num
}
console.log(cube(sqr, 2))

let x = function () {
    console.log('hi')
}
x()


let nums = [1, 2, 3]
let y = (el) => el > 1
console.log(y(nums))

function myFunc() {
    function myFunc1() {
        function myFunc2() {
            return 100;
        }
        return myFunc2;
    }
    return myFunc1;
}

console.log(myFunc()()())

function add(a, b) {
    return a + b;
}
console.log(add(2, 3))
console.log(add(2, 3))


let incre = 0;
function increments() {
    incre = incre + 1
    return incre
}
console.log(increments())
console.log(increments())
console.log(increments())

let a = "racecar"

function palindrame(str) {
    normalizedStr = str
    reveseStr = normalizedStr.split("").reverse().join('')
    return normalizedStr === reveseStr
}
console.log(palindrame(a))*/



/*let y = () => console.log("hello")
y()

//rest parameter
let rohitsData = ["Rohit", "ok@ok.com", "Batting", "Fielding", "Captency"]
let [name, email, ...skills] = rohitsData
console.log(name, email, skills)

//Function hoisting
console.log(greet()); // Output: "Hello, world!"

function greet() {
    return "Hello, world!";
}

//variable hoisting
// console.log(f)//undefined
// let f = 25;

//variable declared with let and const hoisting
// console.log(p)//Hoisted but not initialized, leading to a temporal dead zone.
// let p = 26;

//rest parameter
function numbers(...num) {
    return num.filter(el => el > 1)
}
console.log(numbers(1, 2, 2, 3))

//closuers
//:A closure is a feature in JavaScript where an inner function retains access to variables
// from its outer function even after the outer function has finished executing.
// This means the inner function "closes over" the variables of the outer function.

function outer() {
    let count = 0;
    function inner() {
        count = count + 1;
        return count;
    }
    return inner;
}
let counter=outer()
console.log(counter())
console.log(counter())
console.log(counter())*/

//Classes
/*class Car {
    constructor(name) {
        this.name = name
        //this.name==creates a new property on the instance with in the name
        //name==parameter value passed to the constructor
    }
}

class Person {
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    details(){
        console.log(this.fname +" "+this.lname+" "+this.age)
    }

    static name(){
        console.log(this.fname)
    }
}
let jayanth=new Person("Jayanth","CS",25)
jayanth.details()
//jayanth.name()*/

//Inheritance
/*class Car {
    constructor(brand) {
        this.brand = brand
    }
    present() {
        console.log("i have a " + this.brand)
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }
    show(){
        console.log(this.brand,this.model)
    }
}
let myCar=new Model("Ford",2019)
myCar.show()
myCar.present()*/


//Getter and Setter
/*class Car {
    constructor(brand) {
        this.brand = brand
    }
    get cname() {
        return this.brand;
    }
    set cname(x) {
        this.brand = x
    }
}

let myCar = new Car("Ford")
console.log(myCar.cname)
myCar.brand = "volvo"
console.log(myCar.cname)*/


//JSON=JavaScript Object Notation

/*let text = `{"name":"Jayanth","age":25}`
let obj = JSON.parse(text)
console.log(obj)
document.getElementById("para").innerHTML = obj.name + "," + obj.age;

let string=JSON.stringify(text)
console.log(string)

//storing data
let myObj={name:"John",age:31}
let myJSON=JSON.stringify(myObj)
localStorage.setItem("testJSON",myJSON)

//RETRIVING DATA
let text1=localStorage.getItem("testJSON")
let obj1=JSON.parse(text1)
document.getElementById("demo").innerHTML=obj1.name*/

//DOM

//document.getElementById("demo").id="new_demo"
//document.getElementById("demo").setAttribute("class","newClass")


/*function change(){
    document.getElementById("demo1").innerHTML=Date()
}
document.getElementById("mybtn").onclick=change;

function uppercase(){
  let x= document.getElementById("inp");
x.value=x.value.toUpperCase();
}*/

//Promises
/*function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello")
            resolve;
        }, 4000)
    });
}
fetchData().then((data) => console.log(data))
    .catch((error) => console.log(error))


let my_result = new Promise((resolve, reject) => {
    let fe_skills = ["html", "css", "js"]
    if (fe = fe_skills.includes("react")) {
        resolve(`fe_skills has ${fe}`)
    } else {
        reject(`fe_skills doesn't have ${fe} `)
    }
});

my_result.then((data) => console.log(data))
    .catch((error) => console.log(error))*/


var x;
console.log(x)
var x = 20
console.log(x)

let number = [1, 4, 1, 2, 3, 5, 4, 2, 1, 3]
function count(array) {
    countEle = {}
    for (let i = 0; i < array.length; i++) {

    }
    array.forEach(element => {
        if (countEle[element]) {
            countEle[element]++
        } else {
            countEle[element] = 1
        }
    });
    return countEle
}
console.log(count(number))


let string = "jayanthFullStack"
function camelCaseToSnakeCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
}
console.log(camelCaseToSnakeCase(string))


let array = [1, 4, 5, 7, 8, 9, 2, 3]

function secondMin(array) {
    let min = Infinity;
    let min2 = Infinity;
    for (let numbers of array) {
        if (numbers < min) {
            min2 = min
            min = numbers
        } else if (numbers < min2 && numbers != min) {
            min2 = numbers;
        }
    }
    return min2
}
console.log(secondMin(array))


























