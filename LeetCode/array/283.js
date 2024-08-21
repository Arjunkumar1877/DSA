// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


const arr =  [0,1,0,3,12];
function recursiveMoveZeroes(nums){
    function helper(index, count){
        if(index === nums.length) return;
        if(nums[index] !== 0){
            [nums[count], nums[index]] = [nums[index], nums[count]];
            helper(index + 1, count + 1);
        }else{
            helper(index + 1, count);
        }
    }
    helper(0, 0);
}


// console.log(moveZeroes(arr));
// console.log(arr);



function moveZeroes(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[count], nums[i]] = [nums[i], nums[count]];
            count++;
        }
    }
}

// moveZeroes(arr)
console.log(arr)