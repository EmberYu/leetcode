/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let leftPointer = 0;
  let rightPointer = 1;
  let max = 1;
  while (rightPointer < s.length) {
    const subStr = s.slice(leftPointer, rightPointer);
    const index = subStr.indexOf(s[rightPointer]);
    if (index !== -1) {
      leftPointer += index + 1;
    } else {
      max = Math.max(max, subStr.length + 1);
    }
    rightPointer++;
  }
  return max;
};

lengthOfLongestSubstring("au");
