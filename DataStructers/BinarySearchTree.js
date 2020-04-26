var Node = function(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
}

var BinarySearchTree = function(){
    this.root = null;
}

BinarySearchTree.prototype = {
    add: function(data){
        var newNode = new Node(data);               
        if(this.root === null){
            this.root = newNode; 
        }else{
            addNode(this.root, newNode); 
        }
    },

    remove: function(index){
        this.root = removeNode(this.root, index);
    },

    findMin: function(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    },

    findMax: function(){
        let current = this.root;
        while(current.right!== null){
            current = current.right;
        }
        return current.data;
    },

    getIndex: function(index){
        let current = this.root;
        while(current.data !== index){
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current.data;
    },

    findHeight: function(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.FindHeight(node.left);
        let right = this.FindHeight(node.right);
        if(left > right){
            return left + 1;
        }else{
            return right + 1;
        }
    },

    traverse: function(){
        if(this.root === null){
            return null;
        }else{
            var result = new Array();
            var InOrder = function(node){
                node.left && InOrder(node.left);
                result.push(node.data);
                node.right && InOrder(node.right);
            }
            InOrder(this.root, result);
            return result;
        }
    }
}

const addNode = function(node, newNode) { 
    if(newNode.data < node.data) { 
        if(node.left === null){
            node.left = newNode; 
        }else{
            addNode(node.left, newNode);  
        } 
    }else{ 
        if(node.right === null){
            node.right = newNode;
        }else{
            addNode(node.right,newNode); 
        }  
    } 
} 


const removeNode = function(node, data){
    if(node == null){
        return null;
    }

    if(data === node.data){
        if(node.left == null && node.right == null){
            return null;
        }
        if(node.left == null){
            return node.right;
        }
        if(node.right == null){
            return node.left;
        }
        var tempNode = node.right;
        while(tempNode.left !== null){
            tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else{
        node.right = removeNode(node.right, data);
        return node;
    }
}

module.exports = {
    BinarySearchTree: BinarySearchTree
}

/*
    Function Cheat Sheet:
    BinarySearchTree.Add(item); //Adds item to BinarySearchTree
    BinarySearchTree.Remove(index); //Removes item from BinarySearchTree
    BinarySearchTree.GetIndex(index); //Returns item at index
    BinarySearchTree.FindMin(); //Returns smallest item
    BinarySearchTree.FindMax(); //Returns largest item
    BinarySearchTree.FindHieght(); //Returns the hieght of BinarySearchTree
    BinarySearchTree.Traverse(); //Console logs all items in order
*/
