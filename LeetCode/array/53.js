// Given an integer array nums, find the  subarray with the largest sum, and return its sum.


const nums = [-2,1,-3,4,-1,2,1,-5,4];

// Method - 1
function MaxSubArray(nums){
    let currentMax = nums[0];
    let globalMax = nums[0];

    for(let i = 0; i < nums.length - 1; i++){
        currentMax = Math.max(nums[i], currentMax + nums[i]);

        if(currentMax > globalMax){
            globalMax = currentMax;
        }
    }
    return globalMax;
}

console.log(MaxSubArray(nums));


// Method - 2;
function recursiveMaxSubArray(nums){
    let currentMax = nums[0];
    let globalMax = nums[0];

    for(let i = 1; i < nums.length-1; i++){
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}


console.log(recursiveMaxSubArray(nums))