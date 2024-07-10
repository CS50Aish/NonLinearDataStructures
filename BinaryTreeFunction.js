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
        this.root = this._insert(this.root, data);
    }

    _insert(node, data){
        if(!node){
            return new Node(data);
        }
        if(data < node.data){
            node.left = this._insert(node.left, data);
        }
        else if(data > node.data){
            node.right = this._insert(node.right, data);
        }
        return node;
    }

    search(data, node=this.root){
        if(!node){
            return false;
        }
        if(data === node.data){
            return true;
        }
        else if(data < node.data){
            return this.search(data, node.left);
        }
        else{
            return this.search(data, node.right);
        }
    }

    findMin(node = this.root){
        if(!node){
            return null;
        }
        while(node.left){
            node = node.left;
        }
        return node.data;
    }
}

const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(2);

console.log("Binary Tree: ", tree);
console.log();