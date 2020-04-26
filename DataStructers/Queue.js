var Queue = function(){
    this.collection = [];
}

Queue.prototype = {
    enqueue: function(element){
        this.collection.push(element);
    },

    print: function(){
        return console.log(this.collection);
    },

    dequeue: function(){
        if(this.collection.length === 0) return console.log("Queue is empty");
        this.collection.shift();
        return collection[0];
    },

    peek: function(){
        if(this.collection.length === 0) return console.log("Queue is empty");
        return this.collection[0];
    },

    size: function(){
        console.log(this.collection.length);
        return this.collection.length;
    }
}
module.exports = {
    Queue: Queue
}

/*
    Function Cheat Sheet:
    Queue.enqueue(item); //Adds item to queue
    Queue.dequeue(); //Removes item from queue
    Queue.print(); //Console logs all items of the Queue
    Queue.size(); //Returns Queues size
    Queue.peek(); //Returns first item in Queue
*/
