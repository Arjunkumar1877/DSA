const target = {
    name: "Arjun kumar vs",
    age: 24
}


const handler = {
    get: (target, prop, reciever)=>{
        console.log(`getting ${prop}`)
      return target[prop];
    },
    set: (target, prop, value, reciever)=>{
        console.log(`setting ${prop}  ${value}`)
        target[prop] = value;
        return true
    } 

}


const proxy = new Proxy(target, handler);
proxy.age = 78