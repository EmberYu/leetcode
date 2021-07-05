/**
 * @param {string} formula
 * @return {string}
 */

var countOfAtoms = function (formula) {
  const result = countOfAtomsRecursive(formula);
  return Object.keys(result)
    .sort((a, b) => charCodeSum(a) - charCodeSum(b))
    .map((key) => `${key}${result[key] === 1 ? "" : result[key]}`)
    .join("");
};

var charCodeSum = function (str) {
  if (str.length === 1) {
    return str.charCodeAt();
  }
  return str[0].charCodeAt() + str[1].charCodeAt() / 1000;
};

var countOfAtomsRecursive = function (formula, multiply = 1) {
  if (formula === undefined || formula === "") {
    return {};
  }
  const leftBracket = formula.indexOf("(");
  const rightBracket = findRightBracket(formula, leftBracket);
  if (leftBracket === -1) {
    return countSingleAtoms(formula, multiply);
  }

  const rightBracketNumber =
    formula.slice(rightBracket).match(/\)(\d*)/)[1] || 1;
  return combineAtoms(
    countOfAtomsRecursive(formula.slice(0, leftBracket), multiply),
    countOfAtomsRecursive(
      formula.slice(leftBracket + 1, rightBracket),
      rightBracketNumber * multiply
    ),
    countOfAtomsRecursive(
      formula.slice(
        rightBracket +
          1 +
          (rightBracketNumber === 1 ? 0 : `${rightBracketNumber}`.length)
      ),
      multiply
    )
  );
};

const findRightBracket = function (formula, leftBracket) {
  let index = 1;
  for (let i = leftBracket + 1; i < formula.length; i++) {
    if (formula[i] === "(") {
      index += 1;
    }
    if (formula[i] === ")") {
      index -= 1;
    }
    if (index === 0) {
      return i;
    }
  }
};

const combineAtoms = function (...formulas) {
  var result = {};
  formulas.forEach((formula) => {
    Object.keys(formula).forEach((key) => {
      if (result[key] !== undefined) {
        result[key] += formula[key];
      } else {
        result[key] = formula[key];
      }
    });
  });
  return result;
};

var countSingleAtoms = function (formula, multiply) {
  const reg = /([A-Z]{1}[a-z]*)(\d*)/g;
  const form = {};
  let result = reg.exec(formula);
  while (result !== null) {
    const element = result[1];
    const count = +result[2] * multiply;
    form[element] = form[element] || 0;
    form[element] += count || 1 * multiply;
    result = reg.exec(formula);
  }
  return form;
};
const formula = "Mg(H2O)N";

console.log(countOfAtoms(formula)); // K4N2O14S4
