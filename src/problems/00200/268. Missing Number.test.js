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

// TODO
let solution2 = (nums) => {
    let result = nums;

    return result;
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

    //test.each(cases)('solution2()', ({nums, expected})  => {
    //    let result = solution2(nums);
    //    expect(result).toEqual(expected);
    //});
});