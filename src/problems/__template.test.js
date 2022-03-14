// {url}
/**
 * @param {number} param1
 * @return {number}
 */

// attempt1: description on the algorithm
let bruteForce = (param1) => {
    let result = param1;

    return result;
};

// TODO
let solution2 = (param1) => {
    let result = param1;

    return result;
};


describe('111. Problem Title', () => {
    const cases = [
        { param1:0, expected:false },
        { param1:1, expected:true },
        { param1n:2, expected:true },
    ];

    test.each(cases)('bruteForce()', ({param1, expected})  => {
        expect(bruteForce(param1)).toEqual(expected);
    });

    test.each(cases)('solution2()', ({param1, expected})  => {
        expect(solution2(param1)).toEqual(expected);
    });
});