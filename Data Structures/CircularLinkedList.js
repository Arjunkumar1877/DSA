class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class CircularLinkedLink{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addAtStart(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next !== this.head){
                current = current.next;
            }
            newNode.next = this.head;
            current.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtEnd(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next !== this.head){
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    removeAtStart(){
        if(!this.head) return null;
        if(this.head.next === this.head){
            const removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode.data;
        }
        let current = this.head;
        while(current.next !== this.head){
            current = current.next;
        }
        const removeNode = this.head;
        current.next = this.head.next;
        this.head = this.head.next;
        this.size--;
        return removeNode.data;
    }

    removeNodeAtEnd(){
        if(!this.head) return null;
        if(this.head.next === this.head){
            const removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode.data;
        }
        let current = this.head;
        let previous = null;
        while(current.next !== this.head){
            previous = current;
            current = current.next;
        }
        previous.next = this.head;
        this.size--;
        return current.data;
    }

    findMiddle(){
        if(!this.head){
            return null;
        }

        let slow = this.head;
        let fast = this.head;

        while(fast.next !== this.head && fast.next.next !== this.head){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    print(){
        if(!this.head) return;

        let current = this.head;
        const element = [];

        do{
            console.log(current.data)
            current = current.next
        }while(current !== this.head)
    }

}

const CLL = new CircularLinkedLink();

CLL.addAtStart(100);
CLL.addAtStart(200);
CLL.addAtStart(300);
// CLL.removeAtStart();
// CLL.removeNodeAtEnd();

console.log(" kk " + CLL.findMiddle())
CLL.print();