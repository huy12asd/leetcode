//Huy
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0;
    let start=0;
    const charindex={};
    for(let i=0;i<s.length;i++){
        const char=s[i];
        if(char in charindex && charindex[char]>=start){
            start=charindex[char]+1;
        }
        charindex[char]=i;
        max = Math.max(max, i - start + 1);

    }
    return max;


};
const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";

console.log(lengthOfLongestSubstring(s1));  
console.log(lengthOfLongestSubstring(s2));  
console.log(lengthOfLongestSubstring(s3)); 
//Huy
