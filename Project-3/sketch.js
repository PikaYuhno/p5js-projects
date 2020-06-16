let arr = []
function setup() {
    createCanvas(800, 600);
    arr.push(new Tail(10, 10));
    arr.push(new Tail(10, 10));
    arr.push(new Tail(10, 10));

    arr.push(new Tail(10, 10));



}
let key;
function draw() {
    background(220);
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i].tick();
        arr[i].render();
        if (!arr[i].check(key)) {
            if (i != arr.length - 1) {
                arr[i].geben(arr[i + 1]);

            }


        }
    }

}

class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 5;
    }

    render() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }

    tick() {
        this.x += this.xspeed / 2;
        this.y += this.yspeed / 2;
    }

    check(keyCode) {
        if (keyCode === "UP_ARROW") {
            this.yspeed = -5;
            this.xspeed = 0;
        } else if (keyCode === "DOWN_ARROW") {
            this.yspeed = 5;
            this.xspeed = 0;
        } else if (keyCode === "LEFT_ARROW") {
            this.yspeed = 0;
            this.xspeed = -5;
        } else if (keyCode === "RIGHT_ARROW") {
            this.yspeed = 0;
            this.xspeed = 5;
        } else {
            return true;
        }
    }

    geben(tail) {
        tail.x = this.x - 10;
        tail.y = this.y - 10;
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        key = "UP_ARROW"
    } else if (keyCode === DOWN_ARROW) {
        key = "DOWN_ARROW"
    } else if (keyCode === LEFT_ARROW) {
        key = "LEFT_ARROW"
    } else if (keyCode === RIGHT_ARROW) {
        key = "RIGHT_ARROW";
    }
}