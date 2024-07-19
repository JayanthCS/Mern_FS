//    JavaScript-Object

let Student={
    firstName:'Virat',
    secondName:'Kohli',
    age:35,
    height:5.8,
    skills:['java','html','css','javaScript','MySQL'],
    details:function(){
        return `${this.firstName} ${this.secondName} is ${this.age} years old,and he is very good at ${this.skills} `
    }

}

Student.conuntry='India' //Upending the key and value

console.log(Student.details())
console.log(Student.firstName.length)
console.log(Object.values(Student))//to get the vales in array
console.log(Object.entries(Student))//to get the vales and key
console.log(Student.hasOwnProperty('conuntry'))//the key is present or not true or false