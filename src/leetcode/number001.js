/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 * 示例 2：
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 * 示例 3：
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 * 提示：
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 *
 * 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSumV1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSumV2 = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [i, hashMap.get(complement)];
    }
    hashMap.set(nums[i], i);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSumV3 = function (nums, target) {
  const clonedNums = [...nums];
  clonedNums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = clonedNums[left] + clonedNums[right];
    if (sum === target) {
      return [
        nums.indexOf(clonedNums[left]),
        nums.lastIndexOf(clonedNums[right]),
      ];
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};
