let bubbles = [];


function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++) {
     let r = random(10, 50);
     let x = random(width);
     let y = random(height);

     let b = new Bubble(x, y, r);
     bubbles.push(b);
  }
}

function mousePressed() {
  for(i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  // each time you click on the bubble, it would print the text
  // when you don't click on the bubble, it won't print the text
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
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
