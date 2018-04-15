
// circle: { x, y, r }
// line: { x1, y1, x2, y2 }

function circleLineIntersection(x, y, r, x1, y1, x2, y2) {
  // x1 = x1 - x;
  // y1 = (y1 - y) * -1;
  // x2 = x2 - x;
  // y2 = (y2 - y) * -1;
  y1 *= -1;
  y2 *= -1;

  let dx = x2 - x1;
  let dy = y2 - y1;
  let dr = Math.sqrt(dx * dx + dy * dy);
  let d = x1 * y2 - x2 * y1;
  let dc = (r * r) * (dr * dr) - d * d;

  console.log(dx, dy, dr, d);

  if (dc < 0) {
    console.log('no intersect', dc);
  }
  else if (dc == 0) {
    console.log('tangent', dc);
  }
  else if (dc > 0) {
    console.log('intersect', dc);
  }
}

function lineIntersectsCircle(x, y, r, x1, y1, x2, y2) {

}

export default {
  lineIntersectsCircle: lineIntersectsCircle,
  circleLineIntersection: circleLineIntersection
}
