// Function declaration
function greet1(name){
    return `hello ${name}`;
}
// console.log(greet1("Arjun"));






// Function expression
const add = function(a, b){
    return a + b;
}

// console.log(add(5, 9));







// Arrow Function
const multiply = (a, b) => a * b;
// console.log(multiply(7, 7));








// Anonymous function
setTimeout(function(){
    // console.log("This message is delayed by 2 seconds.");
}, 2000)









// Higher-Order Function
function greet(name){
    console.log(`Hello, ${name} !`);
}
function higherOrderFunction(callback){
    const name = "Arjun";
    callback(name);
}
// higherOrderFunction(greet);










// Callback Function
function fetchData(callback){
    setTimeout(()=>{
        const data = "Some data fetched";
        callback(data);
    }, 1000);
}

function processData(data){
    console.log(`Processing: ${data}`);
}

// fetchData(processData);











// Constructor Function 
function ConstructorFunction(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const constructor = new ConstructorFunction("Arjun", 24);
// constructor.greet()












// Genrator function 
function* countUp(){
    let count = 0;
    while(count < 5){
        yield count++;
    }
}
const counter = countUp();
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)











// Async Function
async function fetchData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

// fetchData2().then(data => console.log(data));










// Promise 
function fetchData() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
          const data = ["Apple", "orange"];
          resolve(data);
            },2000)
        })
}

function displayData(data){
   console.log("Fetch data: " , data);
}

fetchData().then(displayData).catch(error => console.log(error))









// Recursive Function
function factorial(n){
    if(n <= 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

// console.log(factorial(5));















// Generic function composition 
const compose = (f, g) => (x) => f(g(x));

const addF = (x)=>{
    return 2 + x
}

const multipleF = (x)=>{
    return 2 * x;
}

const AddAndMultiply = compose(addF, multipleF);
// console.log(AddAndMultiply(2));











// Currying function
function curriedFunction(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

// console.log(curriedFunction(1)(2)(3));

const curriedArrowFunction = a => b => c => a + b + c;
// console.log(curriedArrowFunction(1)(2)(3))








// -----------------------------------------------------APPLICATIONS OF CLOSURE =--------------------------------------------------------------------------
// Data privacy / encapsulation

function createCounter(){
    let count = 0;

    return{
        increment: function(){
            count++;
        },

        getCount: function(){
            return console.log(count)
        }
    }
}


const counter2 = createCounter();
// counter2.increment()
// counter2.increment()
// counter2.increment()
// counter2.increment()
// counter2.getCount()







// Module pattern
const calculate = (function(){
    let result = 0;

    return {
        add: function(num){
            result += num;
        },
        substract: function(num){
            result -= num;
        },
        getResult: function(){
            return result;
        }
    }
})();

calculate.add(100);
calculate.substract(5)

// console.log(calculate.getResult());







// Event handlers
function setUpButton(){
    let count = 0;
    const button = document.getElementById('myButton');

    button.addEventListener('click', function(){
        count++;
        console.log(`Button clicked ${count} times`);
    })
}

// setUpButton();












function withLogging(fn) {
    return function (...args) {
      console.log(`Calling ${fn.name} with arguments:`, args);
      const result = fn(...args);
      console.log(`Result:`, result);
      return result;
    };
  }
  
  function add5(x, y) {
    return x + y;
  }
  
//   const loggedAdd = withLogging(add5);
//   console.log(loggedAdd(3, 4)); // gives 7
  




