let s = "abcdefghijklmn"; //bacdfeg
let k = 2;

function reverseStr(s, k){
    // let str = "";
    let stra1 = [];
    let str = s.split('')

    for (let i = 0; i < str.length; i += k) {
        stra1.push(str.slice(i, i + k));
      }
    stra1.push([str[str.length-1]])

for(let i = 0; i < stra1.length; i++){

    if(i % 2 === 0){
    stra1[i] =  stra1[i].reverse().join('')
    }
}
console.log(stra1)

return console.log(stra1.flat().join(''))

}


reverseStr(s, k);

