function partititon(arr, lb, ub){
    let pivot = arr[lb];
    let i = lb;
    let j = ub;
   
    while(i <= j){
       while(i <= j && arr[i] <= pivot){
           i++;
       }
   
       while(i <= j && arr[j] > pivot){
           j--;
       }
   
       if(i < j){
           let temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
    }
   
    let temp = arr[lb];
    arr[lb] = arr[j];
    arr[j] = temp;
   
    return j;
   
   }
   
   
   function QuickSort(arr, lb, ub){
     if(lb >= ub){
       return 
     }
   
     let j = partititon(arr, lb, ub);
     QuickSort(arr, lb, j-1);
     QuickSort(arr, j+1, ub);
     return arr;
   }
   
   
   
 let arr = [5, 6, 7, 4, 3, 2, 0, 4, 1]
 
 
 console.log(QuickSort(arr, 0, arr.length-1));
 
 
 function quickSort(arr){
 
   if(arr.length < 2){
       return arr
   }
 let pivot = arr[arr.length -1 ]
 
 let left = []
 let right = []
 
 for (let i = 0; i < arr.length-1; i++) {
    if(arr[i] < pivot){
       left.push(arr[i])
    }else{
       right.push(arr[i])
    }
   
 }
 return [...quickSort(left) ,pivot,...quickSort(right)]
 
 }
 
 console.log(quickSort(arr))