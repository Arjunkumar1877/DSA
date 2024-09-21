class QueueUsingStack{
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
        this.size = 0;
    }

    enqueue(data){
        this.queue1.push(data);
        this.size++;
    }

    dequeue(){
       if(this.queue2.length === 0){
        while(this.queue1.length > 0){
            this.queue2.push(this.queue1.pop());
           }
       }

       return this.queue2.pop()
    }
}

const QS = new QueueUsingStack();

QS.enqueue(100);
QS.enqueue(200);
QS.enqueue(300);
QS.enqueue(400);
QS.enqueue(500);

console.log(QS.dequeue());

QS.dequeue();
QS.dequeue();


console.log(QS);