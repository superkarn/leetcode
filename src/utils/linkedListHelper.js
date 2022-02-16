let ListNode = require('../models/ListNode');

class LinkedListHelper {
    static fromArray = (a) => {
        return a.reverse().reduce((acc, curr) => new ListNode(curr, acc), null);
    };

    static toString = (head) => {
        if (head == null) return '';
        
        return `${head.val}, ${LinkedListHelper.toString(head.next)}`;
    };
}

module.exports = LinkedListHelper;