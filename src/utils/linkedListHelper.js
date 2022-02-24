let ListNode = require('../models/ListNode');

class LinkedListHelper {
    static fromArray = (a) => {
        return a.reverse().reduce((acc, curr) => new ListNode(curr, acc), null);
    };

    // n=0 is first node
    static removeNthNode = (head, n) => {
        // Special case
        if (n==0) return head.next;
    
        // nodeBeforeRemove is the node before the one we want to remove
        let nodeBeforeRemove = head;
        for (let i=0; i<n-1; i++) {
            nodeBeforeRemove = nodeBeforeRemove.next;
        }
        nodeBeforeRemove.next = nodeBeforeRemove?.next?.next;
    
        return head;
    };

    // #19, n=1 is last node
    static removeNthNodeFromEnd = (head, n) => {
        let start = new ListNode();
        start.next = head;
        let front = start;
        let back = start;
    
        for (let i=0; i<n+1; i++) {
            front = front.next;
        }
    
        while (front) {
            front = front.next;
            back = back.next;
        }
    
        back.next = back.next.next;
    
        return start.next;
    };

    // #206
    static reverse = (head) => {
        let current = head;
        let next = current?.next;
        let previous = null;
    
        while (current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
    
        head = previous;
        return head;
    };

    static toArray = (head) => {
        let result = [];
        let node = head;
        while (node) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    };

    static toString = (head, chainCount=10) => {
        if (head == null) return '';
        if (chainCount == 0) return '';
        
        return `${head.val},${LinkedListHelper.toString(head.next, chainCount-1)}`;
    };
}

module.exports = LinkedListHelper;