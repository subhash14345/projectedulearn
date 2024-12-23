//variables
//var a=10
//a=555
//let m=40
//const x=100

//var a=400
//m=123

function variables(){
    var aa=10
    let mm=40
    const xx=100

    console.log(aa);
    console.log(mm);
    console.log(xx);
    console.log("function was success")
}
variables();
//console.log(aa); error
    //console.log(mm);  error
    //console.log(xx);  error



//strings and string methods
let firstname="john";
let lastname="Doe";
let languages ="HTML,CSS,javascript";
console.log("the first name is:",firstname);
console.log(`the first name is: ${firstname}`);
console.log("the first name is:"+firstname);
console.log(languages.substr(1,6));
console.log(languages.substring(1,7))
console.log(languages.split("S"))
console.log(languages.replace("HTML","HTML5"))


//Arrays
let jsframeworks=["Angular","React","vue"]
let databases=new Array("DB2","SQL","MONGODB")
//accessing
console.log(jsframeworks)
console.log(databases[0]="oracle")
console.log(databases)
console.log(typeof databases)
//array methods
console.log(jsframeworks.length)

//objects
let employee={
    id: 100,
    firstname:"john",
    age:30,
    address: {
        city:"tuni",
        state: "andhra"
    },
    skills:["HTML","CSS","JAVASCRIPT"]
};
console.log(employee)
//accessing object properties
console.log(employee.address)
console.log(employee.address.city)
console.log(employee.address.state)


//ES6 Destructuring

//array of objects

let employee1=[
    {
        id:10,
        firstname: "john",
        age:20
    },
    {
        id:20,
        firstname: "david",
        age:30
    },
    {
        id:30,
        firstname: "raju",
        age:40
    }
];
console.log(employee1[0].firstname);
//JSON 
const employee1json = JSON.stringify(employee1);
console.log(employee1json)

