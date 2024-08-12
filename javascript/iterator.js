const fruits = ["Apple", "Orange", "Banana"];

const iterator = fruits[Symbol.iterator]();

let result = iterator.next();
while(result.done === false){
    console.log(result)
    console.log(result.value);
    result = iterator.next();
}



const it = ["a", "b", "c"];
const itrate = it[Symbol.iterator]();

let run = itrate.next();

while(run.done === false){
    console.log(run.value);
    console.log(run);
    run = itrate.next()
}