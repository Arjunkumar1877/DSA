// class Node{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }


// class BinaryTree{
//     constructor(){
//         this.root = null;
//     }

//  insert(data){
//     const newNode = new Node(data)
//     if(this.root === null){
//         this.root = newNode;
//     }else{
//         this.insertNode(this.root, newNode);
//     }
//  }


//  insertNode(root, newNode){
//     if(newNode.data < root.data){
//         if(root.left === null){
//             root.left = newNode;
//         }else{
//             return this.insertNode(root.left, newNode);
//         }
//     }else{
//         if(root.right === null){
//             root.right = newNode;
//         }else{
//             return this.insertNode(root.right, newNode);
//         }
//     }
//  }


//  search(root, data){
//     if(root === null){
//         return false;
//     }

//     if(root.data === data){
//         return true;
//     }else if(data < root.data){
//         return this.search(root.left, data);
//     }else if(data > root.data){
//         return this.search(root.right, data)
//     }


//  }

//  preOrder(root){
//     if(root !== null){
//         console.log(root.data);
//         this.preOrder(root.left);
//         this.preOrder(root.right)
//     }
//  }

//  inOrder(root){
//     if(root !== null){
//         this.inOrder(root.left);
//         console.log(root.data);
//         this.inOrder(root.right);
//     }
//  }

//  postOrder(root){
//     if(root !== null){
//         this.postOrder(root.left);
//         this.postOrder(root.right);
//         console.log(root.data);
//     }
//  }

//  levelOrder(){
//     let queue = [];
//     queue.push(this.root);
//     while(queue.length){
//         let current = queue.shift();
//         console.log(current.data);
//         if(current.left){
//             queue.push(current.left);
//         }
//         if(current.right){
//             queue.push(current.right);
//         }
//     }
//  }

//  minNode(root){
//     if(root.left === null){
//         return root.data;
//     }else{
//         return this.minNode(root.left)
//     }
//  }

//  maxNode(root){
//     if(root.right === null){
//         return root.data
//     }else{
//         return this.maxNode(root.right);
//     }
//  }

//  delete(data){
//     this.root = this.deleteHelper(this.root, data);
//  }

//  deleteHelper(root, data){
//     if(root === null){
//         return root;
//     }

//     if(data < root.data){
//         root.left = this.deleteHelper(root.left, data);
//     }else if(data > root.data){
//         root.right = this.deleteHelper(root.right, data);
//     }else{
//         if(!root.left && !root.right){
//             return null;
//         }

//         if(!root.left){
//             return root.right;
//         }

//         if(!root.right){
//             return root.left;
//         }

//         root.data = this.minNode(root.right);
//         root.right = this.deleteHelper(root.right, root.data)
//     }
//     return root
//  }

// }

// const BT = new BinaryTree();
// BT.insert(100);
// BT.insert(200);
// BT.insert(50);
// BT.insert(25);
// BT.insert(75);
// BT.insert(150);
// BT.insert(250);
// console.log(BT)
// console.log(BT.search(BT.root, 25));
// BT.preOrder(BT.root);
// BT.inOrder(BT.root);
// BT.postOrder(BT.root);
// BT.levelOrder();
// BT.minNode(BT.root);
// BT.maxNode(BT.root);
// BT.delete(100)
// BT.delete(250)
// BT.delete(150)
// BT.levelOrder();
















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

        const newNode = new Node(data);
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
                    current = current.right
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
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(current, newNode){
        if(newNode.data < current.data){
            if(current.left === null){
                current.left = newNode;
            }else{
                return this.insertNode(current.left, newNode);
            }
        }else{
            if(current.right === null){
                current.right = newNode;
            }else{
                return this.insertNode(current.right, newNode);
            }
        }
    }

    search(data){
       let current = this.root;
       while(current !== null){
           if(data < current.data){
            current = current.left;
           }else if(data > current.data){
           current = current.right;
           }else{
            return true
           }
       }

       return false;
    }

    recursiveSearch(data, current = this.root){

        if(current === null){
            return false;
        }

        if(current.data === data){
            return true;
        }else if(data < current.data){
            return this.recursiveSearch(data, current.left);
        }else{
            return this.recursiveSearch(data, current.right);
        }

    }

    recursiveMinNode(current = this.root){
        if(current.left === null){
            return current.data;
        }else{
            return this.recursiveMinNode(current.left)
        }
    }

    minNode(current = this.root){
        while(current && current.left !== null){
             current = current.left;
        }

        return current.data
    }

    recursiveMaxNode(current = this.root){
        if(current.right === null){
            return current.data;
        }else{
            return this.recursiveMaxNode(current.right);
        }
    }

    maxNode(current = this.root){
      while(current && current.right !== null){
        current = current.right;
      }
      return current.data;

    }

    delete(data){
      this.deleteHelper(data, this.root, null);
    }

    deleteHelper(data, current, parent){
      while(current !== null){
        if(data < current.data){
            parent = current;
            current = current.left;
        }else if(data > current.data){
            parent = current;
            current = current.right;
        }else{
            if(current.left !== null && current.right !== null){
              current.data =  this.minNode(current.right);
              this.deleteHelper(current.data, current.right, current)
            }else{
                if(parent === null){
                    if(current.right === null){
                        this.root = current.left;
                    }else{
                        this.root = current.right;
                    }
                }else{
                    if(parent.left === current){
                         if(current.right === null){
                         parent.left = current.left
                         }else{
                            parent.left = current.right;
                         }
                    }else{
                       if(current.right === null){
                        parent.right = current.left;
                       }else{
                        parent.right = current.right;
                       }
                    }
                }
            }
            break;
        }
        
      }
    }

    recursiveDelete(data){
        this.root = this.recursiveDeleteHelper(data, this.root)
    }

    recursiveDeleteHelper(data, current){
        if(current === null){
            return current;
        }

        if(data < current.data){
            current.left =  this.recursiveDeleteHelper(data, current.left);
        }else if(data > current.data){
            current.right =  this.recursiveDeleteHelper(data, current.right);
        }else{
           if(!current.left && !current.right){
            return null;
           }

           if(!current.left){
            return current.right;
           }

           if(!current.right){
            return  current.left;
           }

           current.data = this.minNode(current.right);
           current.right = this.recursiveDeleteHelper(current.data, current.right);
        }
        return current;
    }

    preOrder(current = this.root){
        if(current !== null){
            console.log(current.data);
            this.preOrder(current.left);
            this.preOrder(current.right);
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





}

const BT = new BinaryTree();


// BT.insert(100);
// BT.insert(200);
// BT.insert(50);
// BT.insert(25);
// BT.insert(75);
// BT.insert(150);
// BT.insert(250);

BT.recursiveInsert(100);
BT.recursiveInsert(200);
BT.recursiveInsert(50);
BT.recursiveInsert(25);
BT.recursiveInsert(75);
BT.recursiveInsert(150);
BT.recursiveInsert(250);

// console.log(BT.search(250))
console.log(BT.recursiveSearch(250))
// BT.delete(100)
// BT.recursiveDelete(150)
// BT.recursiveDelete(250)
console.log(BT)
console.log(BT.recursiveMinNode());
console.log(BT.minNode());
console.log(BT.recursiveMaxNode());
console.log(BT.maxNode());
BT.preOrder();
BT.inOrder();
BT.postOrder();