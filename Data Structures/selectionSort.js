// selection sort

let arr = [1, 5, 6,1, 2, 3, 1, 0];
for(let i = 0; i < arr.length; i++){
  let minindex = i

 for(let j= i+1 ;j<arr.length;j++){
  if(arr[minindex] > arr[j]){
  minindex = j
  }
  
 }
 if(minindex !==i){
  [arr[i] ,arr[minindex]] = [arr[minindex] , arr[i]]
 }

 
}
console.log(arr);


function selectionSort(arr){
     let min;
  
     for(let i = 0; i < arr.length; i++){
      min = i;
      for(let j = 0; j < arr.length; j++){
          if(arr[j] > arr[min]){
              min = j;
          }
          if(min !== i){
               let temp = arr[min];
               arr[min] = arr[i];
               arr[i] = temp;
          }
      }
     }
  
      return console.log(arr);
  }
  
  
  selectionSort(arr);
  