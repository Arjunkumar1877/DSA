
// -------------------------------------------------------------------------------------
// Array ===============================================================================
// -------------------------------------------------------------------------------------


// const arr = [1, 2, 3];

// const [a, b , c, d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);





// Skipping Elements
// *****************
// const arr = [1, 2, 3];
// const [a, , b] = arr;
// console.log(a)
// console.log(b)







// Default Values
// ******************
// const arr = [1, 2, 3];
// const [a, b , c = 7] = arr;
// console.log(a)
// console.log(b)






// Using Rest Operator
// *******************
// const arr = [1, 2, 3];
// const [a, ...rest] = arr;
// console.log(a);
// console.log(rest);







// nested Destructuring
// ********************
// const arr = [1, [2, 3]];
// const [a, [b, c]] = arr;
// console.log(a)
// console.log(b)
// console.log(c)






// -------------------------------------------------------------------------------------
// Object ==============================================================================
// -------------------------------------------------------------------------------------

// const obj = { x: 23, y: 56 };
// const { x, y} = obj;
// console.log(x);
// console.log(y);









// Renaming Variables
// ******************
// const obj = { a: 24, b: 50};
// const { a:i, b:j } = obj;
// console.log(i);
// console.log(j);








// const obj = { x: 20, y: 25}
// const { x, y } = obj;

// console.log(x);
// console.log(y);









// const obj = { x: 10, y: 20, z: 30 };
// const { x, ...restData } = obj;
// console.log(x);
// console.log(restData.y);










// const obj = { q: 10, x: { y: { z: 25 }}};

// const { q, x: { y: { z }}} = obj;

// console.log(z);





