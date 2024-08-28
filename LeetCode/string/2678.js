var countSeniors = function(details) {
    let count = 0
    for(let i =0 ;i<details.length ;i++){
        
        const age =Number( details[i][11] +details[i][12])
        if(age >60){
            count++
        }

    }
    return count
};