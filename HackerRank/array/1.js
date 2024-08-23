const students = [
  { name: "Alice Johnson", age: 20 },
  { name: "Bob Smith", age: 22 },
  { name: "Charlie Brown", age: 19 },
  { name: "Diana Prince", age: 21 },
];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot?.age > arr[i]?.age) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(students));
