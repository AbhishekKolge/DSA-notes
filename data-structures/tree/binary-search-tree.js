class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value <= value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    const result = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
  breadthFirstSearchRecursive(queue, result) {
    if (!queue.length) {
      return result;
    }

    const currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, result);
  }
  depthFirstSearchInOrder(node, result) {
    if (node.left) {
      this.depthFirstSearchInOrder(node.left, result);
    }
    result.push(node.value);
    if (node.right) {
      this.depthFirstSearchInOrder(node.right, result);
    }
    return result;
  }
  depthFirstSearchPreOrder(node, result) {
    result.push(node.value);

    if (node.left) {
      this.depthFirstSearchPreOrder(node.left, result);
    }

    if (node.right) {
      this.depthFirstSearchPreOrder(node.right, result);
    }

    return result;
  }

  depthFirstSearchPostOrder(node, result) {
    if (node.left) {
      this.depthFirstSearchPostOrder(node.left, result);
    }
    if (node.right) {
      this.depthFirstSearchPostOrder(node.right, result);
    }

    result.push(node.value);

    return result;
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
myTree.lookup(20);
myTree.breadthFirstSearch();
myTree.breadthFirstSearchRecursive([myTree.root], []);
myTree.depthFirstSearchInOrder(myTree.root, []);
myTree.depthFirstSearchPreOrder(myTree.root, []);
myTree.depthFirstSearchPostOrder(myTree.root, []);
// console.log(JSON.stringify(myTree.root));
