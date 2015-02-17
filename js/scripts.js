var triangles = function(side1, side2, side3) {
  var sides = [side1, side2, side3].sort()
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
