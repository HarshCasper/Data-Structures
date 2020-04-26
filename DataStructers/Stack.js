var Stack = function(){
    this.count = 0;
    this.storage = [];
}

Stack.prototype = {
    push: function(value){
        this.storage.push(value)
        this.count++;
    },

    pop: function(){
        if(this.count === 0) return undefined;
        this.storage.length -= 1;
        this.count--;
    },

    peek: function(){
        if(count === 0) return undefined;
        return this.storage[this.count-1]
    },

    size: function(){
        return this.count;
    },

    print: function(){
        return console.log(this.storage);
    }
}

module.exports = {
    Stack: Stack
}

/*
    Function Cheat Sheet:
    Stack.push(item); //Adds item to the top of the Stack
    Stack.pop(); //Removes item from the top of the Stack
    Stack.print(); //console logs all items in the Stack
    Stack.size(); //Returns Stacks size
    Stack.peek(); //Returns first item in Stack
*/
