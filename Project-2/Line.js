class Line {
  constructor(rectX, rectY, down) {
    this.x = rectX;
    this.y1 = rectY;
    this.y2 = 25 + rectY;
    this.down = down;

    this.update = () => {
      if (this.down) {
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
