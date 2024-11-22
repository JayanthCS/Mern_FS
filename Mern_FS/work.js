// let fs = require("fs")
// let http = require("http")

// http.createServer((request, response) => {
//     fs.readFile("home.html", (error, data) => {
//         response.write(data)
//         response.end()
//     })
// }).listen(2000)

// fs.open("new_text.txt", "w", (error) => {
//      if (error) throw error 
//      console.log("created new file");
//     })
// fs.unlink("new_file.text", (error) => {
//     if (error) throw error 
//     console.log("deleted new file");
//    })
// fs.writeFile("new_text.txt", "hello world!!!!", (error) => {
//     if (error) throw error
//     console.log("created new file");
// })    

// fs.appendFile("new_text.txt", "this is jayanth", (error) => {
//     if (error) throw error
//     console.log("appended the file");
// })

// fs.rename("new_text.txt", "new_text1.txt", (error) => {
//     if (error) throw error 
//     console.log("renaming the old file");
//    })



//modules

// let http = require("http")

// http.createServer((request, response) => {

//      let buttons=`
//          <a href="/">Home</a><br>
//          <a href="/contact">Contact</a><br>
//          <a href="/about">About</a><br>
//          <a href="/some">Some</a><br>
//      `


//     if (request.url == "/contact") {
//         response.write("<h1 style='text-align:center;  color:red;'>Contact Page</h1>"+buttons)
//     }
//     else if (request.url == "/about") {
//         response.write("<h1 style='text-align:center;  color:red;'>About Page</h1>"+buttons)
//     }
//     else if (request.url == "/some") {
//         response.write("<h1 style='text-align:center;  color:red;'>Some Page</h1>"+buttons)
//     } else {
//         response.write("<h1 style='text-align:center;  color:red;'>Hello world</h1>"+buttons)
//     }
//     response.end();
// }).listen(3000)



// const { error } = require("console")
// let file_System = require("fs")
// let http = require("http")

// http.createServer((request, response) => {
//     file_System.readFile("home.html", (error, data) => {
//         response.write(data)
//         response.end()
//     })
// }).listen(3000)


// file_System.open("file.txt", "w", (error) => {
//     if (error) throw error
// })

// file_System.writeFile("file.txt", "this is text file", (error) => {
//     if (error) throw error
// })

// file_System.rename("file1.txt","./JavaScript/file1.txt",(error)=>{
//     if (error) throw error
// })

// file_System.appendFile("file1.txt","what a good day this is",(error)=>{
//     if (error) throw error
// })

// http.createServer((request, response) => {

//     if (request.url == "/home") {
//         file_System.readFile("home.html", (error, data) => {
//             response.write(data)
//             response.end()
//         })
//     } else {
//         file_System.readFile("forms.html", (error, data) => {
//             response.write(data)
//             response.end()
//         })
//     }
// }).listen(3000)




// const EventEmitter = require('node:events');

// const eventEmitter = new EventEmitter();


// eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
//   });
  
//   eventEmitter.emit('start', 23);
  





