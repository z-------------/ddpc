const getEdges = function(canvas, ctx) {
  let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  // get all points on perimeter
  let perimeterRaw = [];
  const dataLength = data.length;
  for (var i = 3; i < dataLength; i += 4) {
    if (data[i] === 255 && (perimeterRaw.length === 0 || perimeterRaw[perimeterRaw.length - 1].flag === -1)) {
      perimeterRaw.push({
        coords: indexToCoords(i, canvas.width),
        flag: 1
      });
    } else if (data[i] < 255 && (perimeterRaw.length > 0 && perimeterRaw[perimeterRaw.length - 1].flag === 1)) {
      perimeterRaw.push({
        coords: indexToCoords(i, canvas.width),
        flag: -1
      });
    }
  }

  // in order
  let perimeter = [perimeterRaw[0].coords];
  const perimeterRawLength = perimeterRaw.length;
  for (var i = 0; i < perimeterRawLength - 1; i++) {
    perimeter.push(
      perimeterRaw
        .filter(function(element) {
          return !_.includes(perimeter, element.coords);
        })
        .sort(function(a, b) {
          let distanceA = distance(perimeter[i], a.coords);
          let distanceB = distance(perimeter[i], b.coords);
          if (distanceA < distanceB) return -1;
          if (distanceA > distanceB) return 1;
          return 0;
        })[0].coords
    );
  }

  // fix horizontal parts
  var i = 0;
  while (i + 1 < perimeter.length) {
    if (perimeter[i][1] === perimeter[i + 1][1] && distance(perimeter[i], perimeter[i + 1]) > 1) {
      perimeter.splice(i + 1, 0, [perimeter[i][0] + 1, perimeter[i][1]]);
    }
    i++;
  }

  ctx.fillStyle = "gold";
  perimeter.forEach(function(point, i) {
    setTimeout(function() {
      ctx.fillRect(point[0] - 1.5, point[1] - 1.5, 3, 3);
    }, i * 10);
  });
};
