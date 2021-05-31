/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  for (var i = 0; i < s.length; i++) {
    const palindromic = findPalindromic(i, s);
    if (palindromic.length > longest.length) {
      longest = palindromic;
    }
  }
  return longest;
};

const findPalindromic = (i, s) => {
  const palindromicOdd = findPalindromicSlice(i, i, s);
  const palindromicEven = findPalindromicSlice(i - 1, i, s);
  return palindromicOdd.length > palindromicEven.length
    ? palindromicOdd
    : palindromicEven;
};

const findPalindromicSlice = (left, right, s) => {
  let l = left;
  let r = right;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l -= 1;
    r += 1;
  }
  return s.slice(l + 1, r);
};
