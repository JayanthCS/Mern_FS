let btn1 = document.getElementById('btn1');
btn1.onclick = () => {
    console.log("You just clicked me!!")
    let a = 25
    a++
    console.log(a)
}

let para = document.getElementById("para");
let myfunc = () => { console.log("clicked para!!") }
para.addEventListener("click", myfunc)

let modeBtn = document.getElementById("mode")
let currMode = "Light"
modeBtn.addEventListener('click', () => {
    if (currMode === "Light") {
        currMode = "Dark"
        document.querySelector("body").style.backgroundColor="black"
    } else {
        currMode = "Light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currMode)
})
