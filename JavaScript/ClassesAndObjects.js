//Objects:It is an entity having states and behaviours(Properties(Variables) and methods(Functions))

let Person = {
    name: "Jayanth",
    work: function () {
        return "engineer"
    }
}

let Jayanth = {

}

let wo = Person.work.call(Jayanth)
console.log(wo)
//let jay = Jayanth.call(Person)
//Jayanth.__proto__ = Person
//console.log(jay.myFuc())
//console.log(Jayanth.name)


//classes:Program code template for creating an object
class Person1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sleep() {
        console.log("sleeping")
    }

    eat() {
        console.log("eat")
    }

    static run(){
        console.log("running")
    }
}

class Jayanth1 extends Person1{
    constructor(name,age) {
        super(name,age)
    }

}

let jay=new Jayanth1("Jayanth",25)
jay.eat()
jay.sleep()
console.log(jay)
//jay.run()//this method is not inherited beacuse it is a static method





