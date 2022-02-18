let LinkedListHelper = require('../../utils/linkedListHelper');

// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`head    :  ${head}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = tracking(head);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// attempt1: loop through the list and mark each node we've already visited
let tracking = (head) => {
    // Special case
    if (head == null) return false;

    let current = head;

    while (current.next != null) {
        //console.log(`  checking ${current.val} -> ${current.next.val}`);
        current.visited = true;
        current = current.next;

        if (current.visited) return true;
    }

    return false;
};


// https://leetcode.com/problems/linked-list-cycle/discuss/44489/O(1)-Space-Solution
// Use 2 pointers, traversing the list at different speed.
// If there is a cycle, they will eventually meet up.
let twoPointers = (head) => {
    // Special case
    if (head == null) return false;

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        console.log(`  s: ${slow.val}, f: ${fast.val}`);

        if (slow == fast) return true;
    }

    return false;
};

let inputs = [
    { head:[3,2,0,-4], pos:1, output:true },
    { head:[1,2], pos:0, output:true },
    { head:[1], pos:-1, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => {
    let l = LinkedListHelper.fromArray(x.head);
    
    // TODO: set l's last node.next to (x.pos)th node

    hasCycle(l.head) == x.output;
}));