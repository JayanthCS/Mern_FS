function sqr1(number) {
    return number * number
}
function sqr2(number) {
    return number * 2
}

function cube(x, num) {
    return x(num) * num
}

let out = cube(sqr1, 10)
console.log(out)


//

function main() {
    function sub() {
        return "Hi i am sub function!!"
    }
    console.log("Hi i am main function!!")
    return sub
}

console.log(main()())


//

function somthig() {
    return "I am a callback function!!"
}

function main1(x) {
    return x()
}
console.log(main1(somthig))



//delay

function delay(seconds) {
    let cal_delay = 1000000000 * seconds
    for (let x = 0; x < cal_delay; x++) {


    }
}


function performing_Something(x, delay_sec) {
    console.log("Iam performing something")
    x(delay_sec)

    console.log("Yes i did it")
}

performing_Something(delay, 1)


// Time setting

function setting() {
    console.log("Setting time intervals")
}

//setTimeout(setting,5000)
//setInterval(setting,2000)

//forEach 

let x = [1, 4, 6, 7, 56, 45, 23]

x.forEach((el) => { console.log(el) })

//x.forEach(function (el, index, arr) { console.log(el, index, arr) })
// sqr=[]
// sqr.forEach((el)=>{sqr.push(el**2)})

// console.log(console.log())



