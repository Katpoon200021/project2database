let bubbles = [];
let time = 100;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }

  // timer: inputs a random circle
  time = time - 1;

  if (time == 0 ) {
    let r = random(10, 50);
    let x = random(width);
    let y = random(height);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    time = 100;
  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
  }
  
  show() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(this.x, this.y, this.r * 2);
  }
}
