// const target = {
//     name: "Arjun kumar vs",
//     age: 24
// }


// const handler = {
//     get: (target, prop, reciever)=>{
//         console.log(`getting ${prop}`)
//       return target[prop];
//     },
//     set: (target, prop, value, reciever)=>{
//         console.log(`setting ${prop}  ${value}`)
//         target[prop] = value;
//         return true
//     } 

// }


// const proxy = new Proxy(target, handler);
// proxy.age = 78




// const target = {
//     name: "Arjun kumar",
//     age: 24
// }

// const handler = {
//     get: (target, prop, reciever)=>{
//         console.log(`getting ${target[prop]}`);
//         return target[prop];
//     },
//     set: (target, prop, value, reciever)=>{
//        console.log(`setting ${value} to ${prop}`)
//     }

// }

const target = {
    name: "Arjun kumar vs",
    age: 24
}

const handler = {
    get: (target, prop, reciever)=> {
        console.log(reciever, " ++ ", target[prop]);
        return target[prop];
    },
    set: (target, prop, value, reciever)=>{
      if(value === 'nihal'){
        return console.log("not allowed")
      }else{
        target[prop] = value;
      }
    }

}

const procy = new Proxy(target, handler);

procy.name = "nihal"
procy.name;

const numbers = [1, 2, 3, 4, 5];
let compose = (...functions) => (input) => {
   return functions.reduceRight((acc, fn)=> fn(acc), input);
}  


let add = x => x + 1;
let double = x => x * 2;


const num = numbers.map(compose(add, double));

console.log(num)