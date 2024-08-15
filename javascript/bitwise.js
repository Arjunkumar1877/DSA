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






let a = 5; // Binary: 00000101
let b = 3; // Binary: 00000011




a ^= b;
b ^= a;
a ^= b;

console.log("a " + a + "  " +"b " + b);



// AND
console.log(a & b); // Output: 1 (Binary: 00000001)

// OR
console.log(a | b); // Output: 7 (Binary: 00000111)

// XOR
console.log(a ^ b); // Output: 6 (Binary: 00000110)

// NOT
console.log(~a); // Output: -6 (Binary: 11111010, two's complement)

// Left shift
console.log(a << 1); // Output: 10 (Binary: 00001010)

// Right shift
console.log(a >> 1); // Output: 2 (Binary: 00000010)

// Unsigned right shift
console.log(a >>> 1); // Output: 2 (Binary: 00000010)




// 1 = 00000001;
// 2 = 00000010;
    //    00000000

// 1 = 00000001;
// 3 = 00000011;

// 1 = 00000001;
// 4 = 00000100;
//     00000000

// 1 = 00000001;
// 5 = 00000101;
//     00000001;




function isEven(num) {
    return (num & 1) === 0;
}


console.log(isEven(5));