function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke()
  rectMode(CENTER);
}

function draw() {
  background(130, 10);

  ///amt = map(mouseX, 0,)
  noFill(width, 0, 200);
  //filter(BLUR,20)
  translate(30, 30);
  for (let x = 0; x < 13; x++) {
    for (let y = 0; y < 11; y++) {
      for (let i = 0; i < 7; i++) {
        fill(0);
        stroke(random(155), random(135), random(105));
        circle(x * 40 + random(5), y * 40 + random(6), 50 - i * 7, 50 - i * 8);
      }
    }
  }
}
