
//Sets:It is a single collection of values that are unique.
let names = ["Jayanth", "Virat Kohli", "Ravindra Jadeja", "Suresh Raina", "Jayanth"]
// let cricketers=new Set(names)
// console.log(cricketers)



//collecting the data of unique elements or removing the duplicates
let removeDuplicateNames = [];
names.forEach(el => {
    if (removeDuplicateNames.indexOf(el) == -1) {
        removeDuplicateNames.push(el)
    }
}
)
console.log(removeDuplicateNames)


//union in sets
let a = [1, 4, 3, 6, 7]
let b = [3, 6, 9, 4, 3, 76]
//let a_b=a.concat(b)
//let a_b=(a+b).split(',')
let a_b = [...a, ...b]

let AB = new Set(a_b)
console.log(a_b)

//Intersection in sets
let a1 = [1, 4, 3, 6, 7]
let b1 = [3, 6, 9, 4, 3, 76]

let A = new Set(a1)
let B = new Set(b1)
let c = a.filter(el => B.has(el))
let C = new Set(c)
console.log(C)

//Differnce in Sets
let c1 = a.filter(el => !B.has(el))
let C1 = new Set(c1)
console.log(C1)

//Maps

let states = [["Assam", "Dispur"], ["Arunachal pradesh", "Ithanagar"], ["Bihar", "Patna"], ["Karnataka", "Banglore"]]
let mapOfStates=new Map(states)
console.log(mapOfStates)
console.log(mapOfStates.get('Karnataka'))
