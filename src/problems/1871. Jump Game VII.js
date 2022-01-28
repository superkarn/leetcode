// https://leetcode.com/problems/jump-game-vii/
/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);
    console.log(`minJump   :  ${minJump}`);
    console.log(`maxJump   :  ${maxJump}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s, minJump, maxJump);
    
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
let bruteForce = (s, minJump, maxJump) => {
};

let inputs = [
    { s:"011010", minJump:2, maxJump:3, output:true },
    { s:"01101110", minJump:2, maxJump:3, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => canReach(x.s, x.minJump, x.maxJump) == x.output));