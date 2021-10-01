// https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return attemptThirdParty(height);
};

// attempt1: First find the pair (left, right) that can trap water
let attempt1 = (height) => {
    let startTime = Date.now();
    console.log('--------------------------')

    let result = 0;
    let left = 0;

    // find highest point
    let highest = height.reduce((accumulator, currentValue, currentIndex) => {
        return (currentValue > height[accumulator]) ? currentIndex : accumulator;
    }, 0);

    //console.log(`highest: ${highest}`);

    // Find the trapped water from the left side, including the highest
    let tempHeight = height.slice(0, highest+1);
    result += getTrappedVolume(tempHeight);    
    
    // Find the trapped water from the right side, including the highest
    // but flip left/right (so the end is first)
    tempHeight = height.slice(highest, height.length).reverse();
    result += getTrappedVolume(tempHeight);
    
    let endTime = Date.now();
    console.log('--------------------------')
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------')

    return result;
};
let getTrappedVolume = (height) => {
    //console.log('getTrappedVolume', height);

    let left = 0;
    let right = left+1;
    let result = 0;

    // find the pair (left, right) that can trap water
    while (right < height.length) {

        // if right is less than left, keep going
        if (height[right] < height[left]) {
            //console.log(`  skipping [${right}]`);
            right++;
        } 
        // if right >= left then we found a puddle
        else {
            let puddleVolume = findWaterVolume(height, left, right);
            //console.log(`[${left}, ${right}] is a puddle with ${puddleVolume} volume`);

            result += puddleVolume;

            left = right;
            right = left+1;
        }
    }

    return result;
};
let findWaterVolume = (height, left, right) => {
    // left has to be to the left of right, else invalid.  return 0
    if (left >= right) {
        return 0;
    }
    
    let result = 0;

    // puddleHeight = the max height of the puddle, from ground level
    let puddleHeight = Math.min(height[left], height[right]);
    //console.log(`puddleHeight: ${puddleHeight}`)

    for (let i=left+1; i<right; i++) {
        // puddleDepth is the puddleHeight - the current height
        let puddleDepth = puddleHeight - height[i];
        //console.log(`    puddleDepth[${i}] = ${puddleDepth}`);
        result += puddleDepth;
    }

    return result;
};

// attemptThirdParty: shift left and right, which is O(n) time and O(1) space
// Got this from https://www.youtube.com/watch?v=ZI2z5pq0TqA
let attemptThirdParty = (height) => {
    let left = 0;
    let right = height.length-1;
    let result = 0;


    return result;
};

//           0 1 2 3 4 5 6 7 8 9 0 1
let input = [0,1,0,2,1,0,1,3,2,1,2,1];
//let input = [4,2,0,3,2,5];
let output = trap(input);
console.log(output);