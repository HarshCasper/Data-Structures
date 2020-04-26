var Node = function(element, priority){
    this.element = element;
    this.priority = priority;
}

var PriorityQueue = function(){
    this.collection = [];
}

PriorityQueue.prototype = {
    enqueue: function(element, priority){
        var newNode = new Node(element, priority); 
        var contain = false; 
    
        for (var i = 0; i < this.collection.length; i++) { 
            if (this.collection[i].priority > newNode.priority) { 
                this.collection.splice(i, 0, newNode); 
                contain = true; 
                break; 
            } 
        } 
    
        if (!contain) this.collection.push(newNode); 
    },

    dequeue: function(){
        if(this.collection.length === 0) return console.log("Queue is empty");
        return this.collection.shift(); 
    },

    peek: function(){
        if(this.collection.length === 0) return console.log("Queue is empty");
        console.log(this.collection[0]);
        return this.collection[0];
    },

    size: function(){
        return this.collection.length;
    },

    print: function(){
        console.log(this.collection);
    }
}

module.exports = {
    PriorityQueue: PriorityQueue
}


/*
    Function Cheat Sheet:
    PriorityQueue.enqueue(item); //Adds item to queue
    PriorityQueue.dequeue(); //Removes item from queue
    PriorityQueue.print(); //Console logs all items of the Queue
    PriorityQueue.size(); //Returns Queues size
    PriorityQueue.peek(); //Returns first item in Queue
*/
