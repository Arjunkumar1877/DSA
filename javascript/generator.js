function* simpleGenerator() {
    console.log('Generator started');
    yield 1;
    console.log('Resumed after first yield');
    yield 2;
    console.log('Resumed after second yield');
    yield 3;
    console.log('Generator finished');
}

const gen = simpleGenerator();

console.log(gen.next());  
console.log(gen.next()); 
console.log(gen.next());  
console.log(gen.next()); 












function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteGen = infiniteSequence();

console.log(infiniteGen.next().value);
console.log(infiniteGen.next().value);
console.log(infiniteGen.next().value);
console.log(infiniteGen.next().value);




















// function* customGenerator() {
//     const input1 = yield 'First output';
//     console.log('Received input:', input1);
    
//     const input2 = yield 'Second output';
//     console.log('Received input:', input2);
    
//     return 'Done';
//   }
  
//   const gen = customGenerator();
  
//   console.log(gen.next());              
//   console.log(gen.next('Input for 1')); 
//   console.log(gen.next('Input for 2')); 
  


















function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
  }
  
  const rangeGen = range(1, 5);
  
  for (const value of rangeGen) {
    console.log(value);  
  }





  
const variable = (function hello(hai) {
    console.log(hai)
    let name = "arjun";
    let i = 0;
   return {
    getPrivate:function(){
      i++
      return i
    }
   }
  })("hello");
  
  
  console.log(variable.getPrivate());
  console.log(variable.getPrivate());
  console.log(variable.getPrivate());
  console.log(variable.getPrivate());
  console.log(variable.getPrivate());
  
  
  
  
  
  
  
  
  
  
  
  
  (function(name) {
    console.log('Hello, ' + name + '!');
  })('Arjun');
  
  
  
  
  
  
  
  
  
  
  (function() {
    const name = 'IIFE';
    console.log('Inside IIFE: ' + name);
  })();
  
  const name = 'Global';
  console.log('Outside IIFE: ' + name);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const result = (function() {
    const a = 5;
    const b = 10;
    return a + b;
  })();
  
  console.log(result);  // Outputs: 15
  