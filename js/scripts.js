var triangle = function(side1, side2, side3) {
  var sides = [];
  sides.push(side1, side2, side3);
  sides.sort();

  if (sides[0] + sides[1] <= sides[2]) {
  }
  return false;
};
