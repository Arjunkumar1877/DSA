let tableObject = [
    { name: 'John Wick', dob: new Date('2000-09-22'), maritalStatus: 'Unmarried', premiumPrice: 2000 },
    { name: 'Seaun Smith', dob: new Date('1980-09-06'), maritalStatus: 'Married', premiumPrice: 3000 },
    { name: 'Katie Perry', dob: new Date('1990-06-12'), maritalStatus: 'Married', premiumPrice: 4000 }
];

// console.log(tableObject);

// function search(str) {
//     const str1 = str.toString();

//     let filteredObj = tableObject.filter((val) => val.dob.includes(str1));

//     return console.log(filteredObj);
// }

// search(22);


// let str = "hai my name is Arjun";

// const str1 = str.split(' ')

// console.log(str1)

// for(let i = 0; i < str1.length; i++){
//     str1[i] = str1[i].split('').reverse().join('')
// }

// console.log(str1)




// let str = "Arjun";
// let len = str.length-1;
// let mid = Math.floor((str.length-1)/2)

// let str1 = ''
// for(let i = 0; i < str.length; i++){

//         if(mid === i){
//             str1 += str[i].toUpperCase();
//         }else{
//             str1 += str[i]
//         }
// }


// console.log(str1)


// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(){
//     console.log(this.address); 
//       }
//     }
    
//     var getAddress = obj1.getAddress;
//     var obj2 = {name:"akshay"};
//     obj2.getAddress();
    



// console.log(!true);
// console.log(!"arjun")


// for(let i = 0; i < 3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1)
// }

// for(var i = 0; i <  766663; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1)
// }


// console.log(!!"first")

// let data = "name"
// let obj = {
//  name: "Arjun kumar vs",
//  name2: {
//     name3: "helllo"
//  }
// }

// console.log(obj[data]);
// console.log(obj['name'])
// console.log(obj.name)
// console.log(obj.data)


// let obj = {
//     name: "Arjun kumar vs",
//     name2: {
//        name3: "helllo"
//     }
//    }

// let b = JSON.parse(JSON.stringify(obj));
// let b = {..obj};
// letb = obj;

// b.name = "hhhh"
// b.name2.name3 = "haii"
// console.log(obj)
// console.log(b)




// var x;
// x = 90;
// console.log(x)



// let a = 3;
// let b = new Number(3);

// console.log(a == b)
// console.log(a === b)
// console.log(1 + "7")

// let i = 0;
// console.log(i++)
// console.log(++i)
// console.log(i)


// function ages(...age){

//     console.log(age)
// }

// ages(34)


// function getAge(){
//     // 'use strict'
//     age = 24;
//     console.log(age)
// }

// getAge()




// const sum = eval('10*1000+5')

// console.log(sum)





// const obj = {
//     1: "a",
//     2: "b"
// }


// console.log(obj.hasOwnProperty('1'))

// console.log(obj[2])


// let obj = {
//     a: "a1",
//     b: "b1",
//     a: "a2"
// }

// console.log(obj.a)





// for(let i = 0; i < 5; i++){
//     if(i === 3) continue;
//     console.log(i)
// }




// const foo = ()=>{
//     console.log("first")
// }

// const bar = ()=>{
//     setTimeout(()=> console.log("second"))
// }

// const baz = ()=>{
//     console.log("third")
// }

// bar();
// foo();
// baz()




// let person = {
//     name: "Arjun kumr vs"
// }

// function callName(age){
//     console.log(`Hai my name is ${this.name} and I'm ${age}`);
// }


// callName.call(person, 24);
// callName.bind(person, 25)();














// function sayHai(){
//     return (()=> 0)();
// }

// console.log(typeof sayHai());


// function sayhai(){
//     return ()=> 0;
// }

// console.log(typeof sayhai())
// console.log(typeof sayhai()())
// console.log(typeof typeof sayhai()())















// const numbers = [1, 2, 3];

// numbers[7] = 67;

// console.log(numbers);



// const numbers = [1, 2, 3];
// numbers[3] = numbers;

// console.log(numbers)











// console.log(!!null);
// // console.log(!null);

// // console.log(!"");
// console.log(!!"");

// console.log(!!1)
// // console.log(!1)











// console.log(setInterval(()=> console.log("hai"), 1000))
// console.log(setInterval(()=> console.log("hai"), 1000))
// console.log(setInterval(()=> console.log("hai"), 1000))

















// console.log([..."hai my name is Arjun"].reverse().join(''))


// console.log(5 + 4 + "5");
// console.log(5 + 4 + + '6');


// console.log(typeof []);
// console.log([] == []);
// console.log({} == {});
















// const data = [1, 2,3].map((num)=> {
//   if(typeof num === 'num'){
//     return  num * 3
//   }
//    return  num * 2
// }
// )

// console.log(data)





















// function getInfo(member){
//      member.name = "Anil";
// }

// const person = { name: "Arjun"};


// getInfo(person);

// console.log(person)


// function Car(){
//     this.make = "tata";
//     return { make: "kia"};
// }

// const myCar = new Car();

// console.log(myCar.make)




// (()=>{
//     let x = (y = 10);
// })();

// console.log(typeof x)











// (()=>{
//     let x = y =  10;
// })()

// console.log(typeof y);
// console.log(y);

















// (()=>{
//     let x = 10
// })();

// (()=>{
//     let x = 10
// })();
// console.log(typeof x)




// (()=>{
//     let x = y = 10
// })();

// (()=>{
//     let x = y = 20
// })();
// console.log(typeof y)
// console.log(y)




// console.log(!true - true);

// console.log(true + + "67")















// let obj1 = {
//     name: "Arjun",
//     age: 24
// }


// let obj2 = {
//     name: "Arjun",
//     age: 24
// }

// function checkObjs(obj1, obj2){
//     let key1 = Object.keys(obj1);
//     let key2 = Object.keys(obj2);

//     for(let i = 0; i < key1.length; i++){
//         if(key1[i] !== key2[i]){
//             return false;
//         }
//     }

//     let value1 = Object.values(obj1);
//     let value2 = Object.values(obj2);

//     for(let i = 0; i < value1.length; i++){
//      if(value1[i] !== value2[i]){
//         return false;
//      }
//     }

//     return true;

// }

// console.log(checkObjs(obj1, obj2));














// function search(str1){
// let str = str1.toString();
//     let filteredObj = tableObject.filter((data)=> data.name.includes(str));
//     let filteredObj2 = tableObject.filter((data) => 
//         data.dob.toLocaleDateString().includes(str)
//     );
//     if(filteredObj.length > 0){
//         return filteredObj;
//     }else if(filteredObj2.length > 0){
//         return filteredObj2
//     }else{
//         return []
//     }
    
// }

// console.log(search("J"))










// let arr = [34,7, 7, 8, 3, 0, 66, 9, 0 ,0, 0, 234, 99, 0];

// let arr1 = arr.sort((a, b)=> a - b);

// // console.log(arr1[arr.length-2])
// let k = arr[0], l = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > k){
//         l = k;
//         k = arr[i]
//     }
// }


// console.log(l)
















// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(){
//     console.log(this.address); 
//       }
//     }
    
//     var getAddressVar = obj1.getAddress;
//     var obj2 = {name:"akshay"};
//     // obj2.getAddress();

//     // obj1.getAddress()
//    getAddressVar.call(obj1)

















// let obj1 = {"key": "value"};
// let obj2 = obj1;
// let obj3 = obj2;

// console.log(obj3.key)
// obj1.key = "new Value";

// obj2 = { key: "another value"}


// console.log(obj1.key, "  ", obj2.key, "  ", obj3.key);


















// const promise1 = Promise.resolve("One");
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 4000));
// const promise3 = Promise.reject("Three");
// Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results))



// let str = "Hai, my name is Arjun kumar4dgd vs";

// let len1 = 0;
// let str2;

// let num = str.split(' ');

// for(let i = 0; i < num.length; i++){
//     if(num[i].length > len1){
//         len1 = num[i].length
//         str2 = num[i]
      
//     }
// }
// console.log(str2)













// let str = 'Hai, my name is Arjun kumar vs';


// let str2 = str.split(' ');

// // console.log(str2);

// for(let i = 0; i < str2.length; i++){
//     str2[i] = str2[i].split('').reverse().join('');
// }

// console.log(...str2)














// let str = "This   is   a    string            with  multiple   spaces.";

// let result = str.replace(/\s+/g, ' ');
// console.log(result)


// let str = "A b c d e f g hi, j gfdggfhhj l, m ,n ,h , j., t, y, e";
// let obj = {};

// for(let i = 0; i < str.length; i++){
//    if(!obj[str[i]]){
//     obj[str[i]] = 1;
//    }else{
//     obj[str[i]]++;
//    }
// }

// console.log(obj);
// let result = "";

// for(let key in obj){
//     if(obj[key] === 1){
//      result += key
//     }
// }

// console.log(result)














// let word = "Arjun";
// let mid = Math.floor(word.length/2);
// let str = '';

// for(let i = 0; i < word.length; i++){
//     if(i === mid){
//         str += word[i].toUpperCase();
//     }else{
//         str += word[i];
//     }
// }

// console.log(str)














// let arr1 = [1, 3, 5, "kk", null, 0, false, NaN, !"", -6, undefined];
// let arr2 = [];

// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i]){
//      arr2.push(arr1[i]);
//     }
// }



// console.log(arr2)












// let arr1 = [1, 5, 0, 5, 0, 6,0, 6, 0, 7,0, 4, 4,0]
// let k = 0;
// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i]){
//     [arr1[k], arr1[i]] = [arr1[i], arr1[k]];
//      k++;    
// }
// }

// console.log(arr1)















// const obj = {
//     a: 5,
//     b: {
//         c: 6,
//         d: 9
//     },
//     u: 90,
//     f: {
//         h: 7,
//         k: {
//             l: 77
//         }
//     }
// }



// function findrecursiceSum(obj){
//     let sum = 0;
//     for(let key in obj){
//         if(typeof obj[key] === 'object'){
//          sum +=  findrecursiceSum(obj[key]);
//         }else if(typeof obj[key] === 'number'){
//             sum += obj[key];
//         }
//     }

//     return sum
// }


// console.log(findrecursiceSum(obj))













// const str1 = "wjhdsfagsdhyuetwrweasbcasldweirwebcaksdckjuuuuuuuuaaaaaaaabsdcbaskjnsdoooooooougfajsdbcabjbisdhfiushiushd"

// function findVowels(str){
//     let obj = {
//         a: 0,
//         e: 0,
//         i: 0,
//         o: 0,
//         u: 0
//     }

//     for(let char of str){
//         if(obj[char] === 0){
//             obj[char] = 1;
//         }else if(obj[char]){
//             obj[char]++;
//         }
//     }

//     return obj;


// }

// console.log(findVowels(str1))













// const nums = [1,2,3,34,54,54,36,,54,654, () => console.log("hoi") , null  ,undefined , {} ,[] ,"oi"];


// function removeFalsyvalues(nums){

//     const vals = nums.reduce((acc, curr)=> {
//         if(typeof curr === 'number'){
//             acc.push(curr)
//         }
//         return acc
//     },[])

//     return vals;
// }


// console.log(removeFalsyvalues(nums))











// function calculateNumbers(nums){
//     const sum = nums.reduce((acc, curr)=> (typeof curr === 'number' ? acc + curr : acc+ 0),0);
//     return sum;
// }

// console.log(calculateNumbers(nums))











// function Timer(num){
//     let intervals = setInterval(()=>{
//         if(num !== 0){
//            console.log(num--)
//         }else{
//             clearInterval(intervals);
//         }
//     },1000)
// }

// Timer(10);











// let arr = [1, 3, [45, 77, 8, [89, 9, 0], [78, 99, 0]], 78, 56];
// console.log(arr.flat(Infinity).reduce((acc, curr)=> acc+ curr, 0));










// function findUnique(array){
//  let obj = {};

//  for(let i = 0; i < array.length; i++){
//     if(!obj.hasOwnProperty(array[i])){
//        obj[array[i]] = array[i]
//     }
//  }

//  return Object.values(obj)

// }

// let array = [2,2,3,8,7,5,4,3,4,7,8];
// console.log(findUnique(array));




















// const array = [
//    [
//      [0, 1, 0],
//      [1, 0, 1],
//      [0, 1, 0],
//    ],
//    [
//      [1, 0, 1],
//      [0, 1, 0],
//      [1, 0, 1],
//    ],
//    0,
//    1,
//    0,
//    [
//      [0, 1, 0],
//      [1, 0, 1],
//      [0, 1, 0],
//    ],
//    0,
//    1,
//    0,
//    1,
//    0,
//    [0, 1, 0, 1, 0, [1, 0, 1, 0, [0, 1, 0]]],
//  ];


//  let k = 0;
//  function findCount(arr){
//    let sum = 0;

//    for(let key of arr){
//       if(Array.isArray(key)){
//          sum += findCount(key);
//       }else{
//          if(key === 0){
//             k++;
//          }
//          sum += key;
//       }
//    }

//    return sum;
//  }

//  console.log(k)

//  console.log(findCount(array));

