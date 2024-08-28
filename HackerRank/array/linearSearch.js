//linear search

const array = [1, 2, 5, 4, 6, 7];

function linearSearch(ar, target) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(array, 2));





