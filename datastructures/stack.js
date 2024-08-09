 class Stack{
    constructor(){
        this.item = [];
    }

    pop(){
        return this.item.pop();
    }

    push(data){
        return this.item.push(data); 
    }

    size(){
        return this.item.length;
    }

    display(){
        console.log(this.item);
    }
 }

 const stack = new Stack();

 stack.push(5);
 stack.push(9);
 stack.push(87);
 stack.push(8);
stack.display();
 stack.pop();
stack.display();
console.log(stack.size());
