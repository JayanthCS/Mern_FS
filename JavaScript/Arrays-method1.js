/*let x1 = [1, 2, 3, 4, 5]
sqr = [];
let y = x1.forEach((el) => sqr.unshift(el ** 2))

console.log(x1)


//map
let x = [1, 2, 4, 5]
let y1 = x.map((el) => el**2)
console.log(y1)


let names=["jay",'marula','anni','karthi','puni']
let y2=names.map((el)=>el.toUpperCase())
console.log(y2)

//filter
let voter_list=[2,3,4,5,17,18,29,33,86]
let y3=voter_list.filter((el)=>el>=18)
console.log(y3) */

//reduce
let nums=[1,2,3,5,9,8]//28
let sum=nums.reduce((init,el)=> init+el,0)
console.log(sum)    

//every:every elemets should satisfy the condition then it will give true
let num=[1,3,4,5]
let boolean_array=[false,false,false,false]
console.log(num.every(el=>el<=5))

//some:Any one of the element should satisfy the condition then it will give true
let boolean_array1=[false,false,false,false]
console.log(boolean_array1.some(el=>el==true))





