class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;
    newNode.next = follower;
    newNode.previous = leader;
    leader.next = newNode;
    follower.previous = newNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const follower = this.head.next;
      follower.previous = null;
      this.head = follower;
      this.length--;
      return;
    }

    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader?.next || null;
    if (!unwantedNode) {
      return;
    }
    const follower = unwantedNode.next;
    leader.next = follower;
    if (follower) {
      follower.previous = leader;
    }
    this.length--;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode?.next || null;
      counter++;
    }
    return currentNode;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList.printList());
