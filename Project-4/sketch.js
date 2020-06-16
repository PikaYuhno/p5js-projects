let v;
let mouse;
let walker;
function setup(){
  createCanvas(1280, 720);
  mouse = createVector(0, 0);
  walker = new Walker(200, 200);
  console.log(walker);
}

function draw(){
  background(0);

  walker.update(mouse.x, mouse.y);
  walker.show();
}

class Walker{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
  }
  update(mX, mY){
    let mouse = createVector(mX, mY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(10);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  show(){
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}

function mousePressed(evt){
    mouse = createVector(evt.x, evt.y);
}
