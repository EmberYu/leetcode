/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) return 1;
  const trustedMap = new Map();
  for (var i = 0; i < trust.length; i++) {
    const trustedPerson = trust[i][1];
    trustedMap.set(
      trustedPerson,
      trustedMap.get(trustedPerson) ? trustedMap.get(trustedPerson) + 1 : 1
    );
  }
  const everyBodyTrustedList = [...trustedMap].filter(
    ([key, value]) => value === n - 1
  );
  if (everyBodyTrustedList.length) {
    judge = everyBodyTrustedList[0][0];
    if (trust.some(([person]) => person === judge)) {
      return -1;
    }
    return judge;
  }
  return -1;
};
const n = 3,
  trust = [
    [1, 3],
    [2, 3],
    [3, 1],
  ];

console.log(findJudge(n, trust));
