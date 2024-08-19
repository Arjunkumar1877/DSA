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
function fibonnacci(n){
    if(n < 2){
        return n;
    }

    // console.log(n)

    return fibonnacci(n-1) + fibonnacci(n-2)
}

// console.log(fibonnacci(4))






// Factorial 
// O(n)
function factorial(n){
    let result = 1;

    for(let i = 2; i <= n; i++){
        
       result = result * i
    }

    return result;
}
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
 function isPrime(n){
        if(n < 2){
            return false
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {        
            if(n % i === 0){
              return false;
            }
        }
    
        return true;
    }

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
function ispowerOfTwo(n){
  if(n < 1){
    return false;
  }

  return (n & (n-1)) === 0;
}

// console.log(ispowerOfTwo(1))
// console.log(ispowerOfTwo(2))
// console.log(ispowerOfTwo(8))









// Linear search
// O(n)
function LinearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }

    return -1;
}
// console.log(LinearSearch([12, 3, 4, 5, 7, 8], 7))









// console.log("object")
// Binary search
// O(logn)
function binarySearch(arr, target){
   let leftIndex = 0;
   let rightIndex = arr.length - 1;

   while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);

    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
    rightIndex = middleIndex - 1;
    }else{
        leftIndex = middleIndex + 1;
    }
   }

   return -1;

}

// recursive
function recursiveBinarySearch(arr, target){
    return Search(arr, target, 0, arr.length - 1);
}

function Search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);

    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
      return Search(arr, target, leftIndex, middleIndex - 1);
    }else{
        return Search(arr, target, middleIndex + 1, rightIndex);
    }
}


// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10, 12], 10));









// Bubble sort
// O(n^2) 
function bubbleSort(arr){
    let swapped;

    do{
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)


}
// const arr = [8, 20, -2, 45, 0, 3];
// bubbleSort(arr);
// console.log(arr)






// Insertion sort
// O(n^2)
// 
function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i- 1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }

        arr[j+1] = numberToInsert;
        }

}
// const arr = [9, 7, 3, 12, 1, 9, 5];
// InsertionSort(arr);
// console.log(arr);







// Quick sort
function partiton(arr, lb, ub){
    let pivot = arr[lb];
    let i = lb;
    let j = ub;

    while(i < j){
        do{
            i++;
        }while(arr[i] <= pivot);

        do {
            j--;
        } while (arr[j] > pivot);

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
};

function QuickSort(arr, lb, ub){
    if(lb < ub){
        let j = partiton(arr, lb, ub);
        QuickSort(arr, lb, j);
        QuickSort(arr, j+1, ub);
    }


    return arr
}

function QuickSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length-1; i++){
    if(arr[i] < pivot){
        left.push(arr[i]);
    }else{
        right.push(arr[i]);
    }
    }

        return [...QuickSort(left), pivot, ...QuickSort(right)];
}
// const arr = [9, 7, 4, -9, 3, 1, 0];
// console.log(QuickSort(arr));












// Merge sort
// let b = []
function merge(arr, lb, mid, ub){

    let i = lb;
    let j = mid + 1;
    let k = lb;

    while(i <= mid && j <= ub){
      if(arr[i] <= arr[j]){
        b[k] = arr[i];
        i++;
      }else{
        b[k] = arr[j];
        j++;
      }

      k++;
    }

    while(i <= mid){
        b[k] = arr[i];
        i++,k++;
    }

    while(j <= ub){
        b[k] = arr[j];
        j++,k++;
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
}

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



















const arr = [1, 4, 6, 3, 2, 8, 2, 44, 7, 7, 9, 66, 1, 1]
// Find the larget Elementin the Array 
function largest(arr){
   let num = arr[0];

   for(let i = 1; i < arr.length; i++){
   
    if(num < arr[i]){
        num = arr[i];
    }
   }
   return console.log(num)

}
// largest(arr);








// Reverse an array 
function revereseArray(arr){

    let poped = [];
    for (let i = 0; i < arr.length; i++) {
        poped.unshift(arr[i])
    }

    return console.log(poped)
}
// revereseArray(arr);








// Find second larget element
function secondLargetElement(arr){
    let secondLarget = 0;
    let largest = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(largest < arr[i]){
            secondLarget = largest;
            largest = arr[i];
        }
    }

    return console.log(secondLarget)
}
// secondLargetElement(arr)








// Remove duplicates from an array 
function removeDuplicates(arr){
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        if(!newArray.includes(arr[i])){
             newArray.push(arr[i]);
        }
    }

    return console.log(newArray);
}
// removeDuplicates(arr);








// Check the array is sorted on accesinfing order
function checkSort(arr){
    let num = arr[0];
    let sort = 0;

    for(let i = 1; i < arr.length; i++){
        console.log(num , " " , arr[i])
        if(num < arr[i]){
            num = arr[i];
        }else{
            sort = 1;
        }
    }

    console.log(sort)
   return console.log(sort === 0)
}

// checkSort([1, 2, 9, 4, 5])










// Rotate Array
function rightRotateArray(arr, k){
    // k = k % arr.length
    for(let i = 0; i <  k; i++){
        arr.push(arr.shift())
    }

    return console.log(arr)
}
// rightRotateArray([1, 2, 3, 4, 5], 1);













// merge two sorted array 
function mergeSortedArrays(arr1, arr2) {
   const newArray = arr1.concat(arr2);
   console.log(newArray);
  return  newArray.sort(); 
  }
  
//   console.log(mergeSortedArrays([1,2,3], [1, 2,3, 4, 5, 6]))










// find the missing number
function subarraySum(arr, sum) {
   let start = 0;
   let currentSum = 0;

   for(let i = 0; i < arr.length; i++){
    currentSum += arr[i];
    while(currentSum > sum && i >= start){
         currentSum -= arr[start++];
    }

    if(currentSum === sum) return arr.slice(start, i + 1);

   }

   return []

}
// console.log(  subarraySum([1, 3, 4, 5, 6, 7], 11));








// Find all the pairs with the gives the given sum 
function findPairsWithSum(arr, sum) {
  let pairs = [];
  let set = new Set();
  for(let num of arr){
    let target = sum - num;
    if(set.has(target)){
        pairs.push([num, target]);
    }
    set.add(num)
  }

  return pairs
  }
//console.log(findPairsWithSum([1, 2, 3, 4, 5, 6, 4, 3], 10));













// Move all zeros to the end
function moveZeros(arr){
    arr.sort();
let zer
    for(let i = 0; i < arr.length; i++){
        
     if(arr[i] === 0){
        arr.shift();
        arr.push(0)
     }
    }

    return console.log(arr)
}
// moveZeros([1, 3, 0, 5, 3, 1, 0, 5, 0, 0])













// Find the kth larget element 
function kthLargest(arr, k){
    let num = arr[0];

    for(let i = 1; i <= k; i++){
         if(num < arr[i]){
            num = arr[i];
         }
    }

    return console.log(num);
}

function kthLargest(arr, k) {
    arr.sort((a, b) => b - a);
    return console.log(arr[k - 1])
  }
// kthLargest([1, 2, 4, 6, 55, 66, 77, 88,0], 4);













// Find the missing number in the array
function missingNumber(arr){
    arr.sort();
    console.log(arr)
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] !== i+1){
            return i+1;
        }
    }
}
function missingNumber(arr){
  let n = arr.length + 1;
  let total = (n * (n + 1))/2;
  let sum = arr.reduce((a, b)=> a + b, 0);
  return total - sum;
}
// console.log(missingNumber([1, 2, 4, 5, 6, 7, 8]));











const obj = {
    a: 5,
    b: {
        c: 6,
        d: 9
    },
    u: 90,
    f: {
        h: 7,
        k: {
            l: 77
        }
    }
}



function recurse(obj){
    let sum = 0;
   for(const key in obj){
    if(typeof obj[key] === 'object'){
        sum += recurse(obj[key]);
    }else if(typeof obj[key] === 'number'){
        sum += obj[key]
    }
   }

   return sum;

}


// console.log(recurse(obj));


const str = "wjhdsfagsdhyuetwrweasbcasldweirwebcaksdckjuuuuuuuuaaaaaaaabsdcbaskjnsdoooooooougfajsdbcabjbisdhfiushiushd"
function findVowels(str){
    const newObj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    for(let value of str){
        if(newObj[value] === 0){
            newObj[value] = 1;
        }else if(newObj[value]){
            newObj[value]++;
        }
    }

    return newObj;
}


// console.log(findVowels(str))





const nums = [1,2,3,34,54,54,36,,54,654, () => console.log("hoi") , null  ,undefined , {} ,[] ,"oi"];


function reduceSum(arr){
    const num = arr.reduce((acc, curr)=> acc + (typeof curr === 'number' ? curr : 0), 0);

    return num;
}

// console.log(reduceSum(nums));






function binarySearch(arr, target){
    return Search(arr, target, 0, arr.length-1);
}


function Search(arr, target, left , right){
    if(left > right){
        return "Not available"
    }

    const middleElem = Math.floor((left + right)/2);
    if(arr[middleElem] === target){
        return middleElem+1;
    }

    if(target < arr[middleElem]){
        return Search(arr,target, left, middleElem-1);
    }else{
        return Search(arr, target, middleElem+1, right);
    }
}


// console.log(binarySearch([1,2,3,4,5], 5));




// Creating an ArrayBuffer of 16 bytes (128 bits)
let buffer = new ArrayBuffer(128);

// Creating a view of the buffer as an Int32Array (4 bytes per element)
let int32View = new Int32Array(buffer);

// Writing data to the buffer
int32View[0] = 42;
int32View[1] = 123456789;
int32View[2] = -42;
int32View[3] = 0xdeadbeef; // Hexadecimal representation
int32View[4] = 0xdeadbeef; // Hexadecimal representation
int32View[5] = 0xdeadbeef; // Hexadecimal representation
int32View[6] = 0xdeadbeef; // Hexadecimal representation
int32View[7] = 0xdeadbeef; // Hexadecimal representation
int32View[8] = 0xdeadbeef; // Hexadecimal representation
int32View[9] = 0xdeadbeef; // Hexadecimal representation
int32View[10] = 0xdeadbeef; // Hexadecimal representation
int32View[11] = 0xdeadbeef; // Hexadecimal representation
int32View[12] = 0xdeadbeef; // Hexadecimal representation
int32View[13] = 0xdeadbeef; // Hexadecimal representation
int32View[14] = 0xdeadbeef; // Hexadecimal representation
int32View[15] = 0xdeadbeef; // Hexadecimal representation
int32View[16] = 0xdeadbeef; // Hexadecimal representation

console.log(int32View);
// Outputs: Int32Array(4) [ 42, 123456789, -42, -559038737 ]

let sparseArray = [];
sparseArray[3] = 'apple';
sparseArray[7] = 'banana';

console.log(sparseArray); // [ <3 empty items>, 'apple', <3 empty items>, 'banana' ]
console.log(sparseArray.length); // 8
for (let i = 0; i < sparseArray.length; i++) {
   
      console.log(i, sparseArray[i]);
   
  }
  
  // Output:
  // 3 'apple'
  // 7 'banana'
  