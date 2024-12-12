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


// let http = require("http")
// let fs = require("fs")

// http.createServer((request, response) => {
//     fs.readFile("home.html", (error, data) => {
//         response.write(data)
//         response.end()
//     }) 
// }).listen(3000)


//ReadFile
const { error } = require("console")
let fs = require("fs")
// fs.readFile("file.txt",  (error,data) => {
//     if (error) throw error;
//     console.log("reading the file",data.toString())
// })

//write File

// fs.writeFile("file.txt", "new content adding to existing file", (error) => {
//     if (error) throw error;
//     console.log("writing content to the existing file")
// })

//Appendng the content to files
// fs.appendFile("file.txt", "  appending the new content to the existing file", (error) => {
//     if (error) throw error;
//     console.log("appending the new content to the existing file")
// })


// //renamin and moving
// fs.rename("renamed_file.txt", "./New folder/new.txt", (error) => {
//     if (error) throw error;
//     console.log("renaming the file")
// })
// const fs = require('fs');

// const oldPath = 'C:\\Users\\HP\\OneDrive\\Desktop\\Mern_FS\\Mern_FS\\Mern_FS\\renamed_file.txt';
// const newPath = 'C:\\Users\\HP\\OneDrive\\Desktop\\Mern_FS\\Mern_FS\\JS\\new.txt';

// fs.mkdir('C:\\Users\\HP\\OneDrive\\Desktop\\Mern_FS\\Mern_FS\\JS', { recursive: true }, (err) => {
//   if (err) throw err;

//   fs.rename(oldPath, newPath, (err) => {
//     if (err) {
//       console.error('Error renaming file:', err);
//     } else {
//       console.log('File renamed successfully');
//     }
//   });
// });


// fs.unlink("./New folder/new.txt", (error) => {
//     if (error) throw error
// })

// fs.rmdir('./New folder', (err) => {
//     if (err) throw err;
// })

















