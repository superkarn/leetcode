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
    let result = bruteForce(head, n);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (head, n) => {
    let result = head

    return result;
};

let inputs = [
    { head:[1,2,3,4,5], n:2, output:[1,2,3,5] },
    { head:[1], n:1, output:[] },
    { head:[1,2], n:1, output:[1] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(removeNthFromEnd(x.head, x.n)) === JSON.stringify(x.output)));
