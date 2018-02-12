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

const lerp = function(p0, p1, t) {
  return p0 * (1 - t) + p1 * t;
};
