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








let num = 1
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
console.log(add(2,3))
console.log(add(2,3))


let incre=0;
function increments(){
     incre=incre+1
     return incre
}
console.log(increments())
console.log(increments())
console.log(increments())

let a="racecar"

function palindrame(str){
   normalizedStr=str
   reveseStr=normalizedStr.split("").reverse().join('')
   return normalizedStr===reveseStr
}
console.log(palindrame(a))
















