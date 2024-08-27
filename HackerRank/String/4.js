//find longest word in the sentence

//this algorithm can be used to determine shortes word, shorteststr2number of word ,

//time complexity  o(n)
//space complexiity o(n)
//
let string = "I love love youuuuuuuuuuuuu programmingggggggggggggggg";
function findWord(str) {
  let bigWord = "";
  let currentLength = 0;

  const arr = str.split(" ");

  for(let word of arr){
    if(word.length > currentLength){
      bigWord = word;
      currentLength = word.length;
    }
  }

  return bigWord;
}

console.log(findWord(string))

//more optimum

//time complexity o(n)
//space complexity o(1)

// function findWord2(str) {
//   let word = "";
//   let bigWord = "";

//   for(let i = 0; i <= str.length; i++){
//   if(str[i] === " " || i == str.length){
//     if(word.length > bigWord.length){
//       bigWord = word;
//      }
//      word = "";
//   }else{
//     word += str[i];
//   }
//   }


//   return bigWord;
// }

// console.log(findWord2(string));




// function findLongestString(str){
//   let arr = str.split(' ');
//   let str2 = arr[0];

//   for(let i = 0; i < arr.length; i++){
     
//     if(str2.length < arr[i].length){
//       str2 = arr[i];
//     }
//   }

//     return str2;
// }

// console.log(findLongestString(string));