// O(n)
// function summation(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }

//     return sum
// }

// O(1)
// function summation(n){
//     return (n * (n + 1)) / 2 ;
// }
// console.log(summation(10))




// Fibonnacci sequence
// O(n)
// function fibonnacci(n){
//     let result = [0, 1];

//     for(let i = 2; i <= n; i++){
//        result[i] = result[i-1] + result[i-2];
//     }

//     return result
// }

// Recursion
// function fibonnacci(n){
//     if(n < 2){
//         return n;
//     }

//     // console.log(n)

//     return fibonnacci(n-1) + fibonnacci(n-2)
// }

// console.log(fibonnacci(4))






// Factorial 
// O(n)
// function factorial(n){
//     let result = 1;

//     for(let i = 2; i <= n; i++){
        
//        result = result * i
//     }

//     return result;
// }
// // Recursion
// // function factorial(n){
// //     if(n === 0){
// //         return 1; 
// //     }

// //     return n * factorial(n-1)
// // }
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))







// Prime number
// O(n)
// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for (let i = 2; i < n; i++) {        
//         if(n % i === 0){
//           return false;
//         }
//     }

//     return true;
// }
// O(logn)
//  function isPrime(n){
//         if(n < 2){
//             return false
//         }
//         for (let i = 2; i <= Math.sqrt(n); i++) {        
//             if(n % i === 0){
//               return false;
//             }
//         }
    
//         return true;
//     }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))








// Power of 2
// O(logn)
// function ispowerOfTwo(n){
//     if(n < 1){
//         return false;
//     }

//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }
// O(1)
// function ispowerOfTwo(n){
//   if(n < 1){
//     return false;
//   }

//   return (n & (n-1)) === 0;
// }

// console.log(ispowerOfTwo(1))
// console.log(ispowerOfTwo(2))
// console.log(ispowerOfTwo(8))









// Linear search
// O(n)
// function LinearSearch(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }

//     return -1;
// }
// console.log(LinearSearch([12, 3, 4, 5, 7, 8], 7))










// Binary search
// O(logn)
// function binarySearch(arr, target){
//    let leftIndex = 0;
//    let rightIndex = arr.length - 1;

//    while(leftIndex <= rightIndex){
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2);

//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }

//     if(target < arr[middleIndex]){
//     rightIndex = middleIndex - 1;
//     }else{
//         leftIndex = middleIndex + 1;
//     }
//    }

//    return -1;

// }

// recursive
// function recursiveBinarySearch(arr, target){
//     return Search(arr, target, 0, arr.length - 1);
// }

// function Search(arr, target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return -1;
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex)/2);

//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }

//     if(target < arr[middleIndex]){
//       return Search(arr, target, leftIndex, middleIndex - 1);
//     }else{
//         return Search(arr, target, middleIndex + 1, rightIndex);
//     }
// }


// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10, 12], 10));









// Bubble sort
// O(n^2) 
// function bubbleSort(arr){
//     let swapped;

//     do{
//         swapped = false
//         for(let i = 0; i < arr.length - 1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     }while(swapped)


// }
// const arr = [8, 20, -2, 45, 0, 3];
// bubbleSort(arr);
// console.log(arr)






// Insertion sort
// O(n^2)
// 
// function InsertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let numberToInsert = arr[i];
//         let j = i- 1;
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }

//         arr[j+1] = numberToInsert;
//         }

// }
// const arr = [9, 7, 3, 12, 1, 9, 5];
// InsertionSort(arr);
// console.log(arr);







// Quick sort
// function partiton(arr, lb, ub){
//     let pivot = arr[lb];
//     let i = lb;
//     let j = ub;

//     while(i < j){
//         do{
//             i++;
//         }while(arr[i] <= pivot);

//         do {
//             j--;
//         } while (arr[j] > pivot);

//         if(i < j){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }

//     let temp = arr[lb];
//     arr[lb] = arr[j];
//     arr[j] = temp;

//     return j;
// };

// function QuickSort(arr, lb, ub){
//     if(lb < ub){
//         let j = partiton(arr, lb, ub);
//         QuickSort(arr, lb, j);
//         QuickSort(arr, j+1, ub);
//     }


//     return arr
// }

// function QuickSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i = 0; i < arr.length-1; i++){
//     if(arr[i] < pivot){
//         left.push(arr[i]);
//     }else{
//         right.push(arr[i]);
//     }
//     }

//         return [...QuickSort(left), pivot, ...QuickSort(right)];
// }
// const arr = [9, 7, 4, -9, 3, 1, 0];
// console.log(QuickSort(arr));












// Merge sort
// let b = []
// function merge(arr, lb, mid, ub){

//     let i = lb;
//     let j = mid + 1;
//     let k = lb;

//     while(i <= mid && j <= ub){
//       if(arr[i] <= arr[j]){
//         b[k] = arr[i];
//         i++;
//       }else{
//         b[k] = arr[j];
//         j++;
//       }

//       k++;
//     }

//     while(i <= mid){
//         b[k] = arr[i];
//         i++,k++;
//     }

//     while(j <= ub){
//         b[k] = arr[j];
//         j++,k++;
//     }
   
//     for(let i = lb; i <= ub; i++){
//         arr[i] = b[i];
//     }
// }

// function mergeSort(arr, lb, ub){
//     let mid = Math.floor((lb+ub)/2);

//     if(lb < ub){
//         mergeSort(arr, lb, mid);
//         mergeSort(arr, mid+1, ub);
//         merge(arr, lb, mid, ub);
//     }
// }


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2);
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr){
//     const sortedArr = [];
//     while(leftArr.length && rightArr.length){
//         while(leftArr.length && rightArr.length){
//             if(leftArr[0] <= rightArr[0]){
//                 sortedArr.push(rightArr.shift());
//             }else{
//                 sortedArr.push(rightArr.shift());
//             }
//         }
//     }
//     return  [...sortedArr, ...leftArr, ...rightArr]
// }

// let arr = [7, 8, 9, 5, 9, 3, 2, -8, -4];
// mergeSort(arr, 0, arr.length-1);
// console.log(arr)
// console.log(mergeSort(arr));







// Cartesian product 
// O(mn)
// function CaresianProduct(arr1, arr2){
//     let result = [];

//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             result.push([arr1[i], arr2[j]]);
//         }
//     }

//     return result
// }
// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(CaresianProduct(arr1, arr2))










// Climing starecase
// O(n);
// function ClimbingStarcase(n){
//     const noOfDays = [1, 2];
//     for(let i = 2; i <= n; i++){
//         noOfDays[i] = noOfDays[i - 1] + noOfDays[i - 2]
//     }

//     return noOfDays[n - 1];
// }
// console.log(ClimbingStarcase(1));
// console.log(ClimbingStarcase(2));
// console.log(ClimbingStarcase(3));
// console.log(ClimbingStarcase(4));
// console.log(ClimbingStarcase(5));











// Tower of Hannoi
// function TowerOfHannoi(n, fromRod, toRod, usingRod){
//     if(n === 1){
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//         return;
//     }    

//     TowerOfHannoi(n-1, fromRod, usingRod, toRod);
//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
//     TowerOfHannoi(n-1, usingRod, toRod, fromRod);
// }
// TowerOfHannoi(3, 'A', 'C', 'B');


































