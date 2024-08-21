
let nums1 = [1,2, 6, 0, 0,3,0,0,0], nums2 = [2,5,6];

function merge(nums1, m, nums2, n){
    let i = m - 1, j = n - 1, k = m + n - 1;
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];
        }else{
            nums1[k--] = nums2[j--];
        }
    }
    while(j >= 0){
        nums1[k--] = nums2[j--];
    }
}

merge(nums1, nums1.length, nums2, nums2.length);

console.log(nums1)
console.log(nums2)


// function mergeArrays(num1, num2){
//     let num3 = [...num1, ...num2];
//     num3.sort();
//     console.log(num3)
//      let n = num3.length;
//     let num4 = num3.filter((num) => num !== 0);
//     return console.log(num4);
// }


// mergeArrays(nums1, nums2);

