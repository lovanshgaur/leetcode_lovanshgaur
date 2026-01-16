/*
 * Q.14 Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let prefix = strs[0].split("")
    for(let i=1; i<strs.length; i++){
        let arr = []
        for(let j=0; j<prefix.length; j++){
            if(strs[i][j] === prefix[j]){
                arr.push(strs[i][j])
            }
            else{
                break
            }
        }
        prefix = arr 
    }   
    return prefix.join("")
};



const fun = longestCommonPrefix
console.log(fun(["flower","flow","flight"]))
console.log(fun(["dog","racecar","car"]))

