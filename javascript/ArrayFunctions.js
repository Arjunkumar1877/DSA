// Array.from()
const str1 = 'heyyy';
const arr1 = Array.from(str1);
// console.log(arr1);






// Array.of()
const str2 = Array.of(1, 2, 3, 4, "hh");
// console.log(str2)







// concat()
const arr3_1 = [1, 2];
const arr3_2 = [3, 4];
const result3 = arr3_1.concat(arr3_2);
// console.log(result)








// Array.isArray()
// console.log(Array.isArray([1, 2, 3, 4]))
// console.log(Array.isArray("jghg"))










// copyWithin();
const arr4 = [1, 2, 3, 4, 5, 6];
arr4.copyWithin(0, 3);
// console.log(arr4)









// entries()
const arr5 = ['a', 'b', 'c'];
const iterator = arr5.entries();

for(let entry of iterator){
    // console.log(entry);
}













// every();
const arr6 = [1, 2, 3, 4, 5];
const result6 = arr6.every(num => num % 2 === 0);
// console.log(result6);












// fill();
const arr7 = [1, 2, 3, 4, 5, 6];
arr7.fill(7);
// console.log(arr7);













// filter();
const arr8 = [1, 2, 3, 4, 5];
const result8 = arr8.filter(num => num % 2 === 0);
// console.log(result8)












// find();
const arr9 = [1, 2, 4, 6, 7, 8, 9];
const result9 = arr9.find(num => num > 1 && num % 2 !== 0);
// console.log(result9);













// findIndex()
const arr10 = [1, 2, 3, 4, 5, 6, 7];
const result10 = arr10.findIndex(num => num > 1);
// console.log(result10);










// flat();
const arr11 = [1, 2, 3, [44, 5, [6, 7, 8, [7, 7, 8, 9, [5, 6, 8, 9]]]], 8, [7, 8, 9]]
// const result11 = arr11.flat(2);
const result11 = arr11.flat(Infinity);
// console.log(result11);









// flatMap();
const arr12 = [1, 2, 3, 4];
const result12 = arr12.flatMap((num) => {
   return [num, num * 2, num * 8]
})
// console.log(result12);















// forEach();
const arr13 = [1, 2, 3, 4, 5];
// arr13.forEach(num => console.log(num))












// includes();
const arr14 = [1, 2, 3, 4, 5];
// console.log(arr14.includes(4));
// console.log(arr14.includes(9));














// indexOf();
const arr15 = [1, 2, 3, 4, 5];
// console.log(arr15.indexOf(5))













// join();
const arr16 = ['h', 'e', 'l', 'l', 'o'];
const result16 = arr16.join(' ');
// console.log(result16)











// key();
const arr17 = ['a', 'b', 'c'];
const iterator17 = arr17.keys();

for(let key of iterator17){
    // console.log(key)
}








// map();
const arr18 = [1, 2, 3, 4, 5, 6];
const result18 = arr18.map(num => num * 2);
// console.log(result18);












// pop();
const arr19 = [1, 2, 3, 4, 5];
const lastElement19 = arr19.pop();
// console.log(lastElement19);













// push();
const arr20 = [1, 2, 3, 4];
const length20 = arr20.push(9);
// console.log(length20);
// console.log(arr20);











// reduce();
const arr21 = [1, 2, 3, 4, 5];
const sum21 = arr21.reduce((acc, num)=> acc + (num % 2 === 0 ? num : 0), 0)
// console.log(sum21);












// reduceRight();
const arr22 = [1, 2, 3, 5 , "6"];
const result22 = arr22.reduceRight((acc, right)=> acc + right);
// console.log(result22);













// reverse();
const arr23 = [1, 2, 3, 4, 5];
const result23 = arr23.reverse();
// console.log(result23);













// shift();
const arr24 = [1, 2, 3, 4, 5];
const result24 = arr24.shift();
// console.log(result24);


















// slice();
const arr25 = [1, 2, 3, 4, 5];
const sliced25 = arr25.slice(0, 1);
// console.log(sliced25);











// some();
const arr26 = [1, 3, 4, 5, 2, 7];
const result26 = arr26.some(num => num > 13);
// console.log(result26);













// sort();
const arr27 = [5, 8, 5, 2, 9, 0 , 3, 2, 1];
arr27.sort();
// console.log(arr27);












// splice();
const arr28 = [1, 2, 3, 4, 5, 6];
const removed28 = arr28.splice(0, 2);
const removed28s = arr28.slice(0, 2);
console.log(removed28);
// console.log(removed28s);
// console.log(arr28);













// tolocalString();
const arr29 = [1, 2, 'a', new Date()];
const result29 = arr29.toLocaleString();
// console.log(arr29);
// console.log(result29);















// toString();
const arr30 = [1, 2, 3, 4, 5];
const str30 = arr30.toString();
// console.log(str30);














// unshift();
const arr31 = [1, 2, 3, 4, 5];
const length31 = arr31.unshift(90);
// console.log(length31);
// console.log(arr31);














// values();
const arr32 = ['a', 'b', 'c'];
const iterator32 = arr32.values();
for(let value of iterator32){
    // console.log(value);
};












// findLast();
const arr33 = [1, 88, -8, 4, 5];
const result33 = arr33.findLast(num => num > 2 &&  num < 5);
// console.log(result33);






// findLastIndex();
const arr34 = [1, 2, 3, 4, 5];
const result34 = arr34.findLastIndex(num => num > 3);
// console.log(result34);


