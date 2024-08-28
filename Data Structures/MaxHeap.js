class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(data) {
        let n = this.heap.length;
        this.heap[n] = data;
        let i = n;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[i] > this.heap[parent]) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else {
                return;
            }
        }
    }

    maxHeap(arr) {
        let heapSize = arr.length;

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapify(arr, i, heapSize);
        }

        return arr;
    }

    heapify(arr, i, heapSize) {
        let largest = i;
        let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;

        if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
            largest = leftChild;
        }

        if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
            largest = rightChild;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, heapSize);
        }
    }

    heapSort(arr) {
        this.maxHeap(arr);
        for (let i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];  // Corrected swap

            this.heapify(arr, 0, i);
        }

        return arr;
    }

    remove(){
        let removed = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapify(this.heap, 0, this.heap.length);
        return removed;
    }

}

const MX = new MaxHeap();

MX.insert(100);
MX.insert(10);
MX.insert(900);
MX.insert(7700);
MX.insert(600);
MX.insert(500);

MX.remove()
// MX.remove()

console.log(MX);  

let arr = [1, 2, 3, 4, 5, 77, 0, 7, 3, 5];

console.log(MX.heapSort(arr));  




// class MaxHeap{
//     constructor(){
//         this.heap = [];
//     }

//     insert(data){
//         let n = this.heap.length;

//     }
// }