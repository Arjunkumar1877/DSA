class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(data){
        let n = this.heap.length;
        this.heap[n] = data;
        let i = n;

        while(i > 0){
            let parent = Math.floor((i-1)/2);
            if(this.heap[i] < this.heap[parent]){
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            }else{
                return;
            }
        }
    }

    minHeap(arr){
        let heapSize = arr.length-1;

        for(let i = Math.floor(arr.length/2)-1; i >= 0; i--){
            this.heapify(arr, i, heapSize);
        }

        return arr;
    }

    heapify(arr, i, heapSize){
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if(left < heapSize && arr[left] < arr[smallest]){
            smallest = left;
        }

        if(right < heapSize && arr[right] < arr[smallest]){
            smallest = right;
        }

        if(smallest !== i){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.heapify(arr, smallest, heapSize);
        }
    }

    remove(){
        let removed = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(this.heap, 0, this.heap.length)
    }

    heapSort(arr){
        this.minHeap(arr);
        for(let i = arr.length-1; i >= 0; i--){
            [arr[0], arr[i]] = [arr[i], arr[0]];

            this.heapify(arr, 0, i);
        }
      return arr;
    }

}



const MN = new MinHeap();

MN.insert(100);
MN.insert(10);
MN.insert(900);
MN.insert(7700);
MN.insert(600);
MN.insert(500);
MN.remove()
MN.remove()
MN.remove()
console.log(MN)
let arr = [981, 267, 3, 4, 5, 77, 0, 7, 3, 5];

// console.log(MN.heapSort(arr))
console.log(MN.minHeap(arr));

// console.log(arr)

console.log(MN.heapSort(arr))