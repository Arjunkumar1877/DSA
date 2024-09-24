class Node{
  constructor(){
    this.children = new Map();
    this.isEndOfWord = false;
  }
}


class Trie{
  constructor(){
    this.root = new Node();
  }

  insert(word){
    let node = this.root;

    for(let char of word){
      if(!node.children.has(char)){
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
   node.isEndOfWord = true;
  }

  search(word){
    let node = this.root;

    for(let char of word){
      if(!node.children.has(char)){
        return false;
      }
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startsWith(prefix){
    let node = this.root;

    for(let char of prefix){
      if(!node.children.has(char)){
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  autoComplete(prefix){
    let node = this.root;

    for(let char of prefix){
      if(!node.children.has(char)){
        return [];
      }
      node = node.children.get(char);
    }

    let result = [];
    this.findAllWords(node, prefix, result);
    return result;
  }

  findAllWords(node, prefix, result){
    if(node.isEndOfWord){
      result.push(prefix);
    }

    for(let [char, child] of node.children){
      this.findAllWords(child, prefix+char, result);
    }

  }

  delete(word){
    this.deleteHelper(this.root, word, 0);
  }

  deleteHelper(node, word, index){
    if(index === word.length){
      if(!node.isEndOfWord){
        return false;
      }
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word.charAt(index);
    let nextNode = node.children.get(char);
    if(!nextNode){
      return false;
    }

    const shouldDelete = this.deleteHelper(nextNode, word, index+1);

    if(shouldDelete){
      node.children.delete(char);
      return node.children.size === 0;
    }
    return false

  }
  
  countPrefix(prefix){
   let node = this.root;

   for(let char of prefix){
    if(!node.children.has(char)){
      return 0;
    }
    node = node.children.get(char);
   }
   let count = 0;
   let dfs = (n)=>{
    if(n.isEndOfWord){
      count++
    }

    for(let child of n.children.values()){
      dfs(child);
    }
   }

   dfs(node);
   return count;

  }

  listAllWords(){
    let result = [];
    this.findAllWords(this.root,'', result);
    return result
  }

  insertSufix(word){
   for(let i = 0; i < word.length; i++){
    this.insert(word.slice(i))
   }
  }

  insertPrefix(word){
    for(let i = 0; i < word.length; i++){
      this.insert(word.slice(0, i));
    }
  }

  isSuffix(word) {
    let node = this.root;
    
    for (let i = word.length - 1; i >= 0; i--) {
        if (!node.children.has(word[i])) {
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

// console.log(T.search("Apple"));
// console.log(T.startsWith("Agg"))
T.insertSufix("Arjun")
T.insertPrefix("Arjun")
// // T.delete('Orange')
// console.log(T.autoComplete("O"))

// console.log(T.countPrefix("O"))

// console.log(T.listAllWords())

console.log(T.isSuffix('Arjun'))

// console.log(T)