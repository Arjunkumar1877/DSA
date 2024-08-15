const obj = {};

Object.defineProperty(obj, "name", {
    value: "Arjun kumar vs",
    writable: false,
    configurable: false
})

obj.name = "hello"
console.log(obj.name)