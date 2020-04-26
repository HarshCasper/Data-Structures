var Node = function(data){
    this.data = data;
    this.next = null;
    this.previous = null;
}

var doublyLinkedList = function(){
    this.head = null;
    this.tail = null;
}

doublyLinkedList.prototype = {
    insert: function(data){
        const newNode = new Node(data);
                
        if (this.head === null) {
            this.head = newNode;
            this.tail = node;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
        }

        this.tail = newNode;
    },

    insertIndex(data, index) {
        if(index === undefined){
            return console.log("Could not insertIndex to DoublyLinkedList no index")
        }
		let current = this.head;
		let counter = 1;
		let newNode = new Node(data);
		if(index == 0){
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}else{
			while(current){
				current = current.next;
				if(counter == index){
					newNode.previous = current.prev;
					current.previous.next = newNode;
					newNode.next = current;
					current.previous = newNode;
				}
				counter++;
			}
		}
	},

    getIndex: function(index){
        if (index > -1) {
            let current = this[head];
            let i = 0;

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    },

    removeIndex: function(index){
        let current = this.head;
		let counter = 1;
		if(index == 0){
			this.head = this.head.next;
			this.head.previous = null;
		}else{
			while( current ) {
				current = current.next
				if (current == this.tail){
					this.tail = this.tail.previous;
					this.tail.next = null;
				}else if(counter == index){
					current.previous.next = current.next;
					current.next.previous = current.previous;
					break;
				}
				counter++;
			}
		}
    },

    printReverse: function(){
        let current = this.tail;
    
        while(current !== null){
            console.log(current.data);
            current = current.previous;
        }
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
        this.tail = null;
    },

    removeFirst: function(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
}

module.exports = {
    doublyLinkedList: doublyLinkedList
}

/*
    Function Cheat Sheet:
    DoublyLinkedList.insertFirst(item); //Adds item at the start of the DoublyLinkedList
    DoublyLinkedList.insertIndex(item); //Adds item at the end of the DoublyLinkedList
    DoublyLinkedList.getIndex(index); //Returns value at the index of the DoublyLinkedLst
    DoublyLinkedList.removeIndex(index); //Removes the item at the indexs of the DoublyLinkedList
    DoublyLinkedList.clearAll(); // Removes all the items in the DoublyLinkedList
    DoublyLinkedList.print(); //Console logs all items of the DoublyLinkedList
    DoublyLinkedList.printReverse(); //Console logs all items of the DoublyLinkedList in reverse
*/
