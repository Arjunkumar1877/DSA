const fruits = ["Apple", "Orange", "Banana"];

const iterator = fruits[Symbol.iterator]();

let result = iterator.next();
while(result.done === false){
    console.log(result)
    console.log(result.value);
    result = iterator.next();
}
