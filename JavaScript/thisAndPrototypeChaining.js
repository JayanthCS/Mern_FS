
//console.log(this.c)
c = 10;
function some() {
    console.log("inside the function", this.c)//output:10
    c = "A"
}
some()
console.log("Globally==>", this.c)//output:A

/*this Keyword
1,If you use it Globally
    --with var keyword=then it refers to global object,if it is not in strict mode ,else undefined
    --with let keyword=undefined
2,Inside a function it refers to global object
3,this in events refers to elements itself
4,In object this refers to object itself*/


//Prototype
function Student(name) {
    this.fname = name
}

Student.prototype.someThing = function () {
    console.log(this.fname)
}


s1 = new Student("Jayanth")
s2 = new Student("Raju")

s2.someThing()




















