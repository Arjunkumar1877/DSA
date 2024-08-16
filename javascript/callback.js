
// callback
function fetchData(callback){
     setTimeout(()=>{
    callback("Data 2");
     }, 3000);
};


function handleData(data){
    console.log(`data cam ${data}`)
}






// callback hell
function first(callback){
  setTimeout(()=>{
   console.log('First operation');
   callback("first data");
  },1000)
}



function second(callback){
    console.log("Second operation");
    setTimeout(()=>{
        callback("second data")
    },2000)
}

function third(callback){
    console.log("third opertation");
    setTimeout(()=>{
       callback("third data");
    },3000);
}


function four(){
    console.log("fourth function")
}



first(()=>{
    second(()=>{
        third(()=>{
            four()
        });
    })
})