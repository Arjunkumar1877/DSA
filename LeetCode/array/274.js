const arr = [3,0,6,1,3, 5, 4, 6,5];

// var hIndex = function (arr) {
//   const n = arr.length;
//   const count = new Array(n + 1).fill(0);
//   console.log(count);

//   for (let c of arr) {
//     if (c >= n) {
//       count[n]++;
//     } else {
//       count[c]++;
//     }
//   }

//   console.log(count);

//   let total = 0;
//   for (let i = n; i >= 0; i--) {
//     total += count[i];
//     console.log(total + "  " + i);
//     if (total >= i) {
//       return console.log(i);
//     }
//   }
// };

// hIndex(arr);

// function hIndex(arr){
//     let n = arr.length;
//     let count = new Array(n + 1).fill(0);

//     for(let c of arr){
//         if(c >= n){
//             count[n]++;
//         }else{
//             count[c]++;
//         }
//     }

//     let total = 0;

//     for(let i = n; i >= 0; i--){
//         total += count[i];
//         if(total >= i){
//             return console.log(i)
//         }
//     }

//     return 0;


// }

//     hIndex(arr);



let obj = {};

for(let num of arr){
   if(!obj[num]){
    obj[num] = 0;
   }
}

let k;
for(let num of Object.keys(obj)){
  k = arr.shift()

  if(num > k){
    obj[num]++;
  }


}

// let num = 0;


console.log(obj)

