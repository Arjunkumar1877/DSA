class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = "";
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % 7;
    }
    return hash;
  }

  insert(key, value) {
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = [];
    }

    this.table[hash].push([key, value]);
  }

  search(key) {
    let hash = this.hash(key);

    for (let i = 0; i < this.table[hash].length; i++) {
      if (this.table[hash][i][0] == key) {
        return this.table[hash][i][1];
      }
    }
  }
}

let hashTable = new HashTable(6);
hashTable.insert("nuts", 20);
console.log(hashTable.search("nuts"));
