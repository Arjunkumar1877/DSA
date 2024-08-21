// Given an integer array nums, find the  subarray with the largest sum, and return its sum.


const nums =[-2,1,-3,4,-1,2,1,-5,4];

// Method - 1
function maxSubArray(nums){
    function helper(i){
        if(i === 0) return nums[0];
        let prevMax = helper(i - 1);
        return Math.max(nums[i], nums[i] + prevMax);
    }
    return helper(nums.length - 1);
}

console.log(maxSubArray(nums));



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