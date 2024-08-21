
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 



const arr = [1,7,3,6,5,6];
// Method - 1;
// const arr = [1,2,3,4, 7, 7, 3];

function findPivot(arr){
    let total = arr.reduce((arr, curr)=> arr + curr, 0);
    let leftSum = 0;

    for(let i = 0; i < arr.length; i++){
        rightSum = total - leftSum - arr[i];
        if(rightSum === leftSum) return i;
        leftSum += arr[i];
    }

    return -1
}


// console.log(findPivot(arr));



function recursiveFindPivot(arr){
    function pivotHelper(i, leftSum, totalSum){
        if(i >= arr.length) return -1;
        let rightSum = totalSum - leftSum - arr[i];
        if(leftSum === rightSum) return i;
        return pivotHelper(i+1, leftSum +arr[i], totalSum);
    }
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    return pivotHelper(0, 0, totalSum); 
}

console.log(recursiveFindPivot(arr));