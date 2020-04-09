let x, y, xspeed, yspeed;

function setup() {
    createCanvas(800, 600);
    x = 10;
    y = 10;
    xspeed = 0;
    yspeed = 5;
}

function draw() {
    background(220);

    x += xspeed / 2;
    y += yspeed / 2;

    fill(255);
    rect(x, y, 10, 10);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        yspeed = -5;
        xspeed = 0;
    } else if (keyCode === DOWN_ARROW) {
        yspeed = 5;
        xspeed = 0;
    } else if (keyCode === LEFT_ARROW) {
        yspeed = 0;
        xspeed = -5;
    } else if (keyCode === RIGHT_ARROW) {
        yspeed = 0;
        xspeed = 5;
    }
}