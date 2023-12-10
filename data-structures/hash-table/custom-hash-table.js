class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (!currentBucket) {
      return undefined;
    }
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];

      if (!currentBucket) {
        continue;
      }
      if (currentBucket.length < 2) {
        keysArray.push(currentBucket[0][0]);
        continue;
      }

      for (let j = 0; j < currentBucket.length; j++) {
        const bucketElements = currentBucket[j];
        keysArray.push(bucketElements[0]);
      }
    }

    return keysArray;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');
myHashTable.keys();
