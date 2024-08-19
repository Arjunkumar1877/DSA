const arr = [8, 7, 4, 3,8, 9, 4, 2, 1, 3, 0];


function merge(arr, lb, mid, ub){
    let i = lb;
    let j = mid + 1;
    let k = lb;
    let b = [];

    while(i <= mid && j <= ub){
        if(arr[i] <= arr[j]){
            b[k++] = arr[i++];
        }else{
            b[k++] = arr[j++];
        }
    }

    while(i <= mid){
        b[k++] = arr[i++];
    }

    while(j <= ub){
        b[k++] = arr[j++];
    }

    for(let i = lb; i <= ub; i++){
        arr[i] = b[i];
    }
}


function mergeSort(arr, lb, ub){
    let mid = Math.floor((lb+ub)/2);
    if(lb < ub){
     mergeSort(arr, lb, mid);
     mergeSort(arr, mid+1, ub);
     merge(arr, lb, mid, ub);
    }
    return arr;
}
    
    
    
    console.log(mergeSort(arr, 0, arr.length-1));