//replace wowels with string


const string = "Hello World";
function replace(str, replace) {
  const wowels = "aeiouAEIOU";
  let newString = "";
  for (const char of str) {
    if (wowels.includes(char)) {
      newString += replace;
    } else {
      newString += char;
    }
  }

  return newString;
}

console.log(replace(string, "%"));
