const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.clearRect(0, 0, canvas.width, canvas.height);
class Dot {
  constructor(obj) {
    this.name = obj.name || "X";
    this.position = obj.position || [0, 0];
    this.color = obj.color || "black";
  }
  moveTo(position) {
    this.position = position;
  }
}

class Painter {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawDot(dot) {
    const ctx = this.ctx;
    const radius = 3;
    const fontOffset = 5;
    ctx.font = "18px serif";
    ctx.fillStyle = dot.color;
    ctx.fillText(
      dot.name,
      dot.position[0] + fontOffset,
      dot.position[1] - fontOffset
    );
    ctx.beginPath();
    ctx.arc(dot.position[0], dot.position[1], radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  drawLineSeg(dotA, dotB) {
    const ctx = this.ctx;
    const lineWidth = 4;
    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(dotA.position[0], dotA.position[1]);
    ctx.lineTo(dotB.position[0], dotB.position[1]);
    ctx.stroke();
  }

  drawLine(dotA, dotB) {
    const ctx = this.ctx;
    const lineWidth = 4;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    const [x1, y1] = dotA.position;
    const [x2, y2] = dotB.position;
    let pointA, pointB;
    if (x1 === x2) {
      pointA = [x1, 0];
      pointB = [x1, canvas.height];
    } else {
      // y = kx + b;
      const k = (y2 - y1) / (x2 - x1);
      const b = (x2 * y1 - x1 * y2) / (x2 - x1);
      pointA = [0, b];
      pointB = [canvas.width, k * canvas.width + b];
    }
    ctx.beginPath();
    ctx.moveTo(pointA[0], pointA[1]);
    ctx.lineTo(pointB[0], pointB[1]);
    ctx.stroke();
  }
}
const painter = new Painter(ctx);
const dotQ = new Dot({
  name: "Q",
  position: [70, 150],
  color: "black",
});
const dotR = new Dot({
  name: "R",
  position: [100, 100],
  color: "black",
});

const dotP = new Dot({
  name: "P",
  position: [300, 100],
  color: "red",
});

let activeDot = dotP;

function calcDistance() {
  painter.drawLine(dotQ, dotR);
  painter.drawLineSeg(dotQ, dotR);
  painter.drawDot(dotQ);
  painter.drawDot(dotR);
  painter.drawDot(dotP);
}

function renderText() {
  const activeDom = document.querySelector("#active");
  const lineDom = document.querySelector("#line");
  const lineSeqDom = document.querySelector("#lineSeq");
  activeDom.innerText = "当前选中：" + (activeDot ? activeDot.name : "无");
}
calcDistance();
renderText();
canvas.onmousemove = (e) => {
  const [x, y] = [e.offsetX, e.offsetY];
  activeDot && activeDot.moveTo([x, y]);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  calcDistance();
  renderText();
};

document.body.onkeydown = (e) => {
  const key = e.key.toUpperCase();
  if (key === "ESCAPE") {
    activeDot = null;
    return;
  }
  const dot = [dotQ, dotR, dotP].find((dot) => dot.name === key);
  activeDot = dot || activeDot;
};
