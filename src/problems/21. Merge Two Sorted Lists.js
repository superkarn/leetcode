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
    let result = bruteForce(list1, list2);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result.toString());
    console.log('--------------------------');

    return result;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

    this.toString = () => {
        let str = `${this.val}`;
        let n = this.next;

        if (n) {
            while (n.next) {
                str += `, ${n.val}`;
                n = n.next;
            }

            // The last node            
            str += `, ${n.val}`;
        }
        return str;
    }
}
    
// https://stackoverflow.com/a/63599046/1398750
let convertArrayToLinkedList = (a) => {
    return a.reverse().reduce((acc, curr) => new ListNode(curr, acc), null);
};

// attempt1: description on the algorithm
let bruteForce = (list1, list2) => {
    // The first node is a place holder.  Remove it before returning the result.
    let result = new ListNode('', null);

    // r is the current node of the result
    let r = result;

    while (list1.next != null || list2.next != null) {
        console.log(`  ${list1.val} vs ${list2.val}`);
        if (list1.val <= list2.val) {
            console.log(`    r.next (${r.val}) -> list1 (${list1.val})`);
            r.next = list1;
            r = r.next;
            
            // If list1 has more nodes, move the pointer to the next node
            if (list1.next != null) {
                list1 = list1.next;
            } 
            // If list1 is out, get the rest of list2
            else {
                console.log(`  list1 is empty`);
                r.next = list2;
                break;
            }
        } else {
            console.log(`    r.next (${r.val}) -> list2 (${list2.val})`);
            r.next = list2;
            r = r.next;
            
            // If list2 has more nodes, move the pointer to the next node
            if (list2.next != null) {
                list2 = list2.next;
            } 
            // If list2 is out, get the rest of list1
            else {
                console.log(`  list2 is empty`);
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

//let list1 = [1,2,4], list2 = [1,3,4]; // [1,1,2,3,4,4]
let list1 = [1,2,6,6,7,8], list2 = [1,3,4,5]; // [1,1,2,3,4,5,6,6,7,8]
//let list1 = [], list2 = []; // []
//let list1 = [], list2 = [0]; // [0]

let output = mergeTwoLists(convertArrayToLinkedList(list1), convertArrayToLinkedList(list2));