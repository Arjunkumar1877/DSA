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