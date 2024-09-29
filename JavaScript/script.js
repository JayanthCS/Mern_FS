// let myId=document.getElementById("myId")
// console.log(myId)
// let select=document.querySelector("p")
// console.log(select)
// let set=select.setAttribute("myClass","123")
// console.log(set)



/*let div=document.querySelector("div")
//console.log(div)
//div.style.backgroundColor="red"
// let id=div.getAttribute("id")
// console.log(id)
// div.style.backgroundColor="blue"

let el=document.createElement("button")
el.innerText="Click me!!"
el.style.backgroundColor="green"
el.style.color="white"
div.after(el)

let para=document.querySelector("p")
para.remove()*/

/*document.getElementById("demo").onclick = function () {
    console.log("hello world!")
}
console.log(demo)
demo.innerHTML = "this is demo page"
let get = document.getElementsByTagName("div")
console.log(get)
let qury = document.querySelector("#demo")
console.log(qury)
let id = qury.getAttribute("id")
console.log(id)
let para = document.querySelector(".para3")
para.style.color = "blue"*/


/*let id=document.getElementById("myId")
let p=id.getElementsByTagName("p")*/

/*let x=document.querySelectorAll(".myClass")
console.log(x)*/

/*let x = document.forms["frm1"]
let text = ""
for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;*/

/*document.getElementById("para").innerHTML = "this is new Para"
let image = document.getElementById("myImage").src = "https://static.cricbuzz.com/a/img/v1/1080x608/i1/c509868/virat-kohli-and-rohit-sharma-signed-off-in-style.jpg"*/

//document.getElementById("demo").innerHTML = "Date : " + Date();
//document.write(Date())

/*function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}*/

/*function myFunctionToChangeColor() { return document.getElementById("myId").style.color = "red"
  
 }*/


/*function changeText() {
    return document.getElementById("myId").innerHTML = "oops!"
}

function dareClickChange(id) {
    id.innerHTML = "changed text"
}

function
    timeShow() {
    document.getElementById("demo").innerHTML = Date()
}

function upperCase() {
    let x= document.getElementById("fname");
    x.value=x.value.toUpperCase();
  
}*/


/*function over(){
    document.getElementById("para").innerHTML="Thank you"
}

function out(){
    document.getElementById("para").innerHTML="mouse on me please!"
}*/

/*function on(){
        document.getElementById("para").innerHTML=Math.random()
    
}

document.getElementById("myDiv").addEventListener("mousemove", on)

function removeHandler() {
    document.getElementById("myDiv").removeEventListener("mousemove", on)
}*/

// let doc=document.querySelector("#myDiv").innerHTML;
// let doc2=document.querySelector("p").childNodes[0].nodeValue;
// let doc3=document.querySelector("#id2").lastChild.nodeValue;

// let para=document.createElement("h1")
// para.innerHTML="This is new Heading"
// para.style.color="blue"
// let element=document.getElementById("myDiv")
// let child=document.getElementById("id1")
// element.insertBefore(para,child)
// //para.remove()


let div=document.getElementById("div1")
div.style.color="red"
let para=document.getElementById("p1").style.color="blue"
let new_para=document.createElement("p")
let new_para_text=document.createTextNode("Hello i am new para")
new_para.appendChild(new_para_text)
//let div1=document.getElementById("div1")
div.appendChild(new_para)



let btn=document.getElementById("myBtn").addEventListener("click",()=>{
    document.getElementById("myBtn").style.backgroundColor="blue"
    document.getElementById("myBtn").style.color="yellow"
})













