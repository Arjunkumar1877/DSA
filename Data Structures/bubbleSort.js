//bubble sort
const arr = [3, 1, 5, 8, 9, 1];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);

let swapped;

do {
  swapped = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapped = true;
    }
  }
} while (swapped);
console.log(arr);
