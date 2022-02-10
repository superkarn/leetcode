// https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`a         :  ${a}`);
    console.log(`b         :  ${b}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = backward(a, b);
    
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
let bruteForce = (a, b) => {
    let long = [], short = [], result = [];

    // For simplicity, set long to the longer of the two numbers
    // In revesed order
    if (a.length >= b.length) {
        long = a.split('').reverse();
        short = b.split('').reverse();
    } else {
        long = b.split('').reverse();
        short = a.split('').reverse();
    }

    let carryOver = 0;

    // Traverse the digits
    for (let i=0; i<long.length; i++) {
        if (i < short.length) {
            short_i = parseInt(short[i]);
        } else {
            short_i = 0;
        }

        let sum = parseInt(long[i]) + short_i + carryOver;
        //console.log(`  ${i}: ${long[i]} + ${short_i} + ${carryOver} = ${sum}`);
        switch(sum) {
            case 0:
            case 1:
                result[i] = sum;
                carryOver = 0;
                break;
            case 2:
                result[i] = 0;
                carryOver = 1;
                break;
            case 3:
                result[i] = 1;
                carryOver = 1;
                break;
        }
    }

    if (carryOver == 1) {
        result[long.length] = 1;
    }

    //console.log(result);
    return result.reverse().join('');
};

let backward = (a, b) => {
    // special cases
    if (!a || a.length == 0 || a[0] == "0") return b;
    if (!b || b.length == 0 || b[0] == "0") return a;

    let i = a.length-1;
    let j = b.length-1;
    let carryOver = 0;
    let result = [];

    while (i>=0 || j>=0 || carryOver>0) {
        let ai = a[i] ? a[i] : 0;
        let bj = b[j] ? b[j] : 0;
        let sum = parseInt(ai) + parseInt(bj) + carryOver;

        //console.log(`  ${ai} + ${bj} + ${carryOver} = ${sum}`);
        switch(sum) {
            case 0:
            case 1:
                result.push(sum);
                carryOver = 0;
                break;
            case 2:
                result.push(0);
                carryOver = 1;
                break;
            case 3:
                result.push(1);
                carryOver = 1;
                break;
        }

        i--;
        j--;
        //console.log(result);
    }

    return result.reverse().join('');
};

let inputs = [
    { a:"11", b:"1",  output:"100" },
    { a:"1010", b:"1011", output:"10101" },
    { a:"0", b:"0", output:"0" },
    { a:"0", b:"1", output:"1" },
    { a:"1", b:"0", output:"1" },
    { a:"1", b:"1", output:"10" },
];

// Comparing scalar output
console.log(inputs.map(x => addBinary(x.a, x.b) == x.output));