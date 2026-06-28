/** 

* 1/1920
* Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
* A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

*/

let buildArray = function (nums) {
    let ans = []
    for(let i=0; i<nums.length; i++){
        ans.push(nums[nums[i]])
    }
    return ans
};


let nums = [0,2,1,5,3,4]
let nums2 = [5,0,1,2,3,4]
console.log(buildArray(nums))
console.log(buildArray(nums2))
