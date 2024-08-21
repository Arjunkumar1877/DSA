// Capitalize Each Word in a String

const string = "   game of thrones is a good film";

//Time complexity O(n)
//Space Complexity O(n)

function caplitalize(str) {
  let newWord = "";
  let needUpdate = false;
  for (let i = 0; i < str.length; i++) {
    if (needUpdate) {
      newWord += str[i].toUpperCase();
    }
    if (str[i] == " " || i == 0) {
      if (i == 0) {
        newWord += str[i].toUpperCase();
      } else {
        needUpdate = true;
        newWord += str[i];
      }
    } else {
      needUpdate ? (needUpdate = false) : (newWord += str[i]);
    }
  }

  return newWord.trim();
}

console.log(caplitalize(string));
