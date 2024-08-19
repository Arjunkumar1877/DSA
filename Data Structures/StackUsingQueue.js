class StackUsingQueue{
    constructor(){
        this.stack1 = [];
        this.size = 0;
    }


    push(data) {
        this.size++;
        this.stack1.push(data);
    }

    pop(){
        let temp = [];
        if(this.stack1.length !== 0){
            while(this.stack1.length > 1){
                temp.push(this.stack1.shift());
            }
            console.log(this.stack1)
            let poppedElement = this.stack1.shift();
            this.stack1 = temp;
            return poppedElement;
        }
    }

}

const SQ = new StackUsingQueue();
SQ.push(100);
SQ.push(200);
SQ.push(300);
SQ.push(400);
SQ.push(500);
SQ.pop();
SQ.pop();
SQ.pop();
console.log(SQ);
