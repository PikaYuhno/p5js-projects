let player1;
let player2;
let d;

let globalArr = [];
let playerArr = [];

function setup() {
  createCanvas(1280, 720);
  player1 = new Player(
    UP_ARROW,
    DOWN_ARROW,
    LEFT_ARROW,
    RIGHT_ARROW,
    width / 2 - 5,
    height / 4 - 5,
    32,
    true
  );
  player2 = new Player(
    87,
    83,
    65,
    68,
    width / 2 - 5,
    height * (3 / 4) - 5,
    75,
    false
  );
  playerArr.push(player1, player2);
}

function draw() {
  background(210);

  playerArr.forEach((item, index, array) => {
    item.shoot();
    item.draw();
    item.setup();
  });

  globalArr.forEach((item, index, array) => {
    item.update();
    item.setUpLines();
    if (item.down) {
      if (item.y2 >= height) {
        globalArr.splice(index, 1);
      }
    } else {
      if (item.y1 <= 0) {
        globalArr.splice(index, 1);
      }
    }
  });

  stroke(0);
  line(0, height / 2, width, height / 2);
}
