/*
 This file is dependent on part-one.js, so head over and download that if you're planning to use this file!
*/

class HashTable {
    constructor() {
        this.table = [];
        for (let i = 0; i < 26; i++) {
            this.table.push(new LinkedList());  // add to this.table a new linked list, which will represent a letter in the alphabet
        }
    }

    print() {
        for (let list of this.table) {
            if (list.len == 0) console.log("No nodes in current bucket\n");
            else list.print();
        }
    }

    hash(chr) {
        return chr.charCodeAt() - 97;  // return ASCII value minus 97 to get actual position in this.table
    }

    add(val) {
        if (val.length == 0) throw Error("Attempt to add a empty value to hash table");
        let pos = this.hash(val[0].toLowerCase());  // val has at least a length of one, so we can just pass the lowercase version of the first letter in val to hash()
        this.table[pos].addNode(val, 0);  // adding val to the beginning of the current linked list is actually quicker than adding it to the end, hence the 0
    }
}
