// ============================================================
// Week 1 Side Quest: Exit 8
// ============================================================
let tunnelImg;
// ------------------------------------------------------------
// preload()
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  tunnelImg = loadImage("assets/images/tunnel.png");
}
// ------------------------------------------------------------
// setup()
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 450);
  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background(34);
  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------
  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);
  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------
  // Photo by NEON [1]
  image(tunnelImg, 50, 15, 700, 425);
  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES (a controller made of shapes!)
  // ----------------------------------------------------------
  // --- Shape ---
  fill(10);
  rect(250, 400, 300, 30, 4);

  // --- Text ---
  noStroke();
  fill(150, 10, 0);
  textSize(18);
  textAlign(CENTER);
  text("keep an eye out for anomalies", 400, 420);
}
