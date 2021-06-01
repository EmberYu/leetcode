/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  var resultArr = [];
  var x = 0;
  var y = 0;
  var dir = 1;
  for (var i = 0; i < s.length; i++) {
    if (dir < 0) {
      y += 1;
    }

    resultArr[x] = resultArr[x] || [];
    resultArr[x][y] = s[i];

    if (x + dir >= numRows) {
      dir = -1;
    }
    if (x + dir < 0) {
      dir = 1;
    }

    x += dir;
  }
  return resultArr.map((row) => row.join("")).join("");
};
