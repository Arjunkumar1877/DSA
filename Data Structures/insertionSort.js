<<<<<<< HEAD
let arr = [1, 5, 6,1, 2, 3, 1, 0];


let num;
let j = 0;

for(let i = 0; i < arr.length; i++){
  num = arr[i];
  j = i-1;
  while(j >= 0 && arr[j] > num){
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = num;
}

console.log(arr)
=======
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
>>>>>>> efe22088323874b05bb77934487bafadc5f16c4e
