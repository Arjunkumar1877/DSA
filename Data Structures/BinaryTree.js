class Node {
    constructor(data){
        this.data = data;
        this.left  = null;
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
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode;
            }else{
                return this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                return this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, data){
        if(!root){
            return false;
        }

        if(root.data === data){
            return true;
        }else if(data < root.data){
            return this.search(root.left, data);
        }else{
            return this.search(root.right, data);
        }
    }

    preOrder(root){
        if(root !== null){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root !== null){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            console.log(root.data);
            this.postOrder(root.right);
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

    minNode(root){
        if(root.left === null){
            return root.data;
        }else{
            return this.minNode(root.left);
        }
    }

    maxNode(root){
        if(root.right === null){
            return root.data;
        }else{
            return this.maxNode(root.right);
        }
    }

    delete(data){
        this.root = this.deleteHelper(this.root, data);
    }

    deleteHelper(root, data){
        if(root === null){
            return root;
        }

        if(data < root.data){
            root.left = this.deleteHelper(root.left, data);
        }else if(data > root.data){
            root.right = this.deleteHelper(root.right, data);
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }

            if(!root.right){
                return root.left;
            }

            root.data = this.minNode(root.right);
            root.right = this.deleteHelper(root.right, root.data);
        }
        return root;
    }

}

// Usage example
const BT = new BinaryTree();

BT.insert(100);
BT.insert(200);
BT.insert(50);
BT.insert(25);
BT.insert(75);
BT.insert(150);
BT.insert(250);

// // Inorder Traversal
// BT.inOrder(BT.root);  //25, 50, 75, 100, 150, 200, 250


// console.log(BT.search(BT.root, 75));
// // Preorder Traversal
// BT.preOrder(BT.root);  //  100, 50, 25, 75, 200, 150, 250
// BT.postOrder(BT.root) // 25, 50, 75, 100, 150, 200, 250, 100

// console.log(BT.root.data);

BT.delete(100)

console.log(BT.levelOrder()) //

// console.log(BT.minNode(BT.root));

// console.log(BT.maxNode(BT.root))


