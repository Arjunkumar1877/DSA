
// const server = http.createServer((req, res)=>{
 
// })


// server.listen(3000, ()=>{
//     console.log("server connected");
// })


// const data = fs.readFile('input.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// })





// jwt.verify(token,'secretkey');



// minNode(current){
//     if(current.left === null){
//         return current.data;
//     }else{
//         return minNode(current.left); 
//     }
// }






const obj = {a: { b: { c: {d: 67} } }};



const { a: { b } } = obj;
console.log(b)
