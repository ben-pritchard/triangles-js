$(document).ready(function() {
  $("#sides").submit(function(event) {
    event.preventDefault();

    var showSides = function() {
      return "<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>";
    }

    var triangle = { side1: parseInt($("#side1").val()), side2: parseInt($("#side2").val()), side3: parseInt($("#side3").val()),
                      triangleType: function() {
                        if ((this.side1 >= this.side2 + this.side3) ||
                          (this.side2 >= this.side1 + this.side3) ||
                          (this.side3 >= this.side2 + this.side1)) {
                              alert("These side lengths do not form a triangle!");
                          } else if ((this.side1 === this.side2) &&
                            (this.side2 === this.side3)) {
                              $(".equilateral").append(showSides());
                          } else if ((this.side1 === this.side2) ||
                            (this.side1 === this.side3) ||
                            (this.side2 === this.side3)) {
                              $(".isosceles").append(showSides());
                          } else {
                              $(".scalene").append(showSides());
                          }
                      }};

    triangle.triangleType();
  });
});
