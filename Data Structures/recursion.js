let str = "Arjun";

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



let  words = ["abc","car","ada","racecar","cool"];


var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++){
        console.log(words[i] , " " ,words[i].split('').reverse().join(''))
        if(words[i] === words[i].split('').reverse().join('')){
            
            return words[i]
        }
    }

    return "no palinrom"
};
console.log(firstPalindrome(words))