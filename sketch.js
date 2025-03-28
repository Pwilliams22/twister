let bdy;
let canv;
function setup() {
  canv = createCanvas(windowWidth, windowHeight);

  bdy = select("h1");

  canv.position(0, 0);
  canv.style("z-index:-1");

  print(bdy);
}

function draw() {
  canv.background(0);

  amt = map(mouseX, 0, width, 0, 20);
  filter(BLUR, 20);
for (let i = 0; i < amt; i++) {
  
 strokeWeight(6) 
  fill(random(235),random(155),random(120))
  square(random(width),random(height),random(50));
  circle(random(width),random(height),random(50))
}




}




function mousePressed() {
  bdy.style("color", "red");
}

