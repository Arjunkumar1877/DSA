
let arr = [5, 7, 8, 0, 1, 3, 4, 0,9]

// function QuickSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let left = [];
//     let right = [];
//     let pivot = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [...QuickSort(left), pivot, ...QuickSort(right)];
// }


// console.log(QuickSort(arr))

function Sort(arr, lb, ub){
   let i = lb;
   let j = ub;
   let pivot = arr[lb];

   while(i <= j){
     
    while(i <= j && pivot >= arr[i]){
        i++;
    }

    while(i <= j && pivot < arr[j]){
        j--;
    }

    if(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
   }

   [arr[lb], arr[j]] = [arr[j], arr[lb]];

   return j;

}


function QuickSort(arr, lb, ub){
    if(lb >= ub){
        return;
    }

    let mid = Sort(arr, lb, ub);
    QuickSort(arr, lb, mid-1);
    QuickSort(arr, mid+1, ub);
    return arr;
}

// console.log(QuickSort(arr, 0, arr.length-1))