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
let p1 = Promise.reject(121)//resolve(121)
let p2 = 21
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Good Morning')
})
let p4 = 25

Promise.race([p1, p4, p3, p2]).then((data) => console.log(data))//['Good Morning',21,121]
    .catch((error) => console.log(error))//121












