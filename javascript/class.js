// // class MyClass {
// //     // Private field
// //     #privateField;

// //     constructor(value) {
// //         this.#privateField = value; // Accessing private field within the class
// //     }

// //     // Public method
// //     getPrivateField() {
// //         return this.#privateField;
// //     }

// //     setPrivateField(value) {
// //         this.#privateField = value;
// //     }
// // }

// // const instance = new MyClass('secret');
// // console.log(instance.getPrivateField()); // Output: secret

// // // Attempt to access private field directly (will throw an error)
// // // console.log(instance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class



// class MyClass {
//     // Private method
//     #privateMethod() {
//         return 'This is a private method';
//     }

//     // Public method
//     publicMethod() {
//         return this.#privateMethod(); // Accessing private method within the class
//     }
// }

// const instance = new MyClass();
// console.log(instance.publicMethod()); // Output: This is a private method

// // Attempt to access private method directly (will throw an error)
// // console.log(instance.#privateMethod()); // SyntaxError: Private method '#privateMethod' is not accessible outside class
// class Person {
//     // Private property
//     #name;

//     constructor(name) {
//         this.#name = name; // Initialize private property
//     }

//     // Public method to get the private property value
//     getName() {
//         return this.#name;
//     }

//     // Public method to set the private property value
//     setName(newName) {
//         this.#name = newName;
//     }
// }

// const person = new Person('Alice');
// console.log(person.getName()); // Output: Alice

// person.setName('Bob');
// console.log(person.getName()); // Output: Bob

// // Attempt to access private property directly (will throw an error)
// // console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
// const obj = {
//     name: 'John',
//     age: 30
//   };



  var strStr = function(haystack, needle) {
    let yes;
    let str = '';
    let j = 0;

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            j = i;
             while(j < haystack.length && haystack[j] === needle[j]){
                str += haystack[j];
                j++;
             }

             console.log(str)
             if(str === needle){
                return 0;
             }

        }else{
            str = ''
        }
    }

    return -1;
};

 let haystack = "sadbutsad", needle = "sad";

 console.log(strStr(haystack, needle))