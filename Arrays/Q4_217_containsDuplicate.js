/**
 * * 4/217 Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 */

var containsDuplicate = function (nums) {
  let array = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (array[i] === array[i - 1]) {
      return true;
    }
  }
  return false;
};

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
