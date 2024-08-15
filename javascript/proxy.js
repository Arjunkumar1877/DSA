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




const target = {
    name: "Arjun kumar",
    age: 24
}

const handler = {
    get: (target, prop, reciever)=>{
        console.log(`getting ${target[prop]}`);
        return target[prop];
    },
    set: (target, prop, value, reciever)=>{
       console.log(`setting ${value} to ${prop}`)
    }

}

const procy = new Proxy(target, handler);

procy.name;


