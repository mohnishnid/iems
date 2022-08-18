var w;
var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorForP = [
    "#eee088",
    "#b2d3f2",
    "#a9d073",
    "#0c96e7",
    "#1bb167",
    "#009c9b",
    "#eabf35",
    "#fc785f",
    "#4263a6",
    "#f4d445",
  ];
  colorForStripe = [
    "#f8f9f4",
    "#f8f9f4",
    "#474e4f",
    "#474e4f",
    "#fbc8da",
    "#b2d3f2",
    "#eadh35",
  ];
  pIdx = int(random(0, colorForP.length));
  stripeIdx = int(random(0, colorForStripe.length));

  smooth();
  noStroke();
  frameRate(10);
}

function draw() {
  x = 0;
  var s = (50 * lerp(mouseY, mouseX, 0.02)) / height;
  var l = (s * lerp(mouseX, mouseY, 0.02)) / width;

  var resPos = (l * (l + 1) + (s - l) * (s - l)) / 2;

  // var resCord = (l * (l + 1) + (s - l) * s) / 2;

  // var resCord = (l +  (s - 1) / 2);

  background(0);

  for (var i = 0; i < s; i += 1) {
    w = (width / resPos) * abs(l - i);

    // w = (windowWidth / magic) * abs(l - i);

    for (var j = 0; j < 10; j++) {
      if ((i + j) % 2 == 0) {
        stripeIdx = int(random(0, colorForP.length));
        fill(colorForP[stripeIdx]);
      } else {
        stripeIdx = int(random(0, colorForStripe.length));
        fill(colorForStripe[stripeIdx]);
      }
      rect(x, (j * windowHeight) / 10, w, windowHeight / 10);
    }
    x = x + w;
  }
}