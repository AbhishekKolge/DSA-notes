class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holdingPointer = this.last;
      this.last = newNode;
      holdingPointer.next = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    const holdingPointer = this.first.next;
    this.first = holdingPointer;
    this.length--;
    if (this.isEmpty()) {
      this.last = null;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue('first');
myQueue.enqueue('second');
myQueue.enqueue('third');
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);
