var triangleChecker = function(side1, side2, side3) {
  var equalSides = 1
  var sides = [];
  sides.push(side1, side2, side3);
  sides.sort();

  if (sides[0] + sides[1] > sides[2]) {
    for (var i = 0; i < sides.length; i++) {
      if (sides[i] === sides[i + 1]) {
        equalSides ++;
      }
    } return equalSides;
  } else {
    return false;
  }
};
