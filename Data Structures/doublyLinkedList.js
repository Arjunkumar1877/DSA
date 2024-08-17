class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtStart(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtEnd(data){
        const newNode = new Node(data);

        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }


    removeAtStart(){
        if(!this.head) return null;

        const removedNode = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--
        return removedNode.data;
    }


    removeAtEnd(){
        if(!this.tail) return null;
        const removedNode  = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if (temp) {
            this.head = temp.prev;
        }
    }

    addADataAtIndex(data, index){
        if(index < 0 || index > this.size) return null;

        if(index === 0){
            this.addAtStart(data);
            return;
        }

        if(index === this.size){
            this.addAtEnd(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let currentIndex = 0;

        while(currentIndex < index){
            current = current.next;
            currentIndex++;
        }
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
      this.size++;
    }

    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log("middle is " + slow.data)
    }

    findTheSecondLast(){
        if (!this.head || !this.head.next) return null;
        return console.log( "second last : -" ,this.tail.prev.data)
    }

    print(){
        let current = this.head;
        while(current !== null){
            console.log(current.data)
            current = current.next;
        }
    }



}

const DLL = new DoublyLinkedList();

DLL.addAtStart(100);
DLL.addAtStart(200);
DLL.addAtStart(300);
DLL.addAtEnd(400);
DLL.addAtEnd(500);
// DLL.removeAtStart();
console.log("object " + DLL.tail.data);
// console.log("object " + DLL.head.data);
DLL.addADataAtIndex(500000000, 2)
DLL.findMiddle()
// DLL.reverse();
DLL.print();
DLL.findTheSecondLast()

