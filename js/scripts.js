var triangles = function(side1, side2, side3) {
  side1 = parseInt(side1);
  side2 = parseInt(side2);
  side3 = parseInt(side3);
  var sides = [side1, side2, side3].sort();
  
  if (sides[0] + sides[1] <= sides[2]) {
    return false;
  } else if ((side1 === side2) && (side2 === side3)) {
    return 'equilateral';
  } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

$(document).ready(function() {
  $("#sides").submit(function(event) {
    event.preventDefault();

    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();

    var type = triangles(side1, side2, side3);
    // var showSides = function() {
    //   return side1 + ", " + side2 + ", " + side3;
    // }

    if (type === false) {
      alert("These side lengths do not form a triangle!");
    } else if (type === "equilateral") {
      $(".equilateral").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else if (type === "isosceles") {
      $(".isosceles").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else {
      $(".scalene").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    }

  });
});
