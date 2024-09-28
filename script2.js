class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //Append node to the end
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //Insert node at a specific index
    insert(index, data) {
        const newNode = new Node(data);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while(current && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }
    }

    //Reverse a Linked List
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while(current) {
            next = current.next; //Stores next
            current.next = prev; //Reverse pointer
            prev = current; //More prev one step forward
            current = next; //Move current one step forward
        }
        this.head = prev;
    }
    display() {
        let elements = [];
        let current = this.head;
        while(current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements;
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log("Original List:", linkedList.display()); // Output: [10, 20, 30]

// Inserting element at index 1
linkedList.insert(1, 15);
console.log("After Insert:", linkedList.display()); // Output: [10, 15, 20, 30]

// Reversing the linked list
linkedList.reverse();
console.log("After Reverse:", linkedList.display()); // Output: [30, 20, 15, 10]