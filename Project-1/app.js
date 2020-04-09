let x = 0;
let y = 0;
let speed = 5;

let pTag = document.getElementById("amount");
let amount = 0;

let w = 10;
let h = 10;
let arr = [];

function Line() {
  this.x = Math.round(random(width));
  this.rand = Math.round(random(100));
  this.y1 = this.rand;
  this.y2 = 25 + this.rand;

  this.update = () => {
    this.y1 += 10;
    this.y2 += 10;
  };

  this.checkHight = () => {
    if (this.y2 >= height) {
      this.y1 = this.rand;
      this.y2 = 25 + this.rand;
      this.x = Math.round(random(width));
    }
  };

  this.collide = () => {
    if (
      ((this.y2 >= y && this.y2 <= y + h) ||
        (this.y1 >= y && this.y1 <= y + h)) &&
      this.x >= x &&
      this.x <= x + w
    ) {
      return true;
    }
  };

  this.setUpLines = () => {
    stroke(0);
    line(this.x, this.y1, this.x, this.y2);
  };
}

function setup() {
  createCanvas(1280, 720);
  //frameRate(25);
  for (let i = 0; i < 25; i++) {
    arr[i] = new Line();
  }
}

function draw() {
  background(220);

  drawAllLines();
  checkBoundaries();
  checkKeyInput();

  fill(0);
  rect(x, y, w, h);
}

function drawAllLines() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].checkHight();
    arr[i].update();
    if (arr[i].collide()) {
      noLoop();
      setTimeout(() => {
        amount++;
        pTag.innerText = amount;
        arr.splice(i, 1);
        arr.push(new Line());
        arr.push(new Line());
        console.log(arr.length);
        loop();
      }, 1000);
    }
    arr[i].setUpLines();
  }
}

function checkBoundaries() {
  if (x >= width) {
    x = x - (width + w);
  } else if (x + w <= 0) {
    x = x + (width + w);
  } else if (y >= height) {
    y = y - (height + h);
  } else if (y + h <= 0) {
    y = y + (height + h);
  }
}

function checkKeyInput() {
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
}
