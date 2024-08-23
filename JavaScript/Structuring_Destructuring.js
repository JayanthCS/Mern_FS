//Structuring
name="Jay"
emailid="jay@gmail.com"
address="Cheeranahalli"

let x=[name,emailid,address]
//console.log(x)


//Destructuring
let employee=[['jay','Jay@ok.com','Banglore'],['Abi','abi@ok.com','Banglore']]
let [Jay,Abi]=employee
//console.log(Abi)

for(let [name,emailid,address] of employee){
//console.log(name,"====",emailid)
}

let RohitsData=["Rohit",'rohi@gmail.com','Mumbai','Batting','Captaincy','Fielding']
let [Name,Emailid,Address,...skills]=RohitsData
//console.log(Name,Emailid,Address,skills)


//Object Destructuring

let EmployeeData1=
    {
        Name1:"Sachin",
        Email:'Ok@ok.com',
        Adress:'Banglore',
        Skills1:['Batting','Captaincy','Fielding']
    }
let {Name1,Email,Adress,Skills1}=EmployeeData1
//console.log(Name1,Email,Adress,Skills1)
//console.log(EmployeeData1)
console.log(Adress)

////////
let EmployeeData=[
{
    Name1:"Sachin",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
},
{
    Name1:"Virat",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
},{
    Name1:"Rohit",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
}
,{
    Name1:"Gill",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
}
,{
    Name1:"Rahul",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
}
]

let copiedSachin={...EmployeeData[0],age:24}
//console.log(copiedSachin)



///////////
let data={
    Name1:"Rahul",
    Email:'Ok@ok.com',
    Adress:'Banglore',
    Skills1:['Batting','Captaincy','Fielding']
}
let copieddata={...data,age:23}
//console.log(copieddata)
let Aliasedata=data
data.height=5.6
data['weight']=65
//console.log(Aliasedata)
//console.log(copieddata)


//Swap variables in destructing

let jaan="january";
let faaab="feb";

[jaan,faaab]=[faaab,jaan];
console.log("jaan:",jaan)
console.log("faaab:",faaab)
