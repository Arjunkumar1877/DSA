let str = "amma";

// function chechkPalintrom(str, n){
//     let str1 = "";
//     if(n < 1){
//         console.log(str1)
//         return str === str1
//     }

//     str1 += str[n];

//     return chechkPalintrom(n-1);
// }
// // console.log(chechkPalintrom(str, str.length-1));



function checkPalindrome(str, lb = 0, ub = str.length-1){
    if(lb > ub){
        return true;
    }

    if(str[lb] !== str[ub]){
        return false;
    }

    return checkPalindrome(str, lb += 1, ub -= 1);
}

console.log(checkPalindrome(str))

// function reverseString(str, newStr, ub = str.length-1){
//     if(newStr.length === str.length){
//         return newStr
//     }

//     newStr += str[ub];

//     return reverseString(str, newStr, ub -= 1);
// }

// console.log(reverseString("Arjun", "" ));