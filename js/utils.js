const indexToCoords = function(index, width) {
  // index represents the index of alpha values in an ImageData
  let point = (index - 3) / 4;
  return [point % width, Math.floor(point / width)];
}

const distance = function(p0, p1) {
  return Math.sqrt(
    Math.pow(Math.abs(p0[0] - p1[0]), 2) + Math.pow(Math.abs(p0[1] - p1[1]), 2)
  );
}

const lerp = function(pStart, pEnd, t) {
  return pStart * (1 - t) + pEnd * t;
};

const isLine = function(points, tolerance) {
  if (typeof tolerance !== "number") {
    tolerance = 0;
  }
  const pointsLength = points.length;
  let lerpStart = points[0];
  let lerpEnd = points[Math.round((pointsLength - 1) * 0.5)];
  // let lerpEnd = points[pointsLength - 1];
  // console.log("isLine", points, lerpStart, lerpEnd)
  for (var i = 0; i < pointsLength; i++) {
    let xLerp = lerp(lerpStart[0], lerpEnd[0], i / ((pointsLength) * 0.5));
    let yLerp = lerp(lerpStart[1], lerpEnd[1], i / ((pointsLength) * 0.5));
    // let xLerp = lerp(lerpStart[0], lerpEnd[0], i / (pointsLength - 1));
    // let yLerp = lerp(lerpStart[1], lerpEnd[1], i / (pointsLength - 1));
    let d = distance([xLerp, yLerp], points[i]);

    if (d > tolerance) {
      console.log(i, pointsLength, [xLerp, yLerp], points[i], d);
      return false;
    }
  }
  return true;
};
