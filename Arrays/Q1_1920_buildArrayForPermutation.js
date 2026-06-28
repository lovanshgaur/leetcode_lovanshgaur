1929. Concatenation of Array

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
