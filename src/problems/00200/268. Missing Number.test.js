// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */

// attempt1: description on the algorithm
let bruteForce = (nums) => {
    let result = nums;

    return result;
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

    test.each(cases)('bruteForce()', ({nums, expected})  => {
        let result = bruteForce(nums);
        expect(result).toEqual(expected);
    });

    test.each(cases)('solution2()', ({nums, expected})  => {
        let result = solution2(nums);
        expect(result).toEqual(expected);
    });
});