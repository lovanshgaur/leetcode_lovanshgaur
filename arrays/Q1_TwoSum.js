/*
* Q.1 Two Sum
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
*/



var twoSum = function (nums, target) {
    let j = 0;
    while (j < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i !==j &&  nums[j] + nums[i] == target) {
                return [i, j]
            }
        }
        j++
    }
};

const sum = twoSum

console.log(sum([2, 7, 11, 15], 9))
console.log(sum([3, 2, 4], 6))
console.log(sum([3, 3], 6))