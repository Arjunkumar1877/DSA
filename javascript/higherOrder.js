
// Higher-Order Function that Takes a Function as an Argument
function higherOrder(func1, name) {
  return func1(name);
}

function callback(name) {
  return name;
}

const hey = higherOrder(callback, "name Arjun");
console.log(hey);








// Higher-Order Function that Returns a Function
function multipler(factor){
    return function (number){
      return function (num){
        return num * factor * number;
      }
    }
  }
  
  
  // const double1 = multipler(5);
  // const double2 = double1(5);
  // const ans = double2(3);
  
  // const ans = multipler(5)(5)(3)
  
  console.log(ans)