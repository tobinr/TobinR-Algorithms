// Tobin Risser's Fronts

// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class sll {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    display(){
        let i = 0;
        let current = this.head;
        let str = "";
        while (current) {
            str += i + ": " + current.value + " ";
            current = current.next;
            i++; 
        }
        console.log(str);
    }

    addFront(value) {
        if (this.head === null){
            this.head = new Node(value);
            return this;
        } else {
            var temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        this.size++;
        return this
    }

    removeFront() {
        if (this.head === null) {
            console.log("This list is empty");
        } else {
            console.log(`Value ${this.head.value} has been removed`);
            this.head = this.head.next;
        }
        return this
    }

    front() {
        if (this.head === null){
            return null
        }
        return this.head.value
    }

}

var list = new sll();
list.addFront(23);
list.addFront(32);
list.addFront(45);
list.addFront(56);
list.display();
list.removeFront();
list.display();
console.log(list.front());