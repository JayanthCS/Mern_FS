//Functions

/*let x=function add(a,b){
    return a+b
}
//add(2,3)
//console.log(x(2,3))
let z=x(2,3)
console.log(z)

function myFunction(a, b) {
    return arguments.length;
  }
  console.log(myFunction(2,3))*/

(function () {
    let x = "Hello!!";
    console.log(x) // I will invoke myself
})();

function add(a, b = 10) {
    return a + b
}
console.log(add(5))


let num = [1, 2, 3, 4, 5, 6, 677, 8, 34]
function sumAll(args) {
    let sum = 0
    for (let arg of args) {
        sum = sum + arg
    }
    return sum;
}
console.log(sumAll(num))

let num1 = [688, 2, 3, 4, 5, 6, 677, 8, 34]
function max(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
console.log(max(num1))

let num2 = [688, 2, 3, 4, 5, 6, 677, 8, 34]
function addAll(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}
console.log(addAll(num2))

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Marry",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1))

//let max1=[1,2,3,4]
console.log(Math.max.apply(null, [45],[1,2,3]))


//
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.lastName)











