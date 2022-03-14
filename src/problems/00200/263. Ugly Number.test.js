// https://leetcode.com/problems/ugly-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`n        :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(n);
    
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
let bruteForce = (n) => {
    let divisors = [2, 3, 5];
    let current = n;

    divisors.forEach((d) => {
        // Divide by d until you can't anymore
        while(current>1) {
            current /= d;
    
            // Undo the last one
            if (!Number.isInteger(current)) {
                current *= d;
                break;
            }
        }
    });

    // After dividing by 2,3,5, if we're not at 1, then there is another primer diviser
    return current == 1;
};

// Slightly modified
// https://leetcode.com/problems/ugly-number/discuss/69214/2-4-lines-every-language
let usingMod = (n) => {
    [2,3,5].forEach(d => {
        while (n>0 && (n%d) ==0) {
            n /= d;
        }
    });

    return n == 1;
};


describe('263. Ugly Number', () => {
    const cases = [
        { n:0, expected:false },
        { n:1, expected:true },
        { n:6, expected:true },
        { n:14, expected:false },
        { n:70, expected:false },
    ];

    test.each(cases)('bruteForce()', ({n, expected})  => {
        // Arrange    
        // Act
        let result = bruteForce(n);
    
        // Assert
        expect(result).toEqual(expected);
    });

    test.each(cases)('usingMod()', ({n, expected})  => {
        // Arrange    
        // Act
        let result = usingMod(n);
    
        // Assert
        expect(result).toEqual(expected);
    });
});