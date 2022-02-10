// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let startTime = Date.now();
    console.log('  heapUsed 1: ', process.memoryUsage().heapUsed);

    let l1i = l1;
    let l2i = l2;
    
    let result = new ListNode(0, null);
    let result_current_node = result;
    let carry_over = 0;
    while (l1i || l2i) {
        // Calculate the current positions
        let current_sum = (l1i ? l1i.val : 0) + (l2i ? l2i.val : 0) + carry_over;
        carry_over = Math.floor(current_sum/10);
        current_sum = current_sum % 10;
        
        // Create a new node to hold the sum
        let temp = new ListNode(current_sum, null);
        
        // Point the current node's next to the new node
        result_current_node.next = temp;
        
        // Shift to the new node
        result_current_node = temp;
        
        // Update the positions578
        l1i = l1i ? l1i.next : null;
        l2i = l2i ? l2i.next : null;
    }
    
    // If there is an extra carry over, add a new node for it
    if (carry_over > 0) {
        result_current_node.next = new ListNode(carry_over, null);
    }
    
    let endTime = Date.now();
    console.log('  heapUsed 2: ', process.memoryUsage().heapUsed);
    console.log('  Total time: ', endTime - startTime);

    return result.next;
};


let input1 = [2,4,3];
let input2 = [5,6,4];
let output = addTwoNumbers(input1, input2);
console.log(output);
