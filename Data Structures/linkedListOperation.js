class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Ll {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  ifEmpty() {
    return this.size == 0;
  }
  addAtS(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtE(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  print() {
    let curr = this.head;
    if (this.head == null) {
      return "Not items";
    } else {
      while (curr) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }

  deleteNodeWithValue(value) {
    let curr = this.head;
    let prev = null;
    while (curr.data !== value) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = curr.next;
  }

  findElement(element) {
    let curr = this.head;
    while (curr) {
      if (curr.data == element) {
        return true;
      } else {
        curr = curr.next;
      }
    }

    return "Not matched element";
  }

  findMiddleElement() {
    let middle = this.head;
    let curr = this.head;

    while (curr && curr.next) {
      middle = middle.next;
      curr = curr.next?.next;
    }
    return middle.data;
  }

  removeD() {
    let curr = this.head;
    let seen = new Set();
    let prev = null;
    while (curr) {
      if (seen.has(curr.data)) {
        prev.next = curr.next;
      } else {
        seen.add(curr.data);
        prev = curr;
      }

      curr = curr.next;
    }
  }
  findKthToLast(k) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) return null;
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }


}

const ll = new Ll();
console.log(ll.ifEmpty());
ll.addAtS(10);
ll.addAtS(20);
ll.addAtS(30);
ll.addAtS(40);
ll.print();

console.log(ll.findKthToLast(4));





