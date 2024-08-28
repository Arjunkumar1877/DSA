class MaxHeap{
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
        let heapSize = arr.length;

        for(let i = Math.floor(arr.length/2)-1; i >= 0; i--){
            this.heapify(arr, i, heapSize);
        }

        return arr;
    }

    heapify(arr, i, heapSize){
     let smallest = i;
     let leftChild = 2 * i + 1;
     let rightChild = 2 * i + 2;
     
     if(leftChild < heapSize && arr[leftChild] < arr[smallest]){
        smallest = leftChild;
     }

     if(rightChild < heapSize && arr[rightChild] < arr[smallest]){
        smallest = rightChild;
     }

     if(smallest !== i){
        [arr[smallest] , arr[i]] = [arr[i], arr[smallest]];
        this.heapify(arr, smallest, heapSize);        
     }
     
    }

    heapSort(arr){
        this.minHeap(arr);

        for(let i = arr.length - 1; i > 0; i--){
            [arr[0], arr[i]] = [arr[i], arr[0]];

            this.heapify(arr, 0, i);
        }

        return arr;
    }

    remove(){
        if(this.heap.length === 0){
            return;
        }
        this.heap[0] = this.heap.pop();
        this.heapify(this.heap, 0, this.heap.length);
    }

}
const MH = new MaxHeap();
MH.insert(100)
MH.insert(200)
MH.insert(600)
MH.insert(800)
MH.insert(900)
MH.insert(300)
MH.remove()
MH.remove()
MH.remove()

// console.log(MH.minHeap(MH.heap))
console.log(MH)

let arr = [1, 2, 3, 4, 5, 77, 0, 7, 3, 5];

console.log(MH.heapSort(arr))