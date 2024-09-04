/*let Student = {
    firstName: 'jay',
    lastName: 'cs',
    age: 25,
    height: 5.8,
    skills: ["HTML", "CSS", "JavaScript"],
    details: function () {
        return `${this.firstName},${this.lastName} and his age is ${this.age},he has skills ${this.skills}`
    }
}

Student1 = {
    firstName: 'Raj',
    lastName: 'Kumar'
}

console.log(Student.details.call(Student1))


function toDo() {
   var x = 10
    console.log(x)
}
toDo()
console.log(x)*/

function studentGrade(name, marks) {
    if (marks >= 85) {
        console.log(`the student ${name} has got distinction`)
    } else if (marks >= 60) {
        console.log(`the student ${name} has got First class`)
    } else if (marks >= 35) {
        console.log(`the student ${name} has got just pass`)
    }
    else {
        console.log(`the student ${name} has failed`)
    }
}

studentGrade('Jayanth', 34)



//
function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(4))


//
function reverseStr(str) {

    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i]
    }
    return reversedStr
}
console.log(reverseStr('Hello'))










