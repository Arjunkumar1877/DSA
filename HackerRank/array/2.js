//find max product

function maxProduct(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let max = 0;
  let secMax = 0;

  for (let char of arr) {
    if (char > max) {
      secMax = max;
      max = char;
    } else if (char > secMax) {
      secMax = char;
    }
  }

  return max * secMax;
}

const array = [1, 10, 2, 6, 5, 3];

console.log(maxProduct(array));
