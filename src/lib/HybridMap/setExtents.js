/**
 * Accepts bounding box coordinates from QGIS extents and integer precision for calculating intermediate points
 * @param {float} x1 - top left x-coordinate
 * @param {float} y1 - top left y-coordinate
 * @param {float} x2 - bottom right x-coordinate
 * @param {float} y2 - bottom right y-coordinate
 * @param {int} divisions - number of intermediate coordinates to approximate a rectangle for mercator bbox
 */
const setExtents = (x1, y1, x2, y2, divisions) => {
  divisions = divisions || 1;

  const coords = [];
  if (divisions > 1) {
    // Edge 1
    for (let p = 0; p < divisions; p++) {
      const increment = Math.abs(y2 - y1) / divisions;
      coords.push([x1, y1 + increment * p]);
    }
    // Edge 2
    for (let p = 0; p < divisions; p++) {
      const increment = Math.abs(x2 - x1) / divisions;
      coords.push([x1 + increment * p, y2]);
    }
    // Edge 3
    for (let p = 0; p < divisions; p++) {
      const increment = Math.abs(y2 - y1) / divisions;
      coords.push([x2, y2 - increment * p]);
    }
    // Edge 4
    for (let p = 0; p < divisions; p++) {
      const increment = Math.abs(x2 - x1) / divisions;
      coords.push([x2 - increment * p, y1]);
    }

    // Close polygon
    coords.push([x1, y1]);
  } else {
    // Make square
    coords.push([x1, y1], [x1, y2], [x2, y2], [x2, y1], [x1, y1]);
  }

  // console.log(coords);

  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[...coords]],
        },
      },
    ],
  };
};

export default setExtents;
