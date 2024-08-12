
// ----------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- QUEUE ARRAY ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------

// class Queue{
//     constructor(){
//         this.item = [];
//     }

//     enqueue(data){
//        return this.item.push(data);
//     }

//     dequeue(){
//       return this.item.shift();
//     }

//     size(){
//         return console.log(this.item.length);
//     }

//     display(){
//         return console.log(this.item);
//     }

//     isEmpty(){
//         return this.item.length === 0;
//     }

//     peek(){
//         console.log(this.item[0])
//     }
// }


// const queue = new Queue();

// queue.enqueue(100);
// queue.enqueue(200);
// queue.enqueue(300);
// queue.enqueue(400);
// queue.dequeue();
// queue.display();
// console.log(queue.isEmpty());
// queue.peek()
















// ----------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- QUEUE OBJECT ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------

// class Queue{
//     constructor(){
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++;
//     }

//     dequeue(){
//      const item = this.items[this.front];
//      delete this.items[this.front];
//      this.front++;
//      return item;
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     peek(){
//         return this.items[this.front];
//     }

//     size(){
//         return this.rear - this.front;
//     }

//     print(){
//         for(let [item, value] in this.items){
//             console.log(this.items[item])
//         }
//     }

// }


// const queue = new Queue();

// queue.enqueue(100);
// queue.enqueue(200);
// queue.enqueue(300);
// queue.enqueue(400);
// queue.enqueue(500);
// queue.dequeue();


// queue.print();



















// ----------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- CIRCULAR QUEUE OBJECT ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------

class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    equeue(element){
        if(this.isEmpty()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }


    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }

        return null;
    }


    print(){
        if(this.isEmpty()){
            console.log('Queue is empty');
        }else{
            let i;
            let str = '';
            for(i = this.front; i !== this.rear; i = (i + 1)%this.capacity){
                str += this.items[i] + ' ';
            }

            str += this.items[i];
            console.log(str)
        }
    }

    

}

const cQueue = new CircularQueue(5);

cQueue.equeue(100)
cQueue.equeue(200)
cQueue.equeue(300)
cQueue.equeue(400)
cQueue.print()