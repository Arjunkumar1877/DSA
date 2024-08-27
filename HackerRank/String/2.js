//www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
// https: function camelcase(s) {
//   let count = 1;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].charCodeAt() < 90) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(camelcase("oneTwoThree"));




function camelCase(str){
  let count = 1;

  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) < 90){
      count++;
    }
  }

  return console.log(count);
}

camelCase("hoiHeyHello")