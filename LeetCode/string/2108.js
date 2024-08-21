// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward


const words = ["abc","car","adao","racecara","cool"];
const words2 = ["abc","car","adao","racecar","cool"];


//Method - 1

// let findFirstPalindrom = (words)=> {
//       for(let i = 0; i < words.length; i++){
//         if(words[i] === words[i].split('').reverse().join('')){
//             return words[i];
//         }
//       }

//       return "No palindrom words";
// }

// console.log(findFirstPalindrom(words2));






// Method - 2
function findFirstPalindrom(words){
  for(let i = 0; i < words.length; i++){
    let w = words[i];
    const result = check(w);

    if(!result){
        continue;
    }else{
        return result;
    }
  }
  return "no palindrom";
}

<<<<<<< HEAD
console.log(findFirstPalindrom(words2));
=======

function check(word, lb= 0, ub= word.length-1){
 if(lb > ub){
    return word;
 }

 if(word[lb] !== word[ub]){
    return false;
 }else{
    return check(word, lb += 1, ub -= 1);
 }
}


console.log(findFirstPalindrom(words));


>>>>>>> e04c5ebb69be92dccaff9a619d535182db881771


