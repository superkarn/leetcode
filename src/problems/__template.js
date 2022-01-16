// {url}
/**
 * @param {number} param1
 * @return {number}
 */
var myFunction = function(param1) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`param1    :  ${param1}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(param1);
    
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
    let result = param1;

    return result;
};

let inputs = [
    { param1:"Hello World", output:"Hello World" },
    { param1:2, output:2 },
];

console.log(inputs.map(x => myFunction(x.param1) == x.output));