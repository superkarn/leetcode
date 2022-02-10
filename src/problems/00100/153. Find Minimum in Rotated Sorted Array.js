// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(param1) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`param1    :  ${param1}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = binarySearch(param1);
    
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
let bruteForce = (param1) => {
    if (param1.length == 1) {
        return param1[0];
    }

    for (let i=0; i<param1.length; i++) {
        let previousIndex = i == 0 ? param1.length-1 : i-1;

        //console.log(`[${previousIndex}]: ${param1[previousIndex]} ? [${i}]: ${param1[i]}`);
        if (param1[previousIndex] > param1[i]) {
            return param1[i];
        }
    }

    throw new Error('Something went wrong.');
};

let binarySplit = (param1) => {
    //console.log(`length: ${param1.length}`);
    //console.log(param1);
    if (param1.length == 0) return [];
    if (param1.length == 1) return param1[0];
    if (param1.length == 2) return Math.min(...param1);


    let l = Math.floor(param1.length / 3);
    let r = 2*l;

    //console.log(`  l[${l}]: ${param1[l]}, r[${r}]: ${param1[r]}`);

    // make a copy
    let p = param1.slice();

    // if l<r, then the min is not between l and r 
    // and we know r is not the minimum, but l could still be.
    // so we keep l, but not r
    if (param1[l] < param1[r]) {
        //console.log(`  outside`);
        p = [...param1.slice(0, l+1), ...param1.slice(r+1, param1.length)];
    } 
    // else min is between l and r, trim the rest.
    // and we know l is not the minimum, but r could still be.
    // keep both r but not l
    else {
        //console.log(`  inside`);
        p = param1.slice(l+1, r+1);
    }

    return binarySearch(p);
};

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/158940/Beat-100%3A-Very-Simple-(Python)-Very-Detailed-Explanation
let binarySearch = (param1) => {
    let left = 0;
    let right = param1.length-1;

    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (param1[mid] > param1[right]) {
            left = mid+1;
        } else {
            right = mid;
        }
    }

    return param1[left];
};

//let input = [1]; // 1
//let input = [1,2]; // 1
//let input = [3,1,2]; // 1
let input = [2,3,4,5,1]; // 1
//let input = [4,5,6,7,0,1,2]; // 0
//let input = [11,13,15,17]; // 11
//let input = [6,7,8,9,10,1,2,3,4,5]; // 1
let output = findMin(input);