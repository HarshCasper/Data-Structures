module.exports = function(){
    let bst = require("./DataStructers/BinarySearchTrees");
    let dll = require("./DataStructers/DoublyLinkedList");
    let ll = require("./DataStructers/LinkedList");
    let q = require("./DataStructers/Queue");
    let ql = require("./DataStructers/QueueLinked");
    let pq = require("./DataStructers/PriorityQueue");
    let s = require("./DataStructers/Stack");
    let hs = require("./DataStructers/HashTable");

    this.DoublyLinkedList = function(){
        return new dll.doublyLinkedList();
    }

    this.LinkedList = function(){
        return new ll.linkedList();
    }

    this.Queue = function(){
        return new q.Queue();
    }

    this.QueueLinked = function(){
        return new ql.LinkedQueue();
    }

    this.PriorityQueue = function(){
        return new pq.PriorityQueue();
    }

    this.Stack = function(){
        return new s.Stack();
    }

    this.BinarySearchTree = function(){
        return new bst.BinarySearchTree();
    }

    this.HashTable = function(){
        return new hs.HashTable();
    }
}
