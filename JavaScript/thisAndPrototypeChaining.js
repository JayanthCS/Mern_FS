
//console.log(this.c)
c = 10;
function some() {
    console.log("inside the function", this.c)//output:10
    c = "A"
}
some()
console.log("Globally==>", this.c)//output:A

/*this Keyword
1,If you use it Globally
    --with var keyword=then it refers to global object,if it is not in strict mode ,else undefined
    --with let keyword=undefined
2,Inside a function it refers to global object
3,this in events refers to elements itself
4,In object this refers to object itself*/


//Prototype
/*function Student(name) {
    this.fname = name
}

Student.prototype.someThing = function () {
    console.log(this.fname)
}


s1 = new Student("Jayanth")
s2 = new Student("Raju")

s2.someThing()

//
let Person = {
    age: 25,
    fname: "Jayanth",
    lname: "CS",
    fullName: function () {
        return `Full name is  ${this.fname} ${this.lname}`
    }
}

let HisName = {

}

HisName.__proto__ = Person
console.log(HisName.fullName())*/

//ProtoType Chaining
/*let Student = function (name, birthYear) {
    this.name = name
    this.birthYear = birthYear
}

Student.prototype.age = function () {
    return (new Date().getFullYear() - this.birthYear)
}

let jayanth = new Student("Jayanth", 1999)
console.log(jayanth.age())*/

//Prototype for classes
class Student {
    constructor(name, birthYear) {
        this.name = name
        this.birthYear = birthYear
    }

    age() {
        return (new Date().getFullYear() - this.birthYear)
    }
}

class Person extends Student {
   
}
let jayanth = new Person("Jayanth", 1999)
console.log(jayanth.birthYear)
console.log(jayanth.__proto__ == Student.prototype)





















