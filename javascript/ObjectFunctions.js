

// Object.assign();
const target1 = {a: 1};
const source1 = {b: 2, c: 3};
const result1 = Object.assign(target1, source1);
// console.log(result1);









// Object.create();
const prototype2 = { greet() { console.log('Hello')}, name: "arjun"};
const obj2 = Object.create(prototype2);
// obj2.greet();
// console.log(obj2.name);













// Object.defineProperty();
const obj3 = {};
Object.defineProperty(obj3, "a", {
  value: 22,
  writable: false
})

// console.log(obj3.a);
// obj3.a = 7
// console.log(obj3.a);














// Object.defineProperties();
const obj4 = {};
Object.defineProperties(obj4, {
    'a': {
        value: 678,
        writable: true
    },
    'b': {
        value: 'heyy',
        writable: false
    }
})

obj4.b = "haoo"
obj4.a = "haoo"
// console.log(obj4.b);
// console.log(obj4.a);















// Object.entries();
const obj5 = {a: 1, b: 2, c: 3};
const entries5 = Object.entries(obj5);
// console.log(entries5);















// Object.freeze();
const obj6 = { a: 1};
Object.freeze(obj6);
obj6.a = 8;
// console.log(obj6.a)















// Object.fromEntries();
const entries7 = [['a', 2], ['b', 5]];
const obj7 = Object.fromEntries(entries7);
// console.log(obj7);











// Object.getOwnPropertyDescriptor();
const obj8 = { a: 1 };
const descriptor8 = Object.getOwnPropertyDescriptor(obj8, 'a');
// console.log(descriptor8);
















// Object.getOwnPropertyDescriptor();
const obj9 = { a: 1, b: 9 };
const descriptor9 = Object.getOwnPropertyDescriptors(obj9);
// console.log(descriptor9);










// Object.getOwnPropertyNames();
const obj10 = { a: 1, b: 2 };
const propNames10 = Object.getOwnPropertyNames(obj10);
// console.log(propNames10); 














// Object.getOwnPropertySymbols();
const sym11 = Symbol('mySymbol');
const obj11 = { [sym11]: 1 , a: 8};
const symbols11 = Object.getOwnPropertySymbols(obj11);
// console.log(symbols11); 














const prototype12 = { greet() { console.log('Hello!'); } };
const obj12 = Object.create(prototype12);
// console.log(Object.getPrototypeOf(obj12)); 















// Object.is();
// console.log(Object.is('foo', 'foo'));   
// console.log(Object.is({}, {}));        
// console.log(Object.is(NaN, NaN));       















// Object.isExtensible();
const obj13 = {};
// console.log(Object.isExtensible(obj13)); 
// Object.preventExtensions(obj13);
// console.log(Object.isExtensible(obj13)); 













// Object.isFrozen();
const obj14 = Object.freeze({ a: 1 });
// console.log(Object.isFrozen(obj14));













// Object.isSealed();
const obj15 = Object.seal({ a: 1 });
// console.log(Object.isSealed(obj15)); 











// Object.keys();
const obj16 = { a: 1, b: 2 };
const keys16 = Object.keys(obj16);
// console.log(keys16); 














// Object.seal();
const obj17 = { a: 1 };
Object.seal(obj17);
obj17.b = 2; 
delete obj17.a; 
// console.log(obj17); 











// Object.setPrototypeOf();
const prototype18 = { greet() { console.log('Hello!'); } };
const obj18 = {};
Object.setPrototypeOf(obj18, prototype18);
// obj18.greet(); 









// Object.values();
const obj19 = { a: 1, b: 2, c: 3};
const value19 = Object.values(obj19);
// console.log(value19);








// Object.hasOwn();
const obj20 = { a: 1 };
// console.log(Object.hasOwn(obj20, 'a'));
// console.log(Object.hasOwn(obj20, 'b')); 













// Object.prototype.hasOwnProperty();
const obj21 = { a: 1 };
// console.log(obj21.hasOwnProperty('a')); 
// console.log(obj21.hasOwnProperty('b')); 
















// Object.prototype.isPrototypeOf();
const prototype22 = {};
const prototy = {};
const obj22 = Object.create(prototype22);
// console.log(prototy.isPrototypeOf(obj22)); 













// Object.prototype.propertyIsEnumerable();
const obj23 = { a: 1 };
// console.log(obj23.propertyIsEnumerable('a'));











// Object.prototype.toLocaleString();
const obj24 = { a: 1 };
// console.log(obj24.toLocaleString()); 















// Object.prototype.toString();
const obj25 = { a: 1 };
// console.log(obj25.toString());
















// Object.prototype.valueOf()
const obj26 = { a: 1 };
// console.log(obj26.valueOf());















