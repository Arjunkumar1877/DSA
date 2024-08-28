let array = ["a", "b", "c", "d", "e"];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (left >= right) {
    return "not found";
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid].charCodeAt() > target.charCodeAt()) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

console.log(binarySearch(array, "d"));
