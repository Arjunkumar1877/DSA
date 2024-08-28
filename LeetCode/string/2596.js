var vowelStrings = function(words, left, right) {

    const set = new Set(["a" ,"e" ,"i" ,"o" ,"u"])
    let count = 0
    for(let i = left ; i <= right ;i++){
      let f = words[i]
      if(set.has(f[0]) && set.has(f[f.length-1])){
        count++

      }
    }
  return count
    
};