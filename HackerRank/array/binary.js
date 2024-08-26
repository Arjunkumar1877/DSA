const arr = [1, 2, 3, 4, 5, 6];

function binarySearch(ar, target) {
  let left = 0;
  let right = ar.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (ar[mid] === target) {
      return mid;
    } else if (ar[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, 2));


