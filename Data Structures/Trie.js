class Node {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }

      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  findAllWords(node, prefix, results) {
    if (node.isEndOfWord) {
      results.push(prefix);
    }

    for (let [char, childNode] of node.children) {
      this.findAllWords(childNode, prefix + char, results);
    }
  }

  autoComplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }

    let results = [];
    this.findAllWords(node, prefix, results);
    return results;
  }

  delete(word) {
    this.deleteHelper(this.root, word, 0);
  }

  deleteHelper(node, word, index) {
    if (index === word.length) {
      if (!node.isEndOfWord) {
        return false;
      }

      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word.charAt(index);
    const nextNode = node.children.get(char);
    if (!nextNode) {
      return false;
    }
    const shouldDelete = this.deleteHelper(nextNode, word, index + 1);
    if (shouldDelete) {
      node.children.delete(char);
      return node.children.size === 0;
    }
    return false;
  }
}

const T = new Trie();

T.insert("Apple");
T.insert("Application");
T.insert("App");
T.insert("Apply");
T.insert("Orange");
T.delete("Apple");
T.delete("App");
console.log(T.autoComplete("Ap"));

console.log(T.search("Apple"));
console.log(T.startWith("O"));
// console.log(T)
