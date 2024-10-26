var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let largest = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (largest >= nums[i] && k != 0) {
      k--;
      largest = nums[i];
    }
  }
  return largest;
};
findKthLargest()