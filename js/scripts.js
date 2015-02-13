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

$(document).ready(function() {
  $("form#triangle-checker").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var numberOfSides = triangleChecker(side1, side2, side3);
    if (numberOfSides === 1) {
      var typeOfTriangle = "forms a scalene";
      $("#typeOfTriangle").text(typeOfTriangle);
      $("#valid").show();
      $("#not-valid").hide();
    } else if (numberOfSides === 2) {
      var typeOfTriangle = "forms an isosceles";
      $("#typeOfTriangle").text(typeOfTriangle);
      $("#valid").show();
      $("#not-valid").hide();
    } else if (numberOfSides === 3) {
      var typeOfTriangle = "forms an equilateral";
      $("#typeOfTriangle").text(typeOfTriangle);
      $("#valid").show();
      $("#not-valid").hide();
    } else {
      $("#not-valid").show();
      $("#valid").hide();
    }

    event.preventDefault();
  });
});
