const set = new Set([1, 2, 3, 4, 7, 7, 8, 8, 4,6, 6, 6, 4, 8, 7, "h", 5]);
set.add(6)
console.log(set.has(5));
set.delete(3)
// console.log(set.size);
// set.clear()
for(let item of set){
    console.log(item)
}