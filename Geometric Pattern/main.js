var NUM_CIRCLES = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480, 600);

  frameRate(5);

  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;

  rVal = 255;
  gVal = 0;
  bVal = 0;
}

function draw() {
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

 


    y = y - circleRadius;
    isShifted = !isShifted;

    rVal = (rVal + 2000) ;
    gVal = (gVal + 2000) ;
    bVal = (bVal + 2000) ;
  }
}

