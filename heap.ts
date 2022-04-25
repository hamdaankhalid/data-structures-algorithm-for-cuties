class MinHeap {
  public heap: number[];

  public constructor() {
    this.heap = [];
  }

  public insert(i: number): void {
    // insert i at the end and then bubble it up
    this.heap.push(i);
    let currAddress = this.heap.length - 1; 
    let parentIdx = Math.floor((currAddress-1)/2);

    while(parentIdx > -1) {
      if (this.heap[parentIdx] > this.heap[currAddress]) {
        const temp = this.heap[parentIdx]
        this.heap[parentIdx] = this.heap[currAddress];
        this.heap[currAddress] = temp;
      } else {
        break;
      }
    }
  }

  public pop(): number {
    const popped = this.heap.shift();

    const lastItem = this.heap.pop();

    if (!lastItem) {
      return -1000;
    }

    this.heap.unshift(lastItem);

    // bubble it down comparing to it's smaller children
    let currAddress = 0;
    let leftChild = (2*currAddress)+1;
    let rightChild= (2*currAddress)+2;
    
    while (leftChild < this.heap.length || rightChild < this.heap.length) {
      if (leftChild < this.heap.length && rightChild < this.heap.length) {
        // has left and right children
        if (this.heap[leftChild] < this.heap[rightChild]) {
          const temp = this.heap[currAddress];
          this.heap[currAddress] = this.heap[leftChild];
          this.heap[leftChild] = temp;
          currAddress = leftChild;
        } else if (this.heap[leftChild] > this.heap[rightChild]) {
          const temp = this.heap[currAddress];
          this.heap[currAddress] = this.heap[rightChild];
          this.heap[rightChild] = temp;
          currAddress = rightChild;
        } else {
          break;
        }
      } else if (leftChild < this.heap.length && rightChild > this.heap.length) {
        if (this.heap[leftChild] < this.heap[currAddress]) {
          const temp = this.heap[currAddress];
          this.heap[currAddress] = this.heap[leftChild];
          this.heap[leftChild] = temp;
          currAddress = leftChild;
        } else {
          break;
        }
      } else if(leftChild > this.heap.length && rightChild < this.heap.length) {
        if (this.heap[leftChild] < this.heap[currAddress]) {
          const temp = this.heap[currAddress];
          this.heap[currAddress] = this.heap[leftChild];
          this.heap[leftChild] = temp;
          currAddress = leftChild;
        } else {
          break;
        }
      } else {
        break;
      }

      leftChild = (2*currAddress)+1;
      rightChild= (2*currAddress)+2;
    }

    return popped || -1000;
  }

  public peek(): number {
    return this.heap[0];
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

/**
 * Every node after parent is bigger than it in a min Heap
 * Arr[(i-1)/2]	Returns the parent node
* Arr[(2*i)+1]	Returns the left child node
* Arr[(2*i)+2]	Returns the right child node
 */

function main() {
  const heap = new MinHeap();

  heap.insert(5);
  heap.insert(8);
  heap.insert(-1);
  heap.insert(9);
  heap.insert(3);

  console.log(heap.heap);
  console.log(heap.peek()); // -1
  console.log(heap.pop()); // -1
  console.log(heap.heap);
  console.log(heap.pop()); // 3
  console.log(heap.heap);
  heap.insert(1);
  heap.insert(7);
  console.log(heap.peek());
  console.log(heap.heap);
}

main();