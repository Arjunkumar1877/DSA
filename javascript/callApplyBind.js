// Call
function greet(name){
    return `Hello, ${name} ! My name is ${this.firstName}.`;
}
const person = {
    firstName: "John"
};
// console.log(greet.call(person, 'Arjun kumar vs'));

function Animal(name, age, place){
  this.name = name;
  this.age = age;
  this.place = place;
}

function Dog(name, age, place, breed){
    Animal.call(this, name, age, place);
    this.breed = breed;
}

const myDog = new Dog("Buddy", 3, "ekm", "Golden Retriver");
// console.log(myDog);

















// Apply
function sum(a, b){
    return a + b + this.c
};
const context = { c: 10 };
// console.log(sum.apply(context, [2, 3]));

const numbers = [5, 6, 7, 8, 9];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

// console.log(max)
// console.log(min)




















// Bind
function multiply(a, b){
    return a * b;
}


const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
// console.log(double(5))


const car = {
    speed: 80,
    getSpeed: function(unit){
        return `${this.speed} ${unit}`;
    }
}

const bike = { speed: 50 };
const bikeSpeed = car.getSpeed.bind(bike, 'km/h');
// console.log(bikeSpeed());
// console.log(car.getSpeed("km/h"));