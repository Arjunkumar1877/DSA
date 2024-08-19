

let arr = [2, 6, 1, 56, 7, 8, 9, 21, 1];

for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = 0; j < arr.length; j++){
        if(arr[min] < arr[j]){
            i = j;
        }

        if(min !== i){
            [arr[min], arr[j]] = [arr[j], arr[min]];
        }
    }
}

// console.log(arr)