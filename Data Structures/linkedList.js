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

  AddAtStart(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  AddEndStart(data){
    const newData = new Node(data);
    let current = this.head;
    
    while(current.next !== null){
      current = current.next;
    }
    current.next = newData;   

  }

  removeAtStart(){
    let current = this.head;
    this.head = null;
    this.head =  current.next;
  }

  removeAtEnd(){
    let current = this.head;

    while(current.next.next !== null){
      current = current.next;
    }
    current.next = null;
  }

  removeElement(data){
    let current = this.head;
    while(current.next.data !== data){
      current = current.next;
    }

    let removedElement = current.next;
    current.next = removedElement.next;    
  }

  removeElemtAt(index){
   let current = this.head;

   if(index === 0){
    this.head = this.head.next;
   }else{
    
   for(let i = 1; i < index; i++){
    current = current.next;
   }

  let removedElement = current.next;
  current.next = removedElement.next;
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

    this.head = prev;
  }

  // reverseRecursive(){
  //   if(!this.head || !this.head.next){
  //     return this.head;
  //   }

  //   const reverse = (node)=>{
  //     if(!node.next){
  //       this.head = node;
  //       return node;
  //     }

  //     let newNode = reverse(node.next);
  //     node.next.next = node;
  //     node.next = null;
      
  //     return newNode;
  //   }

  //   reverse(this.head);
  //   return this.head;
  // }

  reverseRecursive(){
    if(!this.head || !this.head.next){
      return this.head;
    }

    const reverse = (node)=>{
      if(!node.next){
        this.head = node;
        return node;
      }

      const newNode = reverse(node.next);
      node.next.next = node;
      node.next = null;

      return newNode;
    }
    reverse(this.head);
    return this.head;
  }



  findMiddle(){
    let fast = this.head;
    let slow = this.head;

    while(fast !== null && fast.next !== null){
     slow = slow.next;
     fast = fast.next.next;
    }

    return console.log(slow.data);

  }

  findSecondLargest(){
    let current = this.head;

    while(current.next.next !== null){
      current = current.next;
    }

    return console.log(current.data)
  }

  print(){
    let current = this.head;
    while(current !== null){
      console.log(current.data);
      current = current.next;
    }
  }

}


const LL = new LinkedList();

LL.AddAtStart(100);
LL.AddAtStart(200);
LL.AddAtStart(300);
LL.AddAtStart(400);
LL.AddAtStart(500);
// LL.AddEndStart(600);
// LL.AddEndStart(700);
// LL.removeAtStart();
// LL.removeAtEnd();
// LL.removeElement(100);
// LL.removeElemtAt(2)
// LL.reverse();
LL.reverseRecursive();
LL.findMiddle()
console.log("object")
LL.print();
console.log("object")

LL.findSecondLargest()