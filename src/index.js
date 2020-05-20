let mic;

function setup() {
  createCanvas(500, 500);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(300);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(1);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 0.2, height, 3);
  ellipse(width / 2, h - 25, 100, 100);
}
