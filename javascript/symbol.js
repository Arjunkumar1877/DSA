
const mySymbol = Symbol();

console.log(mySymbol);

const mySymbol1 = Symbol("mySymbol1");
const mySymbol2 = Symbol("mySymbol2");

const obj = {
    [mySymbol1]: 'Value 1',
    [mySymbol2]: 'Value 2'
};


console.log(obj[mySymbol1]);
console.log(obj[mySymbol2]);


