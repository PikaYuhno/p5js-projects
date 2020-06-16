class Player {
  constructor(up, down, left, right, posX, posY, key, d) {
    this.x = posX;
    this.y = posY;
    this.pWidth = 10;
    this.pHeight = 10;
    this.s = true;

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
    this.shoot = () => {
      if (keyIsDown(key) && this.s === true) {
        if (d) {
          globalArr.push(new Line(this.x + this.pWidth / 2, this.y, d));
        } else {
          globalArr.push(
            new Line(this.x + this.pWidth / 2, this.y - this.pHeight, d)
          );
        }
        this.s = false;
      }
      setTimeout(() => {
        this.s = true;
      }, 1000);
    };
  }
}
