//setTimeout(()=>{console.log("hello")}, 3000)

/*let my_result = new Promise((resolve, reject) => {
    let fe_skills = ["html", "css", "js"]
    if (fe = fe_skills.includes("css")) {
        resolve(`fe_skills has ${fe}`)
    } else {
        reject(`fe_skills doesn't have ${fe} `)
    }
});

my_result.then((data) => console.log(data))
    .catch((error) => console.log(error))*/



/*let api_url = "https://fakestoreapi.com/products/categories"

fetch(api_url).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))*/


//promise.all()
/*let p1 = Promise.reject(121)//resolve(121)
let p2 = 21
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Good Morning')
})
let p4 = 25

Promise.race([p1, p4, p3, p2]).then((data) => console.log(data))//['Good Morning',21,121]
    .catch((error) => console.log(error))//121


    let array = [[1, 2], [3, 4], [5, 6]]
    //console.log(array.flat())
    function flattenArray(array) {
        return array.flat();
    }
    console.log(flattenArray(array))*/

//promises
/*let promise = new Promise((resolve, reject) => {
    let skills = ["css", 'js', 'html']
    if (fe = skills.includes("jss")) {
        resolve(`the given skill is present`)
    } else {
        reject(`the given skill is not present`)
    }
})
 
promise.then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })
 
function main(a) {
    function func1(b) {
        let sum = a + b
        function func2(c) {
            return sum = a + b + c   
        }
        return func2;
    }
    return func1;
}
console.log(main(2)(2)(3))*/

//promises
/*function getdataa(getData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", getData)
            resolve("Succsses")
        }, 4000)
 
    })
}
// fun(1).then((data) => { console.log(data) })
//fun(2).then((data) => { console.log(data) })
 
//Promises Chaining
getdataa(1).then((res) => {
    return getdataa(2);
}).then((res) => {
    return getdataa(3);
}).then((res) => {
    console.log(res)
})*/

//Async and Await

/*function app() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Print me");
            resolve(200)
        }, 3000);
    })
}
async function myfun() {
    await app()
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
}*/

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("Succsess")
//         }, 3000)
//     })
// }

// getData(1).then((res) => { return getData(2) })


//Callback Hell
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNextData) {
//             getNextData()
//         }
//     }, 3000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             console.log("finished the exicution")
//         })
//     })
// })


//promise chaining
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("succsess")
//         }, 3000)
//     })
// }

// getData(1).then((res) => { return getData(2) }).then((res) => { return getData(3) }).then((res) => {
//     console.log(res);
// })

//Async and Await
// function getData(dataId) {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("succsses")
//     }, 3000)
// })
// }

// async function getting() {
//     await getData(1)
//     await getData(2).then((res)=>{console.log(res);
//     })
// }
// getting()



















