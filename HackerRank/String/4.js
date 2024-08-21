//find longest word in the sentence

//this algorithm can be used to determine shortes word, shortest word length number of word ,

//time complexity  o(n)
//space complexiity o(n)
//

const string = "I love programming";
function findWord(str) {
  let bigWord = "";
  let currentLength = 0;

  const array = str.split(" ");
  for (let word of array) {
    if (word.length > currentLength) {
      bigWord = word;
      currentLength = word.length;
    }
  }

  return bigWord;
}

//more optimum

//time complexity o(n)
//space complexity o(1)

function findWord2(str) {
  let word = "";
  let bigWord = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i == str.length) {
      if (word.length > bigWord.length) {
        bigWord = word;
      }

      word = "";
    } else {
      word += str[i];
    }
  }

  return bigWord;
}

console.log(findWord2(string));
