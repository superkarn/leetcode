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
    let result = threeSteps(head);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Loop through the list to create a doubly linked list.
// Then loop through again to create the result
let bruteForce = (head) => {
    let result = head;

    return result;
};

// https://www.youtube.com/watch?v=S5bfdUTrKLM
// 1. Find mid point
// 2. Reverse the list of the 2nd list
// 3. Merge first and second lists
let threeSteps = (head) => {
    console.log(`1: ${LinkedListHelper.toString(head)}`);

    // 1. Find mid point
    // Using slow/fast pointers.  
    let slow = head;
    let fast = head.next;
    while (slow && fast) {
        console.log(`  slow: ${slow.val}`);
        console.log(`  fast: ${fast.val}`);

        slow = slow?.next;
        fast = fast?.next?.next;
    }
    // At the end, slow is the last node in the first list.
    // Head of second list is slow.next
    console.log(`  middle: ${slow.val}`);
    

    // 2. Reverse the list of the 2nd list
    let prev = slow;
    let current = slow.next;
    let next = null;
    console.log(`    prev:    ${prev?.val}`);
    console.log(`    current: ${current?.val} -> ${current?.next?.val}`);
    console.log(`    next:    ${next?.val}`);
    console.log(`    -----`);

    while (current != null) {     
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

        console.log(`    prev:    ${prev?.val}`);
        console.log(`    current: ${current?.val} -> ${current?.next?.val}`);
        console.log(`    next:    ${next?.val}`);
        console.log(`    -----`);
    }
    console.log(`    -----`);
    console.log(`2: ${LinkedListHelper.toString(head)}`);
    
    let head2 = prev;
    console.log(`    head: ${head?.val} -> ${head?.next?.val} -> ${head?.next?.next?.val} -> ${head?.next?.next?.next?.val} -> ${head?.next?.next?.next?.next?.val}`);
    console.log(`    head2: ${head2?.val} -> ${head2?.next?.val}`);

    // 3. Merge first and second lists
    let l1 = head;
    let l2 = prev;
    console.log(`  l1: ${l1.val}`);
    console.log(`  l2: ${l2.val}`);
    // while (l1.next != prev) {
    //     console.log(`    l1: ${l1.val}, prev: ${prev.val}`);
    //     let tmp1 = l1.next;
    //     let tmp2 = l2.next;

    //     // Add next nodes to the list
    //     l1.next = l2;
    //     l2.next = tmp1;

    //     // Move pointers
    //     l1 = tmp1;
    //     l2 = tmp2;
    // }
};

let inputs = [
    //{ head:[1,2,3,4], output:[1,4,2,3] },
    { head:[1,2,3,4,5], output:[1,5,2,4,3] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(reorderList(LinkedListHelper.fromArray(x.head))) === JSON.stringify(LinkedListHelper.fromArray(x.output))));
