const arr = [2, 5, 7, 4, 1, 8, 9, 0, 4];


function QuickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];

    for(let i = 1; i < arr.length; i++){
      if(arr[i] > pivot){
        left.push(arr[i])
      }else{
        right.push(arr[i]);
      }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)];

}


console.log(QuickSort(arr));



