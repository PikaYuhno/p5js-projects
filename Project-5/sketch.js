let x, y;
let xs, ys;
let recs = [];
let lineX;
function setup() {
    createCanvas(384, 400);
    x = 0;
    y = height-30;
    xs = 5;
    ys = 5;
    lineX = 0;
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 12; j++) {
            let rec = new Rectangle(j*32, i*16, 32, 16);
            recs.push(rec);
        }
    }
}

function draw() {
    background(220);
    for(let i = 0; i < recs.length; i++) {
        let rec = recs[i];
        rec.render();
        if(x >= rec.x && x <= rec.x+rec.w && y <= rec.y+rec.h && y >= rec.y) {
            ys = 5;
            recs.splice(i, 1);
        }
    }
    x += xs;
    y += ys;
    if(x >= width) {
        xs = -5;
    } else if(x <= 0) {
        xs = 5;
    } else if (x >= lineX && x <= lineX+100 && y <= height-20+5 && y >= height-20) {
        ys = -5;
    } else if(y <= 0) {
        ys = 5;
    }
    rect(x, y, 10, 10);
    if(keyIsDown(LEFT_ARROW)) {
        lineX -= 10;
    } else if(keyIsDown(RIGHT_ARROW)) {
        lineX += 10;
    }
    rect(lineX, height-20, 100, 3);
    
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    render = () => {
        rect(this.x, this.y, this.w, this.h);
    }
}
