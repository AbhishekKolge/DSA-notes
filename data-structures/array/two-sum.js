const twoSum = function (nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      return [numsMap.get(nums[i]), i];
    }
    const diff = target - nums[i];
    numsMap.set(diff, i);
  }
};

console.log(twoSum([3, 2, 4], 6));
