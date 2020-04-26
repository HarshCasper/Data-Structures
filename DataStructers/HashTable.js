var HashTable = function(){
    this.storage = [];
    this.buckets = 10;
}

HashTable.prototype = {
    add: function(key, value){
        if(value === undefined){
            return console.log("Could not add to HashTable no value");
        }
        var index = hash(key, this.buckets);
        if(this.storage[index] === undefined){
            this.storage[index] = [
                [key, value]
            ];
        }else{
            var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if(inserted === false){
                this.storage[index].push([key, value]);
            }
        }
    },

    remove: function(key){
        var index = hash(key, this.buckets);
        if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
            delete storage
        }else{
            for(var i =0; 0 < this.storage[index]; i++){
                if(this.storage[index][i][0] === key){
                    delete this.storage[index[i]];
                }
            }
        }
    },

    getIndex: function(key){
        var index = hash(key, this.buckets);
        if(this.storage[index] === undefined){
            return undefined;
        }else{
            for(var i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    console.log(this.storage[index][i][1]);
                    return this.storage[index][i][1];
                }
            }
        }
    },

    print: function(){
        return console.log(this.storage);
    }
}

module.exports = {
    HashTable: HashTable
}

var hash = function(string, max){
    var hash = 0;
    for(var i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash % max;
}

/*
    Function Cheat Sheet:
    Hash.add(name, item); //Adds item into the HashTable
    Hash.remove(name); //Removes item from the HashTable
    Hash.print(); //console logs all items in the HashTable
    Hash.getIndex(); //Returns value at the index of the HashTable
*/
