// 1 = 00000001;
// 2 = 00000010;
// 3 = 00000011;

// console.log(1 | 2)
// console.log(1 & 2)



// Read, Write, Execute
// 00000100;
// 00000010;
// 00000001;

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission)

let message = (myPermission & readPermission) ? 'Yes' : 'No'
console.log(message);







let a = 5545;
let b = 6;

a ^= b;
b ^= a;
a ^= b;

console.log("a " + a + "  " +"b " + b);