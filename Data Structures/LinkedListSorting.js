class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeSort(head) {
    if (!head || !head.next) return head;

    let middle = getMiddle(head);
    let nextOfMiddle = middle.next;
    middle.next = null;

    let left = mergeSort(head);
    let right = mergeSort(nextOfMiddle);

    return merge(left, right);
}

function getMiddle(head) {
    if (!head) return head;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function merge(left, right) {
    if (!left) return right;
    if (!right) return left;

    if (left.value < right.value) {
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}

function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.value + " ");
        current = current.next;
    }
    console.log();
}

let list = createLinkedList([4, 2, 1,7, 8, 9, 2, 4, 0, 3]);
let sortedList = mergeSort(list);
printList(sortedList); 

















