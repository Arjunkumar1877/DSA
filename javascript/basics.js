//---------------------------------- DATA TYPES =---------------------------------------------------------------


// String
let name = "Arjun";


// Number 
let age = 24;
let temperatur = 36.6;


// Boolean
let isStudent = true;


// Undefined 
let n;
// console.log(n);


// Null
let y = null;



// Symbol
let sym = Symbol("unique");



// BigInt
let bigInt = 1234567890123456789012345678901234567890n;



// Object 
let person = {
    name: "Arjun",
    age: 24,
    isStudent: true
}



// Array 
let colors = ["red", "green", "blue"];











//----------------------------------VARIABLES AND SCOPING =---------------------------------------------------------------

// var function-scoped or global scoped
// var x = 30;
function exampleFunctionScoped(){
    if(true){
        var x = 10;
    }

    console.log("var function scopped inside the function" + x) // gives 10
}
// console.log("var function scopped outside function " + x); // gives undefined
// exampleFunctionScoped();





// let and const block scoped
function exampleBlockScoped(){
    if(true){
        let y = 20;
        const z = 30;
    }
    console.log(y) // gives null
}

exampleBlockScoped()








//---------------------------------- OPERATORS  =---------------------------------------------------------------------------------

// Arithemetic Operators
let a = 5 + 3; // 8
let b = 10 -2; // 8
let c = 4 * 2; // 8
let d = 16/2;  // 8
let e = 17 % 3; // 2 remainder





// Logical Operators 
let f = true && false; // false
let g = true || false; // true
let h = !true; // false





// Comparison Operators 
let i = 5 == "5"; // true (loose equality)
let j = 5 === "5"; // false (strict equality)
let k = 5 != 6; // true
let l = 5 !== "5";





// Assignment Operators
let m = 10;
m += 5;  // like this we can use -=, *=, /= , =








//---------------------------------- CONTROL FLOW  =---------------------------------------------------------------------------------

// If/Else
let aged = 18;
if(aged >= 18){
  console.log("You are an adult.");
}else{
    console.log("You are a minor");
}







// Switch
let fruit = "Apple";

switch(fruit){
    case "Apple":
        console.log("Apple selected");
        break;
    case "Banana":
        console.log("Banana selected");
        break;
    default: 
        console.log("No fruits selected");
}










//---------------------------------- LOOPS =---------------------------------------------------------------------------------

// For loop
for(let i = 0; i < 5; i++){
    // console.log(i)
}






// While loop
let o = 0;
while(o < 5){
    // console.log(o);
    o++
}






// Do...While loop
let p = 0; 
do{
    // console.log(p)
    p++
}while(p < 5);













//---------------------------------- FUNCTIONS =---------------------------------------------------------------------------------

// Function declaration 
function geet1(name){
    return "Hello " + name
}

// console.log(geet1("Arjun"));






// Function Expression 
const greet2 = function(name){
    return "Hello, " + name
}

// console.log(greet2("Arjun"));









// Arrow Functions
const greet3 = (name)=>{
    // console.log("Hello, ," + name);
}
greet3("Arjun");








// Closure
function outer(){
    let x = 10;

    function inner(){
        console.log(x)
    }

    return inner;
}

const innerFunction = outer();
innerFunction() // gives 10;








//  Error handling
try {
    // let x = undefinedVsariable;
} catch (error) {
    console.log("An error occured:  " + error.message);
}finally{
    // console.log("This will run regrdless of an error");
}














//---------------------------------- ADVANCED JAVASCRIPT CONCEPTS =---------------------------------------------------------------------------------

// Callbacks
function fetchData(callback){
    setTimeout(()=>{
        callback("Data recieved");
    },1000);
}

fetchData((message)=>{
    // console.log(message + "  haaii")
})








// Promises
let promise = new Promise((resolve, reject)=>{
    let success = "true";

    if(success){
        resolve("Operations sucessfull");
    }else{
        reject("Operation failed");
    }
});

promise.then((message) => {
    // console.log(message); // Operation successfull
})
.catch((error)=> {
    console.log(error.message);
});











// Async/Await
async function fetchData2() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("Data recieved awaitt "), 1000);
    });

    let result = await promise;
    console.log(result)
}

// fetchData2();














// Hoisting
// console.log(hoistedVar);  // gives Undefined

hoistedFunction(); // I'm a hoisted function !

function hoistedFunction(){
    // console.log("I'm a hoisted function !")
}









// This keyword
console.log(this);









// Object Method
const person1 = {
    name: "Arjun",
    greet: function(){
        console.log(this.name);
    }
}

// person1.greet();










// Arrow Functions
const person2 = {
    name2: "Arjun kumar vs",
    greet2: ()=>{
        console.log(person2.name2)
        // console.log(this.name2) gives undefined
    }
}

// person2.greet2();







//  Prototypes and inheritance 
//  Prototype Chain

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log("Hello, ", this.name);
}

const arjun = new Person("Arjun");
// arjun.greet();













//  Inheritance 
function Developer(name, language){
    Person.call(this, name);
    this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function(){
    console.log(this.name + " is coding in " + this.language);
};


const dev = new Developer("Arjun kumar vs ", "Javascript");
// dev.greet();
// dev.code();















// Closures

function Counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const increment = Counter();
increment();
increment();























//---------------------------------- JAVASCRIPT OBJECT MODEL =---------------------------------------------------------------------------------

// Object Properties 
let person4 = {
 name: "Arjun vs",
 age: 24
}




// Property Descriptors
let persons = {};
Object.defineProperty(persons, "name", {
    value: "Arjun kumar vsss",
    writable: false,
    enumerable: true,
    configurable: true
})
// console.log(persons.name);






// Getters and Setters
let person5 = {
    firstName: "Arjun",
    lastName: "Kumar",

    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(" ");
    }
}

// console.log(person5.fullName);
// person5.fullName = "Aleen Arjun";
// console.log(person5.fullName)














//---------------------------------- OBJECT ORIENTED PROGRAMMING =---------------------------------------------------------------------------------

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello " + this.name)
    }
}


class Developer2 extends Person2{
    constructor(name, age, language){
        super(name,age);
        this.language = language;
    }

    code(){
        console.log(this.name + " is coding in " + this.language);
    }

}

const dev2 = new Developer2("Arjun", 24, "Javascript");

// dev2.code();
// dev2.greet();










//---------------------------------- DESTRUCTURING =---------------------------------------------------------------------------------
// Arrays
const colors1 = ["red", "green", "blue"];

const [first, second, third] = colors1;
// console.log(third)







// Object
const person6 = {
    name1: "Arjun kumar",
    age1: 24
}
const { name1, age1 } = person6;
// console.log(name1)








// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers)








// Rest Operator
function sum(...args){
    return args.reduce((a, b)=> a + b , 0);
}
// console.log(sum(1, 2, 3));






















//---------------------------------- JAVASCRIPT IN BROWSER =---------------------------------------------------------------------------------
// const element = document.getElementById("id");
// element.textContent = "new text";
// element.addEventListener("click", ()=>{
//     alert("clicked");
// });
// const newElement = document.createElement("div");
// document.body.appendChild(newElement);


navigator.


navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
})
//    console.log(loc)




