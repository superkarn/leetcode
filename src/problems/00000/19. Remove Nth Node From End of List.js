let ListNode = require('../../models/ListNode');
let LinkedListHelper = require('../../utils/linkedListHelper');

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`head      :  ${head}`);
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = twoPointers(head, n);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(LinkedListHelper.toArray(result));
    console.log('--------------------------');

    return result;
};

// Reverse the list, remove the (n-1)th node, reverse back
let reverse = (head, n) => {
    //console.log(`  before: `, LinkedListHelper.toString(head));

    head = LinkedListHelper.reverse(head);
    //console.log(`  after: `, LinkedListHelper.toString(head));

    head = removeNthNode(head, n-1);

    head = LinkedListHelper.reverse(head);
    //console.log(`  result: `, LinkedListHelper.toArray(head));

    return head;
};
let removeNthNode = (head, n) => {
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

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/8804/Simple-Java-solution-in-one-pass
// Set 2 pointers, one is n+1 ahead of the other one.
// Move both at the same speed.  When the front gets to the end,
// the back is n+1 away from the end.  
// Then we can set back.next to skip the desired node.
let twoPointers = (head, n) => {
    let start = new ListNode();
    start.next = head;
    let front = start;
    let back = start;

    // Move front n+1 nodes ahead.
    for (let i=0; i<n+1; i++) {
        front = front.next;
    }

    // Move both together until front hits the end
    while (front) {
        front = front.next;
        back = back.next;
    }

    // Remove the desired node
    back.next = back.next.next;

    return start.next;
};

let inputs = [
    { head:[1], n:1, output:[] },
    { head:[1,2], n:1, output:[1] },
    { head:[1,2,3], n:1, output:[1,2] },
    { head:[1,2,3,4], n:1, output:[1,2,3] },
    { head:[1,2,3,4,5], n:1, output:[1,2,3,4] },
    { head:[1,2,3,4,5], n:2, output:[1,2,3,5] },
    { head:[1,2,3,4,5], n:3, output:[1,2,4,5] },
    { head:[1,2,3,4,5,6,7,8], n:8, output:[2,3,4,5,6,7,8] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(removeNthFromEnd(LinkedListHelper.fromArray(x.head), x.n)) === JSON.stringify(LinkedListHelper.fromArray(x.output))));
