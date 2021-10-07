// {url}
/**
 * @param {number} param1
 * @return {number}
 */
var myFunction = function(param1) {
    let startTime = Date.now();
    console.log('--------------------------');

    // Pick the algorithm
    let result = bruteForce(param1);
    
    let endTime = Date.now();
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (param1) => {
    // do something
    let result = param1;

    return result;
};

let input = [1,2,3,4,5];
let output = myFunction(input);
console.log(output);