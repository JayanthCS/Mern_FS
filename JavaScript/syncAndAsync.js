//Synchronoues
/*console.log("One")
console.log("Two")
console.log("Three")*/

//Asynchronoues
/*console.log("One")
console.log("Two")
function hello(){
    console.log("hello")
}
setTimeout(hello,3000)
console.log("Three")
console.log("Four")*/

//CallBacks
/*function sum(a,b){
console.log(a+b)
}

function calculate(a,b,callbacks){
callbacks(a,b)
}
calculate(1,2,sum)*/

//callback hell
/*function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData()
        }

    }, 2000)
}
getData(2, () => { getData(3,()=>{getData(4)}) })*/


//callbacks
/*let hello = () => {
    console.log("hello")
}
setTimeout(hello, 3000)*/

//callBack hell
/*function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}
console.log("Getting data1")
getData(1, () => {
    console.log("Getting data2")
    getData(2,()=>{
        console.log("Getting data3")
        getData(3)
    })
})*/

//Promises
/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("sucsses")
            if (getNextData) {
                getNextData()
            }
        }, 7000)

    })
}
let result = getData(123)*/

//promises .then() and .catch()

/*let promise = new Promise((resolve, reject) => {
    let skills = ["javascript", "css", "HTML"]
    if (skills.includes("nodeJS")) {
        resolve("the written skill is present")
    } else {
        reject("the written skill is not present")
    }
})

promise.then((res) => { console.log(res) })
    .catch((error) => { console.log(error) })*/


//Callback hell ==>promises
/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("sucess")
        }, 3000)
    })
}
//promise chaining
getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res)
})*/

//Async-Await
async function hello() {
    console.log("hello")
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Details");
            resolve(200);
        }, 6000);
    });
}

async function getWeatherData() {
    await api()
    await api()
}










