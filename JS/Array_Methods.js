//HOFs
//Higher oreder functions:
//1,Functio which take another function has a parameter
//2,Function which return other function

//1,Functio which take another function has a parameter
function sqr1(number) {
    return number * number
}

function sqr2(number) {
    return number ** 2
}

function cube(x,num){
     return x(num)*num
}

let out=cube(sqr1,10)
console.log(out)

//2,Function which return other function

function main(){
    function sub(){
        return "Hi i am sub function"
}
     console.log("Hi i am main function")
     return sub
}

console.log(main())


function delay(seconds){
    let cal_delay=1000000000*seconds
    for(let x=0 ; x<cal_delay;x++){
    }    
}

function perform_something(x,delay_sec){
    console.log("I am performing something")
    x(delay_sec)
    console.log("Yes i did It!!!!!")
}

perform_something(delay,5)


//Annanymous function

// let x= function(){
//     console.log("Hello this is Jayanth")
// }
// console.log(x())//where x() is expression function 

function perform_something1(){
    console.log("I am performing something")
}

setTimeout(perform_something1,5000)
//setInterval(perform_something1,5000)

//forEach 

let x=[1,43,54,566,34,23,56,52]

x.forEach((el)=>console.log(el))
x.forEach(function(el){console.log(el)})


