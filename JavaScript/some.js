// let maths = require('./Mathmatics')
// console.log(maths.pi)
// console.log(maths.add(2,3))


//
/*let http = require('http')
http.createServer((request, response) => {
    response.write('Hello world')
    response.end()
}).listen(2000)*/

//
/*let http = require('http')
http.createServer((request, response) => {
    button_list=`
    <br>
    <a href='/'>Home page</a><br>
    <a href='/about'>About page</a><br>
    <a href='/contact'>Conatcat page</a><br>
    <a href='/some'>Some page</a><br>
    `

    if (request.url == "/contact") {
        response.write("<h1>Conatct page</h1>"+button_list)
    }
    else if (request.url == "/about") {
        response.write("<h1>About page</h1>"+button_list)
    }
    else if (request.url == "/some") {
        response.write("<h1>Some page</h1>"+button_list)
    }else{
        response.write("<h1>Home page</h1>"+button_list)
    }
    response.end()
}).listen(4000)*/

/*let obj = {
    fname: 'jayanth',
    lname: 'cs',
    age: 25,
    myFunc: () => {
        console.log("hello")
    }
}
for (let index in obj) {
    console.log(index)
}*/

let http = require('http')
let file_system = require("fs")

http.createServer((request, response) => {
    file_system.readFile('intro.html', (error, data) => {
        response.write(data)
        response.end()
    })
}).listen(3000)


