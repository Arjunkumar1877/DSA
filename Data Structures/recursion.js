let str = "amma";

function chechkPalintrom(str, n){
    let str1 = "";
    if(n < 1){
        console.log(str1)
        return str === str1
    }

    str1 += str[n];

    return chechkPalintrom(n-1);
}
// console.log(chechkPalintrom(str, str.length-1));


function chechkPalintrom(words, lb = 0, ub = words.length - 1){
    if(lb > ub){
        return true;
    }

    if(words[lb] !== words[ub]){
        return false;
    }

    return chechkPalintrom(words, lb += 1, ub -= 1);
}

console.log(chechkPalintrom(str))