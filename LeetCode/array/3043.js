


function logestCommonPrefix(arr1, arr2){
    const prefixMap = new Map();
    for(let num1 of arr1){
        let strNum = num1.toString();
        let prefix = "";

for(let ch of strNum){
    prefix += ch
    prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
}
}

let maxLength = 0;

for(let num of arr2){
    let strNum = num.toString();
    let prefix = "";

    for(let ch of strNum){
        prefix += ch;
        if(prefixMap.has(prefix)){
            maxLength = Math.max(maxLength, prefix.length);
        }
    }
}


return maxLength;
}


let arr1 = [1,10,100];
let arr2 = [1000];
console.log(logestCommonPrefix(arr1, arr2))