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

  countWordsWithPrefix(prefix){
    let node = this.root;
    for(let char of prefix){
      if(!node.children.has(char)){
        return 0;
      }
      node = node.children.get(char);
    }
    let count = 0;
    const dfs = (n)=>{
      if(n.isEndOfWord) count++;
      for(let child of n.children.values()){
        dfs(child);
      }
    };
    dfs(node);
    return count;
  }

  longestCommonPrefix() {
    let node = this.root;
    let prefix = '';
    while (node.children.size === 1 && !node.isEndOfWord) {
      const char = node.children.keys().next().value;
      prefix += char;
      node = node.children.get(char);
    }
    return prefix;
  }
  
  listAllWords(){
    let result = [];
    this.findAllWords(this.root, '', result);
    return result.sort()
  }

  suggestWithOneTypo(word){
    const suggestions = [];
    const dfs = (node, prefix, index)=>{
      if(index === word.length){
        if(node.isEndOfWord) suggestions.push(prefix);
        return;
      }
      const char = word[index];
      for(let [key, childNode] of node.children){
        if(key === char || key !== char){
          dfs(childNode, prefix + key, index + 1);
        }
      }
    }
    dfs(this.root, '', 0);
    return suggestions;
  }

  insertSuffixTree(word){
    for(let i = 0; i < word.length; i++){
      this.insert(word.slice(i));
    }
  }

  insertPrefixTree(word){
    for(let i = 0; i < word.length; i++){
      this.insert(word.slice(-i));
    }
  }


  findSubstringOccurances(substring){
    let node = this.root;
    for(let char of substring){
      if(!node.children.has(char)){
         return [];
      }
      node = node.children.get(char);
    }
    const results = [];
    this.findAllWords(node, substring, results);
    return results;
  }

  isSuffix(word){
    let node = this.root;
    for(let i = 0; i < word.length; i++){
      if(!node.children.has(word[i])){
        return false;
      }
      node = node.children.get(word[i]);
    }
    return node.isEndOfWord;
  }

}

const T = new Trie();

T.insert("Apple");
T.insert("Application");
T.insert("App");
T.insert("Apply");
T.insert("Orange");
T.insert("Orangetrg");
// T.delete("Apple");
// T.delete("App");
console.log(T.autoComplete("Ap"));

console.log(T.search("Apple"));
console.log(T.startWith("O"));
console.log(T.insertSuffixTree("Arjun"))
console.log(T.insertPrefixTree("Aleena"))

// console.log(T.countWordsWithPrefix("A"));

console.log(T.longestCommonPrefix())
// console.log(T)
console.log(T.listAllWords());
// console.log(T.suggestWithOneTypo("Applicatuon"));

console.log(T.findSubstringOccurances("e"));

console.log(T.isSuffix("Arj"))