// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
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

// attempt1: description on the algorithm
let bruteForce = (head) => {
    let result = head;

    return result;
};

let inputs = [
    { head:[1,2,3,4,5], output:[5,4,3,2,1] },
    { head:[1,2], output:[2,1] },
    { head:[], output:[1] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(reverseList(x.head)) === JSON.stringify(x.output)));
