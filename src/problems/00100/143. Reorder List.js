let ListNode = require('../../models/ListNode');
let LinkedListHelper = require('../../utils/linkedListHelper');

// https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`head      :  ${head}`);

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

// attempt1: description on the algorithm
let bruteForce = (head) => {
    let result = head;

    return result;
};

let inputs = [
    { head:[1,2,3,4], output:[1,4,2,3] },
    { head:[1,2,3,4,5], output:[1,5,2,4,3] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(reorderList(LinkedListHelper.fromArray(x.head))) === JSON.stringify(LinkedListHelper.fromArray(x.output))));
