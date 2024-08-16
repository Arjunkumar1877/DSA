function createPerson(name, age) {
    let _age = age;  // Private variable

    return {
        name: name,
        getAge: function() {
            return _age;
        },
        setAge: function(newAge) {
            if (newAge > 0) {
                _age = newAge;
            } else {
                console.log('Age must be a positive number');
            }
        },
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${_age} years old.`);
        }
    };
}

const person1 = createPerson('Alice', 30);
console.log(person1.getAge());  
person1.setAge(31);
console.log(person1.getAge()); 
person1.greet();  
