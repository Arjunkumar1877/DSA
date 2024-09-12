

let allowed = "ab";
let  words = ["ad","bd","aaab","baa","badab"];


function findConsistendWordCount(allowed, words){
    let count = 0;
   
    for(let i = 0; i < words.length; i++){
        // let words[i] = words[i].split('');
        // console.log(words[i]);
        let isEqual  = true;
        for(let j = 0; j < words[i].length; j++){
            console.log(allowed.includes(words[i][j]))
            console.log(words[i][j]);
            if(!allowed.includes(words[i][j])){
                isEqual = false;

            }
        }

        console.log('\n')
        if(isEqual){
            count++;
        }

    }

    console.log(count)

}

findConsistendWordCount(allowed, words)