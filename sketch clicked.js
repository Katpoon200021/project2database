let bubble = [];


function setup() {
  createCanvas(600, 400);

  let r = random(10, 50);
  let x = random(width);
  let y = random(height);

  let b = new Bubble(x, y, r);
  bubble = new Bubble(x, y, r);
}

function mousePressed() {
  bubble.clicked();
}

function draw() {
  background(0);

  bubble.move();
  bubble.show();
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  // each time you click on the bubble, it would print the text
  // when you don't click on the bubble, it won't print the text
  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      print("click on bubble");
    }
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
