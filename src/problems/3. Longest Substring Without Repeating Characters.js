// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {number} param1
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return attempt1(s);
};

// attempt1: description on the algorithm
let attempt1 = (s) => {
    if (!s) return 0;
    
    let result = 0;
    
    for (let ii = 0; ii < s.length; ii++) {
        let tmp = helper(s.slice(ii, s.length));
        if (tmp > result) result = tmp;
    }
    
    return result;
};

let helper = (s) => {
    if (!s) return 0;
    
    let result = 0;
    
    for (let jj = 0; jj < s.length; jj++) {
        result++;
        
        // if the current character already exist in the substring
        // then return the length
        if (s.substring(0, jj).indexOf(s[jj]) > -1) {
            return jj;
        }
    }
    
    return s.length;
};

let input = "abcabcbb";
//let input = "bbbbb";
//let input = "pwwkew";
//let input = "";

let output = lengthOfLongestSubstring(input);
console.log(output);