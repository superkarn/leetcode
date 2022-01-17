// https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`x    :  ${x}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = binarySearch2(x);
    
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
let binarySearch = (x) => {
    // Special cases
    if (x == 0) return 0;
    if (x < 4) return 1;
    if (x < 9) return 2;

    let l = 0, r = Math.floor(x/2);
    let m1 = 0; // previous m
    let m2 = r; // current m
    while(l < r) {
        let m1_2 = m1*m1;
        let m2_2 = m2*m2;

        //console.log(`  l: ${l}, m: ${m2}, r: ${r}`);
        //console.log(`    (${m1}) ${m1_2} <? ${x} <? ${m2_2} (${m2})`);

        // Found the answer
        if (m1 == m2 || m2_2 == x) {
            //console.log(`    found the answer`);
            return m2;
        }

        // m2 is too big
        if (x < m2_2) {
            r = m2;
            m1 = m2;
            m2 = Math.floor((r-l)/2) + l;
            //console.log(`    ${m1} is too big, -> ${m2}`);
            continue;
        }

        // m2 is too small
        if (x > m2_2) {
            l = m2;
            m1 = m2;
            m2 = Math.floor((r-l)/2) + l;
            //console.log(`    ${m1} is too small, -> ${m2}`);
            continue;
        }
    }

    // Should not get here
    return -1;
};

// https://leetcode.com/problems/sqrtx/discuss/25047/A-Binary-Search-Solution
// Another binary search method with some optimizations
// e.g. no need to calculate x^2
let binarySearch2 = (x) => {
    // Special case
    if (x == 0) return 0;

    let l = 0, r = x;

    while (true) {
        let m = l + Math.floor((r-l)/2);

        // If m^2 > x, then we shift r
        if (m > x/m) {
            r = m-1;
        } else {
            // If (m+1)^2 > x, we found the answer
            if (m+1 > x/(m+1)) {
                return m;
            }

            // else we shift l
            l = m+1;
        }
    }
};

let inputs = [
    { x:1, output:1 },
    { x:2, output:1 },
    { x:3, output:1 },
    { x:4, output:2 },
    { x:8, output:2 },
    { x:9, output:3 },
    { x:11, output:3 },
    { x:16, output:4 },
    { x:20, output:4 },
    { x:110, output:10},
    { x:2147395599, output:46339 },
];

// Comparing scalar output
console.log(inputs.map(x => mySqrt(x.x) == x.output));