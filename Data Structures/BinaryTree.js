
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree{
  constructor(){
    this.root = null;
  }


  insert(data){
    let newNode = new Node(data);

    if(this.root === null){
      this.root = newNode;
    }else{
      let current = this.root;

      while(true){
        if(newNode.data < current.data){
          if(current.left === null){
            current.left = newNode;
            break;
          }else{
            current = current.left;
          }
        }else{
          if(current.right === null){
            current.right = newNode;
            break;
          }else{
            current = current.right;
          }
        }
      }

    }
  }

  recursiveInsert(data){
   const newNode = new Node(data);

   if(this.root === null){
    this.root = newNode;
   }else{
    this.recursiveInsertHelper(this.root, newNode);
   }
   
  }
  
  recursiveInsertHelper(current, newNode){
    if(newNode.data < current.data){
      if(current.left === null){
          current.left = newNode;
      }else{
        return this.recursiveInsertHelper(current.left, newNode);
      }
    }else{
      if(current.right === null){
        current.right = newNode;
      }else{
        return this.recursiveInsertHelper(current.right, newNode);
      }
    }
  }

  search(data){
    if(this.root === null){
      return false;
    }
let current = this.root;
    while(current !== null){
      if(data < current.data){
        current = current.left
      }else if(data > current.data){
        current = current.right;
      }else{
        return true
    }
    }
return false
  }

  recursiveSearch(data, current = this.root){
    
    if(current === null){
      return false
    }

    if(data < current.data){
      return this.recursiveSearch(data, current.left);
    }else if(data > current.data){
      return this.recursiveSearch(data, current.right);
    }else if(data === current.data){
      return true;
    }
   
  }

  minNode(current = this.root){
 

    while(current.left !== null){
      current = current.left;
    }

    return current.data;
  }

  recursiveMinNode(current = this.root){
    if(current.left === null){
      return current.data
    }else{
      return this.recursiveMinNode(current.left);
    }
  }

  maxNode(){
    let current = this.root;
    
    while(current.right !== null){
      current = current.right;
    }

    return current.data;
  }

  recursiveMaxNode(current = this.root){
    if(current.right === null){
     return current.data;
    }else{
      return this.recursiveMaxNode(current.right)
    }
  }

  preOrder(current = this.root){
    if(current !== null){
     console.log(current.data);
     this.preOrder(current.left)
     this.preOrder(current.right)
    }
  }

  inOrder(current = this.root){
    if(current !== null){
      this.inOrder(current.left);
      console.log(current.data);
      this.inOrder(current.right);
    }
  }

  postOrder(current = this.root){
    if(current !== null){
      this.postOrder(current.left);
      this.postOrder(current.right);
      console.log(current.data);
    }
  }


  levelOrder(){
    let queue = [];
    queue.push(this.root);

    while(queue.length){
      let current = queue.shift();
      console.log(current.data);

      if(current.left){
        queue.push(current.left);
      }

      if(current.right){
        queue.push(current.right);
      }

    }
  }


  recursiveDelete(data){
    this.root = this.recursiveDeleteHelper(data, this.root);
  }

  recursiveDeleteHelper(data, current){
    if(current === null){
      return current
    }

    if(data < current.data){
      current.left = this.recursiveDeleteHelper(data, current.left);
    }else if(data > current.data){
      current.right = this.recursiveDeleteHelper(data, current.right);
    }else{
      if(!current.left && !current.right){
        return null;
      }

      if(!current.left){
        return current.right;
      }

      if(!current.right){
        return current.left;
      }

      current.data = this.recursiveMinNode(current.right);
      current.right = this.recursiveDeleteHelper(current.data, current.right)
    }
    return current

  }


isBst(){
  return this.isBstHelper(this.root, -Infinity, Infinity);
}

isBstHelper(current, min, max){
  if(current === null){
    return true;
  }


  if(current.data <= min || current.right >= max){
    return false;
  }

  return (
    this.isBstHelper(current.left, min, current.data) && this.isBstHelper(current.right, current.data, max)
  )
}

}


// Usage example
const BT = new BinaryTree();

BT.insert(879100);
BT.insert(200);
BT.insert(50);
BT.insert(25);
BT.insert(75);
BT.insert(150);
BT.insert(250);

// BT.recursiveInsert(100);
// BT.recursiveInsert(200);
// BT.recursiveInsert(50);
// BT.recursiveInsert(25);
// BT.recursiveInsert(75);
// BT.recursiveInsert(150);
// BT.recursiveInsert(250);

// // Inorder Traversal
// BT.(100)
// BT.recursiveDelete(150)
// BT.recursiveDelete(25)
// BT.inOrder(BT.root);  //25, 50, 75, 100, 150, 200, 250

// console.log(BT.recursiveSearch(25));
// // Preorder Traversal
// BT.preOrder(BT.root);  //  100, 50, 25, 75, 200, 150, 250
// BT.postOrder(BT.root) // 25 ,75, 50, 150, 250, 200, 100

// console.log(BT.root.data);

// BT.delete(25)

// console.log(BT.search(100))
// BT.delete(200);
// BT.delete(50);
// BT.delete(75);
// BT.delete(25);
// BT.recursiveDelete(100)
BT.levelOrder()



// BT.recursiveDelete(200)
// BT.recursiveDelete(25)
// BT.levelOrder() // 100,

// console.log(BT.minNode());

// console.log(BT.minNode(BT.root))
// console.log(BT.recursiveMinNode(BT.root))
// console.log(BT);
// console.log(BT.recursiveMin())

// BT.postOrder();
// BT.inOrder();
// BT.preOrder();
// BT.delete(200);
// BT.recursivDelete(100);
// BT.levelOrder();
// console.log(BT.maxNode());
// console.log(BT.recursiveMaxNode());
// console.log(BT.search(250));
// console.log(BT.recursiveSearch(100));
console.log(BT.isBst())
// console.log(BT)


