function timeNow() {
    var utc = new Date().toJSON();
    console.log(utc)
}


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

studentGrade('Jayanth', 90)
studentGrade('Sujay', 70)
studentGrade('JSujan', 35)
studentGrade('Sujan', 30)


/*function summation() {
    console.log(arguments)
}
summation(1, 2, 3, 4, 5, 6, 7, 23, 45, 67, 45)
summation(1, 3, 4, 6, 8, 10)
summation(1, 2)*/

//for(of)
function summation() {
    console.log(arguments)

    let sum = 0;
    for (let v of arguments) {
        sum = sum + v;
    }
    console.log("sum is:", sum)
}
summation(1, 2)


//Annonimus function

let x = function () {
    console.log("Hello World!!")
}
x()
console.log(x())

//Self Invoking Function

// (function(){
//     console.log("Hello!!")
// })()

//Arrow Function

let cube = (x) => {return x * x * x}
console.log(cube(3 ))