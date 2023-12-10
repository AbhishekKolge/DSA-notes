class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const holdingPointer = this.top.next;
    this.top = holdingPointer;
    this.length--;
    if (this.isEmpty()) {
      this.bottom = null;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.isEmpty();
myStack.push('google.com');
myStack.push('youtube.com');
myStack.push('twitter.com');
myStack.pop();
myStack.peek();
console.log(myStack);
