$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();
    $(".alert").hide();

    var newSide1 = parseInt($("input#side-1").val());
    var newSide2 = parseInt($("input#side-2").val());
    var newSide3 = parseInt($("input#side-3").val());

    var newTriangle = {
      side1: newSide1,
      side2: newSide2,
      side3: newSide3,
      type: function() {
        var triType = "";
        var sides = [this.side1, this.side2, this.side3];
        sides.sort(function(a, b) {
          return a - b;
        });

        if ((this.side1 <= 0) || (this.side2 <= 0) || (this.side3 <= 0) ||
          (sides[0] + sides[1] <= sides[2])) {
          triType = "not a valid triangle";
        }
        else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
          triType = "equilateral";
        }
        else if ((sides[0] === sides[1]) || (sides[1] === sides[2])) {
          triType = "isosceles";
        }
        else {
          triType = "scalene";
        }

        return triType;
      }
    };

    var newTriType = newTriangle.type();

    if (newTriType !== "not a valid triangle") {
      $("ul#" + newTriType + "-list").append(
        "<li>" + newTriangle.side1 + ", " + newTriangle.side2 +
          ", " + newTriangle.side3 + "</li>"
      );
    }
    else {
      $(".alert").show();
      $("p#error").text(newTriType);
    }

    $("input#side-1").val("");
    $("input#side-2").val("");
    $("input#side-3").val("");
  });
});
