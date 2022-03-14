// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Sort, then search for the value that doesn't match index
// The answer is the index-1
// If no valid index, then the answer is the last one.
let usingSort = (nums) => {
    nums.sort((a,b) => a-b);
    let result = nums.find((v, i) => v!=i);

    if (result) return result - 1;
    else return nums.length;
};

// Loop through and mark each item off in a separate array
// The one missing is the answer.  If none is missing, the length
// is the answer.
let onePass = (nums) => {
    let cache = [];
    for (let i=0; i<nums.length; i++) {
        cache[nums[i]] = 1;
    }
    
    for (let i=0; i<nums.length; i++) {
        if (!cache[i]) return i;
    }

    return nums.length;
};

// Using XOR: a^b^b = a
// https://leetcode.com/problems/missing-number/discuss/69791/4-Line-Simple-Java-Bit-Manipulate-Solution-with-Explaination
let usingXor = (nums) => {
    let result = 0;
    for (let i=0; i<nums.length; i++) {
        result = result ^ i ^ nums[i];
    }

    return result ^ nums.length;
};


describe('268. Missing Number', () => {
    const cases = [
        { nums:[3,0,1], expected:2 },
        { nums:[0,1], expected:2 },
        { nums:[9,6,4,2,3,5,7,0,1], expected:8 },
    ];

    test.each(cases)('usingSort()', ({nums, expected})  => {
        let result = usingSort(nums); 
        expect(result).toEqual(expected);
    });

    test.each(cases)('onePass()', ({nums, expected})  => {
        let result = onePass(nums);
        expect(result).toEqual(expected);
    });

    test.each(cases)('usingXor()', ({nums, expected})  => {
        let result = usingXor(nums);
        expect(result).toEqual(expected);
    });
});