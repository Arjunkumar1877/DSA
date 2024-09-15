const num = 100;


let convertToBase7 = (num)=>{
    if(num === 0){
        return 0;
    }

    let temp = Math.abs(num);
    // console.log(temp)
    let res = '';

    while(temp !== 0){
        res = temp % 7 + res;
        temp = Math.floor(temp/7);
        // console.log(res + "  res")
        // console.log(temp + "  temp")


    }

    return num >= 0 ? res : `-${res}`;
}


function convertBase(num){
    return num.toString(7);
}


console.log(convertBase(num))

console.log(convertToBase7((num)))