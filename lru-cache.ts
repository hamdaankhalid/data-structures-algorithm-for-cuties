// Use doubly linked list to track least called, and use a map from key to node to track
// a dummy head and dummy tail to make tracking with Doublylinkedlsit easier
// on every access move accessed node to head
// on every put do the same.

class DoubleLinkedNode {
  public key: number;
  public value: number;
  public prev: DoubleLinkedNode | null;
  public next: DoubleLinkedNode | null;

  constructor() {
      this.key = 0;
      this.value = 0;
      this.prev = null;
      this.next = null;
  }
}

class LRUCache {
  private cache: {};
  private capacity: number;
  private head: DoubleLinkedNode;
  private tail: DoubleLinkedNode;
  private size: number;
  
  constructor(capacity: number) {
      this.cache = {}; // store key to node
      this.capacity = capacity;
      this.size = 0;
      this.head = new DoubleLinkedNode();
      this.tail = new DoubleLinkedNode();
      
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }

  get(key: number): number {
      const node = this.cache[key];
      if(!node) {return -1;}
      // move accessed node to head
      this.moveNodeToHead(node);
      return node.value;
  }

  put(key: number, value: number): void {
      const node = this.cache[key];
      if(!node){
          const newNode = new DoubleLinkedNode();
          newNode.value = value;
          newNode.key = key;
          this.cache[key] = newNode;
          this.addNodeToHead(newNode);
          this.size+=1;
          if (this.size > this.capacity) {
              const tail = this.popTail();
              delete this.cache[tail.key];
              this.size -= 1;
          }
      } else {
          // update the value
          node.value = value;
          this.moveNodeToHead(node);
      }
  }

  private moveNodeToHead(node: DoubleLinkedNode) {
      // remove from middle of where it is
      this.removeNode(node);
      // add infront of dummy head        
      this.addNodeToHead(node);
  }

  private removeNode(node: DoubleLinkedNode) {
      const prev = node.prev;
      const newReplace = node.next;
      prev.next = newReplace;
      newReplace.prev = prev;
  }

  private addNodeToHead(node: DoubleLinkedNode) {
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
  }

  private popTail() {
      const nodeToRemove = this.tail.prev;
      this.removeNode(nodeToRemove);
      return nodeToRemove;
  }
}

/**
* the least revently used key is the one that will be evicted when we hit the capacity
* for that we need to track the number of calls and something to maintain that order
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
