/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const initialDirection = new Vector2D(0, 1);
  const initialPoint = new Vector2D(0, 0);
  const point = new Vector2D(0, 0);
  const direction = new Vector2D(0, 1);
  for (var i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "G":
        point.add(direction);
        break;
      case "L":
      case "R":
        direction.rotate(instructions[i]);
        break;
    }
  }
  if (
    Vector2D.equal(initialDirection, direction) &&
    !Vector2D.equal(initialPoint, point)
  ) {
    return false;
  }
  return true;
};

function Vector2D(x = 0, y = 0) {
  this.coord = [x, y];
}

Vector2D.getAngle = function (vector1, vector2) {
  const [x1, y1] = vector1.coord;
  const [x2, y2] = vector2.coord;
  const cos =
    ((x1 * x2 + y1 * y2) / Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2))) *
    Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  return Math.acos(cos);
};

Vector2D.equal = function (vector1, vector2) {
  return (
    vector1.coord[0] === vector2.coord[0] &&
    vector1.coord[1] === vector2.coord[1]
  );
};

Vector2D.prototype.add = function (coord) {
  this.coord[0] += coord.coord[0];
  this.coord[1] += coord.coord[1];
};

Vector2D.prototype.rotate = function (coord) {
  const rightMatrix = [
    [0, -1],
    [1, 0],
  ];
  const leftMatrix = [
    [0, 1],
    [-1, 0],
  ];
  let rotateMatrix = coord === "L" ? leftMatrix : rightMatrix;
  this.coord = [
    this.coord[0] * rotateMatrix[0][0] + this.coord[1] * rotateMatrix[1][0],
    this.coord[0] * rotateMatrix[0][1] + this.coord[1] * rotateMatrix[1][1],
  ];
};

console.log(isRobotBounded("GLGLGGLGL"));
