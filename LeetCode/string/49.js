

const  strs = ["eat","tea","tan","ate","nat","bat"];


function anagrams(strs){
    let obj = {};

    for(let s of strs){
        let key = s.split('').sort().join('');
        if(!obj[key]){
           obj[key] = [];
        }

        console.log(obj);
        console.log(key)
        console.log(s)
        obj[key].push(s);
    }

    console.log(obj);
}



anagrams(strs);


