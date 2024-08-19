let arr = [5, 8, 9, 4, 3, 9, 3, 9, 0, 4];


let temp = 0;
let j = 0;

for(let i = 0; i < arr.length; i++){
  j = i - 1;
  temp = arr[i];
  while(j >= 0 && arr[j] > temp){
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = temp;
}

// console.log(arr);