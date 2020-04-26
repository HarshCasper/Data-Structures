let ll = require("./LinkedList");
let Ll = new ll.linkedList();

var LinkedQueue = function(){
    this.collection = new Ll();
}

LinkedQueue.prototype = {
    enqueue: function(element){
        collection.insertLast(element);
    },

    print: function(){
        collection.print();
    },

    dequeue: function(){
        if(collection.length === 0) return console.log("Queue is empty");
        collection.removeFirst();
        return collection[0];
    },

    peek: function(){
        if(collection.length === 0) return console.log("Queue is empty");
        return collection[0];
    },

    size: function(){
        if(collection.length === 0) return console.log("Queue is empty");
        return collection.length;
    }
}

module.exports = {
    LinkedQueue: LinkedQueue
}

/*
    Function Cheat Sheet:
    Queue.enqueue(item); //Adds item to queue
    Queue.dequeue(); //Removes item from queue
    Queue.print(); //console logs all items of the Queue
    Queue.size(); //Returns Queues size
    Queue.peek(); //Returns first item in Queue
*/
