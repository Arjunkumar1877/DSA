// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 
const arr = [1, 2, 3];


// Method - 1
function findSubsets(arr){
    let newArray = [[]];

    for(let num of arr){
        let newSubset = [];
        for(let subNum of newArray){
            // console.log([subNum, num])
            newSubset.push([...subNum, num]);
        }

        console.log(newSubset)
        newArray.push(...newSubset);
    }

    return console.log(newArray);
}


// findSubsets(arr);









// Method - 2

function recursiveFindSubset(arr){
    let result = [];

    function backtrack(start, current){
        result.push([...current]);

        for(let i = start; i < arr.length; i++){
            current.push(arr[i]);
            backtrack(i+1, current);
            current.pop();
        }
    }

    backtrack(0, []);
  return console.log(result);
}

recursiveFindSubset(arr);