const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function hashFunction(char) {
  let hash = 0;
  for (let i = 0; i < char.length; i++) {
    hash = (hash + char.charCodeAt(i)) % 7;
  }
  return hash;
}

function group(input) {
  const output = [];

  for (let i = 0; i < input.length; i++) {
    let hash = hashFunction(input[i]);
    if (!output[hash]) {
      output[hash] = [];
    }

    output[hash].push(input[i]);
  }

  return output;
}

console.log(group(input));
