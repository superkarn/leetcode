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
    let result = bruteForce(head);
    
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
let bruteForce = (head) => {
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