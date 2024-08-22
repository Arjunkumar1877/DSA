//https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

let string = "cbbd";

function reduceString(str, i = 0) {
  if (str.length == 0) {
    return "Empty string";
  }
  if (i == str.length - 1) {
    return str;
  }
  if (str[i] == str[i + 1]) {
    return reduceString(removeString(str, i, i + 1), (i = 0));
  } else {
    return reduceString(str, i + 1);
  }
}
function removeString(str, index1, index2) {
  return str.slice(0, index1) + str.slice(index2 + 1);
}

console.log(reduceString(string));
