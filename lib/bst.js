class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
   
    insert(val) {
        let newNode = new TreeNode(val)
        if (this.root === null) {
            this.root = newNode;
        }
        let hold = this.root;
        let added = true;
        while (added) {
            console.log(hold)
           if (hold.val > newNode.val) {
               console.log("here")
               if (hold.left === null) {
                   hold.left = newNode
                   added = false; 
               } else {
                   hold = hold.left;
               }
           }
           if (hold.val < newNode.val) {
            if (hold.right === null) {
                hold.right = newNode
                added = false; 
            } else {
                hold = hold.right;
            }
           }
        }
    }
}


module.exports = {
    TreeNode,
    BST
};

