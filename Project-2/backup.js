let player1;
let player2;
let d;
let curX1 = 0;
let curY1 = 0;
let curX2 = 0;
let curY2 = 0;

let arr1 = [];
let arr2 = [];

function setup() {
  createCanvas(1280, 720);
  player1 = new Player(
    UP_ARROW,
    DOWN_ARROW,
    LEFT_ARROW,
    RIGHT_ARROW,
    width / 2 - 5,
    height / 4 - 5
  );
  player2 = new Player(87, 83, 65, 68, width / 2 - 5, height * (3 / 4) - 5);
}

function draw() {
  background(210);

  player1.shoot();
  player1.draw();
  player1.setup();
  curX1 = player1.x;
  curY1 = player1.y;

  player2.shoot();
  player2.draw();
  player2.setup();
  curX2 = player2.x;
  curY2 = player2.y;

  arr1.forEach((item, index, array) => {
    item.update();
    item.setUpLines();
    if (item.y2 >= height) {
      arr1.splice(index, 1);
    }
  });

  arr2.forEach((item, index, array) => {
    item.update();
    item.setUpLines();
    if (item.y1 <= 0) {
      arr2.splice(index, 1);
    }
  });

  stroke(0);
  line(0, height / 2, width, height / 2);
}

class Player {
  constructor(up, down, left, right, posX, posY) {
    this.x = posX;
    this.y = posY;
    this.pWidth = 10;
    this.pHeight = 10;
    this.draw = () => {
      if (keyIsDown(up)) {
        this.y -= 5;
      } else if (keyIsDown(down)) {
        this.y += 5;
      } else if (keyIsDown(left)) {
        this.x -= 5;
      } else if (keyIsDown(right)) {
        this.x += 5;
      }
    };
    this.setup = () => {
      fill(0);
      rect(this.x, this.y, this.pWidth, this.pHeight);
    };
    this.shoot = () => {};
  }
}

function keyPressed() {
  if (keyCode === 32) {
    arr1.push(new Line(curX1 + player1.pWidth / 2, curY1, true));
  } else if (keyCode === 75) {
    arr2.push(new Line(curX2 + player2.pWidth / 2, curY2 - 25, false));
  }
}

class Line {
  constructor(rectX, rectY, down) {
    this.x = rectX;
    this.y1 = rectY;
    this.y2 = 25 + rectY;

    this.update = () => {
      if (down) {
        this.y1 += 10;
        this.y2 += 10;
      } else {
        this.y1 -= 10;
        this.y2 -= 10;
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
}
