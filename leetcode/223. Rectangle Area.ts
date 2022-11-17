function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const areaA = (ay2 - ay1) * (ax2 - ax1);
  const areaB = (by2 - by1) * (bx2 - bx1);

  if (ax2 <= bx1 || ax1 >= bx2 || ay2 <= by1 || ay1 >= by2) {
    return areaA + areaB;
  }
  const cx1 = ax1 > bx1 ? ax1 : bx1;
  const cy1 = ay1 > by1 ? ay1 : by1;
  const cx2 = ax2 < bx2 ? ax2 : bx2;
  const cy2 = ay2 < by2 ? ay2 : by2;
  const areaC = (cy2 - cy1) * (cx2 - cx1);

  return areaA + areaB - areaC;
}
