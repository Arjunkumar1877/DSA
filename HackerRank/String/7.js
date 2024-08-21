//Check if a String Contains All Unique Characters
const string = "Hllo";
function checkUnique(str) {
  const set = new Set();
  for (const char of str) {
    if (set.has(char)) {
      return false;
    } else {
      set.add(char);
    }
  }

  return true;
}

console.log(checkUnique(string));


