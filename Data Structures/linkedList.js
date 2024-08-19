// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = null;
//   }

//   addAtStart(data) {
//     let newNode = new Node(data);

//     if (this.head == null) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     this.length++;
//     return;
//   }

//   addAtEnd(data) {
//     let current = this.head;
//     const newNode = new Node(data);

//     if (current === null) {
//       current = newNode;
//     } else {
//       while (current.next !== null) {
//         current = current.next;
//       }

//       newNode.next = null;
//       current.next = newNode;
//     }
//     this.length++;
//     return;
//   }

//   removeNode(data) {
//     let current = this.head;

//     if (current.data === data) {
//       this.head = current.next;
//     } else {
//       while (current.next.data !== data) {
//         current = current.next;
//       }
//       let removedata = current.next;
//       current.next = removedata.next;
//     }

//     this.length--;
//     return;
//   }

//   removeAtIndex(index) {
//     let current = this.head;
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       for (let i = 1; i < index; i++) {
//         current = current.next;
//       }

//       let removeData = current.next;
//       current.next = removeData.next;
//     }

//     this.length--;
//     return;
//   }

//  reverse(){
//   let current  = this.head;
//   let prev = null;
  
//   while(current !== null){
//     let nextNode = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }
//   this.head  = prev
//  }

//  recursiveReverse(){
//   if(!this.head || !this.head.next){
//     return this.head;
//   }

//   const reverse = (node)=>{
//     if(!node.next){
//       this.head = node;
//       return node;
//     }

//     const newNode = reverse(node.next);
//     node.next.next = node;
//     node.next = null;

//     return newNode
//   }

//   reverse(this.head);
//   return this.head


//  }

//   addIndexAt(index, data){
//     let current = this.head;
//     for(let i = 1; i < index; i++){
//       current = current.next;
//     }
//     const newNode = new Node(data);
//     let dataN = current.next;
//     current.next = newNode;
//     newNode.next = dataN
    
//   }

//   findMiddle(){

//     let slow = this.head;
//     let fast = this.head;

//     while(fast !== null && fast.next !== null){
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//    return  console.log(slow.data)

//   }

//   findSecondLastElement(){
//     let current = this.head;
//     while(current.next.next !== null){
//       current = current.next;
//     }

//     return console.log(current.data);
//   }

  

//   print() {
//     let current = this.head;

//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const LL = new LinkedList();

// LL.addAtStart(100);
// LL.addAtStart(200);
// LL.addAtStart(300);
// LL.addAtStart(400);
// // LL.addAtStart(500);
// // LL.addAtStart(600);
// // LL.addAtEnd(400);
// // LL.addAtEnd(500);
// // LL.removeNode(300);
// // LL.removeNode(100);
// // LL.removeAtIndex(0);
// // LL.removeAtIndex(0);
// // LL.reverse();
// // LL.addIndexAt(3, 50000)
// LL.recursiveReverse()
// LL.print();
// // LL.findMiddle();
// // LL.findSecondLastElement()
// // console.log(LL);



class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  addAtStart(data){
    let newData = new Node(data);

    if(this.head === null){
      this.head = newData
    }else{
      newData.next = this.head;
      this.head = newData
    }
  }

  addAtEnd(data){
    let current = this.head;
    const newData = new Node(data);
    if(this.head === null){
      this.head = newData;
    }else{
      while(current.next !== null){
        current = current.next;
      }
      newData.next = current.next;
      current.next = newData;
    }
  }

  removeAtStart(){
   let current = this.head;
   this.head = this.head.next;
  }

  removeAtEnd(){
    let current = this.head;
    while(current.next.next !== null){
      current = current.next;
    }
    current.next = null;;
  }

  removeNode(data){
    if(this.head.data === data){
       this.head = this.head.next;
    }else{
      let current = this.head;

      while(current.next.data !== data){
        current = current.next
      }

      let removedNode = current.next;
      current.next = removedNode.next;
    }
  }

  removeAtindex(index){
    if(index === 0){
      this.head = this.head.next;
    }else{
      let current = this.head;

      for(let i = 1; i < index; i++){
        current = current.next;
      }
      let removed = current.next;
      current.next = removed.next;
    }
  }
    
  insertNodAtIndex(index, data){
    const newNode = new Node(data);
    if(index === 0){
       newNode.next = this.head;
       this.head = newNode;
    }else{
      let current = this.head;
       for(let i = 1; i < index;  i++){
        current = current.next;
       }

       newNode.next = current.next;
       current.next = newNode;


    }
  }

  reverse(){
    let prev = null;
    let current = this.head;

    while(current !== null){
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev
  }

  recursiveReverse(){
    if(!this.head || !this.head.next){
      return this.head;
    }


    const reverse = (node)=>{
      if(!node.next){
        node = this.head;
        return node;
      }

      const nextNode = reverse(node.next);
      node.next.next = node
    }


  }

  print(){
    let current = this.head;

    while(current !== null){
      console.log(current.data);
      current = current.next
    }
  }

};


const LL = new LinkedList();
// LL.addAtStart(100);
// LL.addAtStart(500);
// LL.addAtStart(800);
LL.addAtEnd(100);
LL.addAtEnd(200);
LL.addAtEnd(300);
LL.addAtEnd(400);
// LL.removeAtStart()
// LL.removeAtEnd()
// LL.removeNode(100)
// LL.removeAtindex(2)
// LL.insertNodAtIndex(2, 2890)
LL.reverse()
LL.print()
// console.log(LL)

