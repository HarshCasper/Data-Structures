var Node = function(data, next = null){
    this.data = data;
    this.next = next;
}

var linkedList = function(){
    this.head = null;
    this.size = 0;
}

linkedList.prototype = {
    insertFirst: function(data){
        this.head = new Node(data, this.head);
        this.size++;
    },

    insertLast: function(data){
        let node = new Node(data);
        if(!this.head) return this.head = node;
    
        let current = this.head;
        while(current.next) current = current.next;
        current.next = node;
    
        this.size++;
    },

    insertIndex: function(data, index){
        if(index === undefined){
            return console.log("Could not insertIndex to LinkedList no index");
        }
        
        if(index < 0 || index > this.size){
            console.log("invaild index");
            return undefined;
        }
    
        let node = new Node(data);
        let current
        let pervious;
    
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
    
        current = this.head;
        let count = 0;
    
        while(count < index){
            pervious = current;
            count++;
            current = current.next;
        }
    
        node.next = current;
        pervious.next = node;
        this.size++;
    },

    getIndex: function(index){
        let current = this.head;
        let count = 0;
    
        while(current){
            if(count === index){
                console.log(current.data);
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    },

    removeFirst: function(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    },

    removeIndex: function(index){
        if(index > 0 && index > this.size){
            console.log("invaild index");
            return;
        }
        let current = this.head;
        let pervious;
        let count = 0;
    
        if(index === 0){
            this.head = current.next;
            return;
        }
        while(count < index){
            pervious = current;
            count++;
            current = current.next;
        }
        pervious.next = current.next;
        this.size--;
    },

    print: function(){
        let current = this.head;
    
        while(current){
            console.log(current.data);
            current = current.next;
        }
    },

    clearList: function(){
        this.head = null;
        this.size = 0;
    }
}
module.exports = {
    linkedList: linkedList
}

/*
    Function Cheat Sheet:
    LinkedList.insertFirst(item); //Adds item at the start of the LinkedList
    LinkedList.insertLast(item); //Adds item at the end of the LinkedList
    LinkedList.insertIndex(item, index); /Adds item at the index of the LinkedList
    LinkedList.getIndex(index); //Returns value at the index of the LinkedLst
    LinkedList.removeFirst(); //Removes the first item of the LinkedList
    LinkedList.removeIndex(index); //Removes the item at the indexs of the LinkedList
    LinkedList.clearList(); // Removes all the items in the LinkedList
    LinkedList.print(); //Console logs all items of the LinkedList
*/
