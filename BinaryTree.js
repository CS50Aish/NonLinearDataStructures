class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); // Corrected to use this.insertNode
        }
    }

    insertNode(rootNode, newNode) {
        if (newNode.data < rootNode.data) {
            if (!rootNode.left) {
                rootNode.left = newNode;
            } else {
                this.insertNode(rootNode.left, newNode);
            }
        } else {
            if (!rootNode.right) {
                rootNode.right = newNode;
            } else {
                this.insertNode(rootNode.right, newNode);
            }
        }
    }

    // In-Order traversal - First all left nodes, then root node and then all right nodes
    inOrderTraversal(node, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.data);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

const tree = new BinaryTree();

tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(25);

console.log("Binary Tree: ", tree);
