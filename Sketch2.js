function setup() {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background(120, 135, 120, 10);

  amt = map(mouseY, 0, width, 0, 30);
  filter(BLUR, 20);

  for (i = 0; i < amt; i++) {
    fill(random(235, random(155), random, 120));
    ellipse(random(width), random(height), random(60));
  }
}