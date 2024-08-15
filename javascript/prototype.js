function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Arjun", 24);
const person2 = new Person("Arjun kumar vs", 24);
person1.greet();
person2.greet();





const personPrototype = {
    greet(){
        console.log(`Hello, I'm a mern developer named ${this.name}`)
    }
}

const person3 = Object.create(personPrototype);
person3.name = 'Arjun kumar vs';
person3.greet()









// pollution
function merge(target, source){
    for(const key in source){
        target[key] = source[key];
    }
}

const userObject = { __proto__: { hack: 'pawned'}};
const targetObject = {};
merge(targetObject, userObject);

console.log(Array.isArray([]));
console.log(Array.prototype.hack);



// sanitize pollution 
function sanitize(input){
    const forbiddenProps = ['__proto__', 'constructor', 'prototype'];
    forbiddenProps.forEach(prop => delete input[prop]);
    return input;
}

const obj = {
    __proto__: "attack",
    name: "Arjun"
}


console.log(sanitize(obj))
