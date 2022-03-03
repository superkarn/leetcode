// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`root    :  ${root}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(root);
    
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
let depthFirstSearch = (root) => {
    // Special cases
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    return 1 + Math.max(depthFirstSearch(root.left), depthFirstSearch(root.right));
};

let inputs = [
    { root:[3,9,20,null,null,15,7], output:3 },
    { root:[1,null,2], output:2 },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(maxDepth(x.root)) === JSON.stringify(x.output)));
