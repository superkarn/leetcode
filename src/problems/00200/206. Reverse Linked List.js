let LinkedListHelper = require('../../utils/linkedListHelper');

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
    let result = twoPointers(head);
    
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
    let next = head?.next;

    while (next != null) {
        let n2 = next.next;
        let h2 = head;

        head = next;
        head.next = h2;
        next = n2;
        
        // Special case the first node
        if (head?.next?.next == head) {
            head.next.next = null;
        }
    }
    return head;
};

// https://leetcode.com/problems/reverse-linked-list/discuss/1449712
let twoPointers = (head) => {
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

let inputs = [
    { head:[1,2,3,4,5], output:[5,4,3,2,1] },
    { head:[1,2], output:[2,1] },
    { head:[], output:[] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(reverseList(LinkedListHelper.fromArray(x.head))) === JSON.stringify(LinkedListHelper.fromArray(x.output))));
