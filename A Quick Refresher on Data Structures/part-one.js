class Node {
    constructor(val=null, nextNode=null) {
        this.val = val;  // own value
        this.nextNode = nextNode;  // pointer to next node
    }

    getInfo() {
        const nextVal = this.nextNode ? this.nextNode.val : null;  // if there is a next node, set nextVal to the next node's values; otherwise, set nextVal to null
        return `Value: ${this.val} | Next Node: ${nextVal}`;
    }
}

class LinkedList {
    constructor(val=null) {
        this.startNode = val == null ? null : new Node(val);  // if val is null, startNode will start out as null; otherwise, startNode will be a node containing val
        this.len = val == null ? 0 : 1;  // either 0 or 1 element in linked list, depending on whether list was initialized with a value or not
    }

    print() {
        for (let node = this.startNode; node != null; node = node.nextNode) {  // start from starting node and keep on jumping to next node until we reach the last node
            console.log(node.getInfo());
        }
        console.log("\n");
    }

    addNode(val=null, pos=this.len) {  // default position to add a node is at the end of the linked list
        if (pos < 0 || pos > this.len) throw Error(`Attempt to add node at position ${pos} of linked list, which has a length of ${this.len}`);
        else if (pos == 0) {  // special corner case for adding to beginning of linked list
            let tmp = this.startNode;  // temporary variable that stores current linked list
            this.startNode = new Node(val, tmp);  // let new node point to original linked list, joining the two linked lists together
        }
        else {  // otherwise, we're adding to middle of list or end of list
            let node = this.startNode;
            for (let i = 0; i < pos - 1; i++) {  // start from starting node and keep on jumping to next node until we reach node before pos
                node = node.nextNode;
            }
            let tmp = node.nextNode;  // temporary variable that stores nodes that current node points to
            node.nextNode = new Node(val, tmp);  // let current node point to new node, which points to the rest of the nodes
        }
        this.len++;  // new item was added
    }

    removeNode(pos=this.len - 1) {  // default position of node to be removed is position of last node in linked list
        if (this.startNode == null || pos >= this.len) throw Error(`Attempt to remove node at position ${pos} of linked list, which has a length of ${this.len}`);
        else if (pos == 0) {  // special corner case for removing first node
            let tmp = this.startNode.nextNode;  // temporary variable that stores current linked list
            delete this.startNode;  // delete the first node
            this.startNode = tmp;  // new first node is node after original first node
        }
        else {  // otherwise, we're removing from middle of list or end of list(a special corner case)
            let node = this.startNode;
            for (let i = 0; i < pos - 1; i++) {  // start from starting node and keep on jumping to next node until we reach node before pos
                node = node.nextNode;
            }
            let tmp = node.nextNode.nextNode;  // temporary variable that stores nodes that node after current node points to
            delete node.nextNode;  // delete node after current node, which will delete the node at pos
            node.nextNode = tmp;  // let current node point to tmp, which points to the rest of the nodes
        }
        this.len--;  // an item was removed
    }
}

class Queue extends LinkedList {  // inherit all properties/methods from LinkedList
    constructor(val=null) {
        super(val);
    }
    
    addNode(val=null) {  // also known as enqueue - naming this as addNode allows it to override the addNode() method of LinkedList so nodes can only be added to end of queue
        super.addNode(val);
    }
    
    removeNode() {  // also known as dequeue - naming this as removeNode allows it to override the removeNode() method of LinkedList so nodes can only be removed from beginning of queue
        super.removeNode(0);
    }
}

class Stack extends LinkedList {  // inherit all properties from LinkedList
    constructor(val=null) {
        super(val);
    }   
    
    addNode(val=null) {  // also known as push - naming this as addNode allows it to override the addNode() method of LinkedList so nodes can only be added to top of stack
        super.addNode(val);
    }
    
    removeNode() {  // also known as pop - naming this as removeNode allows it to override the removeNode() method of LinkedList so nodes can only be removed from top of stack
        super.removeNode();
    }
}
