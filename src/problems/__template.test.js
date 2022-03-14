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
        { n:0, expected:false },
        { n:1, expected:true },
        { n:2, expected:true },
    ];

    test.each(cases)('bruteForce()', ({n, expected})  => {
        let result = bruteForce(n);
        expect(result).toEqual(expected);
    });

    test.each(cases)('solution2()', ({n, expected})  => {
        let result = solution2(n);
        expect(result).toEqual(expected);
    });
});