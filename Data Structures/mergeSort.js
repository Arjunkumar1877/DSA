let arr = [2, 5, 7, 2, 2, 1, 9, 6];

// function merge(arr, lb, mid, ub) {
//   let i = lb;
//   let j = mid + 1;
//   let k = lb;
//   let l = [];

//   while (i <= mid && j <= ub) {
//     if (arr[i] <= arr[j]) {
//       l[k++] = arr[i++];
//     } else {
//       l[k++] = arr[j++];
//     }
//   }

//   while (i <= mid) {
//     l[k++] = arr[i++];
//   }

//   while (j <= ub) {
//     l[k++] = arr[j++];
//   }

//   for (let i = lb; i <= ub; i++) {
//     arr[i] = l[i];
//   }
// }

// function mergeSort(arr, lb, ub) {
//   let mid = Math.floor((lb + ub) / 2);

//   if (lb < ub) {
//     mergeSort(arr, lb, mid);
//     mergeSort(arr, mid + 1, ub);
//     merge(arr, lb, mid, ub);
//   }
//   return arr;
// }

// console.log(mergeSort(arr, 0, arr.length));

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const lefArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);

//   return merge(mergeSort(lefArr), mergeSort(rightArr));
// }

// function merge(lefArr, rightArr) {
//   const sortedArr = [];

//   while (lefArr.length && rightArr.length) {
//     if (lefArr[0] <= rightArr[0]) {
//       sortedArr.push(lefArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...lefArr, ...rightArr];
// }

// console.log(mergeSort(arr));
//const arr = [8, 7, 4, 3, 8, 9, 4, 2, 1, 3, 0];

// function merge(arr, lb, mid, ub) {
//   let i = lb;
//   let j = mid + 1;
//   let k = lb;
//   let b = [];

//   while (i <= mid && j <= ub) {
//     if (arr[i] <= arr[j]) {
//       b[k++] = arr[i++];
//     } else {
//       b[k++] = arr[j++];
//     }
//   }

//   while (i <= mid) {
//     b[k++] = arr[i++];
//   }

//   while (j <= ub) {
//     b[k++] = arr[j++];
//   }

//   for (let i = lb; i <= ub; i++) {
//     arr[i] = b[i];
//   }
// }

// function mergeSort(arr, lb, ub) {
//   let mid = Math.floor((lb + ub) / 2);
//   if (lb < ub) {
//     mergeSort(arr, lb, mid);
//     mergeSort(arr, mid + 1, ub);
//     merge(arr, lb, mid, ub);
//   }
//   return arr;
// }

// console.log(mergeSort(arr, 0, arr.length - 1));


function merge(arr, lb, mid, ub){
  let i = lb;
  let j = mid+1;
  let k = lb;
  let b = [];

  while(i <= mid && j <= ub){
    if(arr[i] <= arr[j]){
      b[k] = arr[i++];
    }else{
      b[k] = arr[j++];
    }
    k++;
  }

  while(i <= mid){
    b[k++] = arr[i++];
  }
  while(j <= ub){
    b[k++] = arr[j++];
  }

  for(let i = lb; i <= ub ;i++){
    arr[i] = b[i];
  }

}


function MergeSort(arr, lb, ub){
  let mid = Math.floor((lb+ub)/2);

  if(lb < ub){
    MergeSort(arr, lb, mid);
    MergeSort(arr, mid+1, ub);
    merge(arr, lb, mid, ub);
  }
  return arr;
}

console.log(MergeSort(arr, 0, arr.length-1))