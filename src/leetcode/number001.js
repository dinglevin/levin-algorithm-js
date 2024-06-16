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
