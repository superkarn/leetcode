let ListNode = require('../../models/ListNode');
let LinkedListHelper = require('../../utils/linkedListHelper');

// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`list1     :  ${list1}`);
    console.log(`list2     :  ${list2}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = recursion(list1, list2);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result ? result.toString() : '');
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (list1, list2) => {
    // Special cases
    if (!list1) return list2;
    if (!list2) return list1;

    // The first node is a place holder.  Remove it before returning the result.
    let result = new ListNode('', null);

    // r is the current node of the result
    let r = result;

    while (list1 && list2) {
        //console.log(`  ${list1.val} vs ${list2.val}`);
        
        if (list1.val <= list2.val) {
            //console.log(`    r (${r.val}) -> list1 (${list1.val})`);
            r.next = list1;
            r = r.next;
            
            // If list1 has more nodes, move the pointer to the next node
            if (list1.next != null) {
                list1 = list1.next;
            } 
            // If list1 is out, get the rest of list2
            else {
                //console.log(`  list1 is empty`);
                r.next = list2;
                break;
            }
        } else {
            //console.log(`    r (${r.val}) -> list2 (${list2.val})`);
            r.next = list2;
            r = r.next;
            
            // If list2 has more nodes, move the pointer to the next node
            if (list2.next != null) {
                list2 = list2.next;
            } 
            // If list2 is out, get the rest of list1
            else {
                //console.log(`  list2 is empty`);
                r.next = list1;
                break;
            }
        }

        //console.log(`    list1:  ${list1.toString()}`);
        //console.log(`    list2:  ${list2.toString()}`);
        //console.log(`    result: ${result.toString()}`);
        //console.log(``);
    }

    return result.next;
};

let recursion = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = recursion(list1.next, list2);
        return list1;
    } else {
        list2.next = recursion(list1, list2.next);
        return list2;
    }
};

let inputs = [
    { list1:[1,2,4], list2:[1,3,4], output:[1,1,2,3,4,4] },
    { list1:[1,3], list2:[2,4], output:[1,2,3,4] },
    { list1:[1,2,6,6,7,8], list2:[1,3,4,5], output:[1,1,2,3,4,5,6,6,7,8] },
    { list1:[], list2:[], output:[] },
    { list1:[], list2:[0], output:[0] },
    { list1:[1], list2:[], output:[1] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(mergeTwoLists(LinkedListHelper.fromArray(x.list1), LinkedListHelper.fromArray(x.list2))) === JSON.stringify(LinkedListHelper.fromArray(x.output))));