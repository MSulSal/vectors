import Sketch from "react-p5";

let massSlider;
let mouseMassSlider;
let massLabel, mouseMassLabel;

class Mover {
  constructor(p5) {
    this.p5 = p5;
    this.position = p5.createVector(this.p5.width / 2, this.p5.height / 2);
    this.velocity = p5.createVector(0, 0);
    this.velocity.limit(2);
    this.acceleration = p5.createVector(0, 0);
    this.acceleration.limit(0.1);
    this.mass = massSlider.value();
  }

  update() {
    this.mass = massSlider.value();
    let mouseMass = mouseMassSlider.value();
    let mouse = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
    let dir = mouse.copy().sub(this.position);
    let nonNDir = dir.copy();
    dir.normalize();
    let dt = this.p5.deltaTime / 1000;
    let frameIndependentAcceleration = dir
      .mult(mouseMass)
      .mult(dt)
      .div(nonNDir.magSq())
      .limit(0.1);
    this.velocity.add(frameIndependentAcceleration);
    this.position.add(this.velocity);
  }

  show() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(127);
    this.p5.circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > this.p5.width) {
      this.position.x = this.p5.width - 48;
      this.velocity.x *= -1;
    }
    if (this.position.x < 0) {
      this.position.x = 48;
      this.velocity.x *= -1;
    }

    if (this.position.y > this.p5.height) {
      this.position.y = this.p5.height - 48;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.position.y = 48;
      this.velocity.y *= -1;
    }
  }
}

let mover;

const Gravity = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    massLabel = p5.createDiv("Mass of the object:");
    massLabel.parent(canvasParentRef);
    massSlider = p5.createSlider(100, 1000000, 1000, 100);
    massSlider.parent(canvasParentRef);
    mouseMassLabel = p5.createDiv("Mass of the mouse:");
    mouseMassLabel.parent(canvasParentRef);
    mouseMassSlider = p5.createSlider(100, 1000000, 1000, 100);
    mouseMassSlider.parent(canvasParentRef);
    mover = new Mover(p5);
  };

  const draw = (p5) => {
    p5.clear();
    mover.update();
    mover.checkEdges();
    mover.show();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Gravity;
