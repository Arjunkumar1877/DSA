let arr = [1, 2, 3];
let k = 3;


function subArraySums(arr, k){
    let counter = 0;

    for(let i = 0; i  < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
   
             if(sum === k) counter++;
        }
    }

    return counter;

}

console.log(subArraySums(arr, k))