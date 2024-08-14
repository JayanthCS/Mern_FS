let Student={
    firstName:'Subman',
    lastName:'Gill',
    age:22,
    height:5.9,
    skills:['html','css','javaScript','react'],
    details:function(){
        return`${this.firstName},${this.lastName},is ${this.age} years old, and he is very good in ${this.skills}`
    }

}
Student['Country']='India'
Student.State='Karnataka'

console.log(Student.details())
console.log(Student)
console.log(Object.keys(Student))
console.log(Object.values(Student))
console.log(Object.entries(Student))
console.log(Student.hasOwnProperty('State'))