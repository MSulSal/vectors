import Sketch from "react-p5";

let xlabel, ylabel, xslider, yslider;

class Mover {
  constructor(p5) {
    this.p5 = p5;
    this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.velocity = p5.createVector(xslider.value(), yslider.value());
  }

  update() {
    let dt = this.p5.deltaTime;
    let frameIndependentVelocity = this.p5
      .createVector(xslider.value(), yslider.value())
      .mult(dt);
    this.position.add(frameIndependentVelocity);
    xlabel.html("X Velocity: " + xslider.value());
    ylabel.html("Y Velocity: " + yslider.value());
  }

  show() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(127);
    this.p5.circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > this.p5.width) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = this.p5.width;
    }

    if (this.position.y > this.p5.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.p5.height;
    }
  }
}

let mover;

const Magnitude = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    xlabel = p5.createDiv("X Velocity");
    xlabel.parent(canvasParentRef);
    xslider = p5.createSlider(-5, 5, 0, 0.1);
    yslider = p5.createSlider(-5, 5, 0, 0.1);
    xslider.parent(canvasParentRef);
    ylabel = p5.createDiv("Y Velocity");
    ylabel.parent(canvasParentRef);
    yslider.parent(canvasParentRef);
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

export default Magnitude;
