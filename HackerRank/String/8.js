//arjun kumar
//out put , nujra ramuk

function reverString(str) {
  let char = "";

  let reversedChar = "";

  let split = str.split(" ");
  for (let char of split) {
    reversedChar += reverseWord(char) + " ";
  }
  return reversedChar;
}

function reverseWord(w) {
  let rev = "";

  for (let i = w.length - 1; i >= 0; i--) {
    rev += w[i];
  }
  return rev;
}

console.log(reverString("hello world")); 
// function reverseStringUsingRecursion(str) {
//   if (str === "") {
//     return "";
//   }
//   return reverseStringUsingRecursion(str.substr(1)) + str.charAt(0);
// }

// let originalStr = "world";
// let reversedStr = reverseStringUsingRecursion(originalStr);
// console.log(reversedStr);
