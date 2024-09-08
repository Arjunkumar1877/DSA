
const fruits = ["Apple", "Orange", "Banana"];

const iterator = fruits[Symbol.iterator]();

// let result = iterator.next();
// while(result.done === false){
//     console.log(result)
//     console.log(result.value);
//     result = iterator.next();
// }



const it = ["a", "b", "c"];
const itrate = it[Symbol.iterator]();

let run = itrate.next();

while(run.done === false){
    console.log(run.value);
    console.log(run);
    run = itrate.next()
}



let iteratorFunction = {
    current: 1,
    end: 10,
    [Symbol.iterator](){
        return{
            next: ()=>{
                if(this.current <= this.end){
                    return { value: this.current++, done: false };
                }else{
                    return { done: true };
                }
            }
        }
    }
}

// for(let val of iteratorFunction){
//     console.log(val + "   it")
// }


const str = 'Hello World';
console.log(str.startsWith('Hello')); // Output: true
console.log(str.startsWith('World')); // Output: false



const path = require('path');
console.log(path.basename(__filename))

