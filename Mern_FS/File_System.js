// let http = require('http')
// let file_system = require("fs")

// http.createServer((request, response) => {
//     file_system.readFile('', (error, data) => {
//         response.write(data)
//         response.end()
//     })
// }).listen(3000)

let http = require('http')
let file_system = require("fs")
const { error } = require('console')

// 
// let server=http.createServer((request,response)=>{

//     if(request.url=="/home"){
//     file_system.readFile("home.html",(error,data)=>{
//         response.write(data)
//         response.end
//     })
//     }else{  
//     file_system.readFile("forms.html",(error,data)=>{
//         response.write(data)
//         response.end
//     })
//        }

// })
// server.listen(3000,()=>{console.log("listening to port 3000");
// })


// file_system.writeFile("new_file.text", "this is good day!!", (error) => {
//     if (error) throw error;
//     console.log("created new file");

// })

// file_system.open("new_file1.text","w",  (error) => {
//     if (error) throw error;
//     console.log("created new file");

// })

// file_system.unlink("new_file1.text",(error)=>{
//     if(error) throw error
//     console.log("deleted the file");
    
// })






