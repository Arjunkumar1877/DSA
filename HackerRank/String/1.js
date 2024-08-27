//https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

let string = "aaabccbddddggeee";

function reduceString(str, i = 0) {
   if(str.length == 0){
    return "Entry string";
   }

   if(i == str.length - 1){
    return str;
   }

   if(str[i] === str[i + 1]){
    return reduceString(removeString(str, i, i + 1), (i = 0));
   }else{
    return reduceString(str, i + 1);
   }

}
function removeString(str, index1, index2) {
  return str.slice(0, index1) + str.slice(index2 + 1);
}

console.log(reduceString(string));







function removeAdjacent(str){
  let str1 = {};

  for(let s of str){
    if(!str1[s]){
      str1[s] = 1;
    }else{
      str1[s]++;
    }
  }
  console.log(str1);
  let newStr = "";

  for(let str in str1){
    if(str1[str] % 2 === 0){
      continue;
    }else{
   newStr += str
    }
  }

  console.log(newStr)
}

removeAdjacent(string)