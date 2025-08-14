import Sketch from "react-p5";

let xlabel, ylabel, xslider, yslider, resetButton, breaker;

class Mover {
  constructor(p5) {
    this.p5 = p5;
    this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.velocity = p5.createVector(0, 0);
    this.velocity.limit(2);
    this.acceleration = p5.createVector(xslider.value(), yslider.value());
  }

  update() {
    let dt = this.p5.deltaTime / 1000;
    let frameIndependentAcceleration = this.p5
      .createVector(xslider.value(), yslider.value())
      .mult(dt);
    this.velocity.add(frameIndependentAcceleration);
    this.position.add(this.velocity);
    xlabel.html("X Acceleration: " + xslider.value());
    ylabel.html("Y Acceleration: " + yslider.value());
  }

  show() {
    this.p5.stroke(0, 255, 0);
    this.p5.strokeWeight(2);
    this.p5.fill(0, 255, 0);
    this.p5.circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > this.p5.width + 24) {
      this.position.x = -24;
      // this.velocity.x *= -1;
    }
    if (this.position.x < -24) {
      this.position.x = this.p5.width + 24;
      // this.velocity.x *= -1;
    }

    if (this.position.y > this.p5.height + 24) {
      this.position.y = -24;
      // this.velocity.y *= -1;
    } else if (this.position.y < -24) {
      this.position.y = this.p5.height + 24;
      // this.velocity.y *= -1;
    }
  }
}

let mover;

const Acceleration = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    xslider = p5.createSlider(-3, 3, 0, 1);
    yslider = p5.createSlider(-3, 3, 0, 1);
    breaker = p5.createDiv("");

    resetButton = p5.createButton("RESET VELOCITY");

    resetButton.style("background-color", "#000");
    resetButton.style("color", "#0F0");
    resetButton.style("padding", "10px 20px");
    resetButton.style("border-color", "#0F0");
    resetButton.style("border-radius", "5px");
    resetButton.style("cursor", "pointer");

    xlabel = p5.createDiv("X Acceleration");
    xlabel.parent(canvasParentRef);
    xslider.parent(canvasParentRef);
    ylabel = p5.createDiv("Y Acceleration");
    ylabel.parent(canvasParentRef);
    yslider.parent(canvasParentRef);
    breaker.parent(canvasParentRef);
    resetButton.parent(canvasParentRef);
    mover = new Mover(p5);
    resetButton.mousePressed(() => {
      mover.velocity.set(0, 0);
    });
  };

  const draw = (p5) => {
    p5.clear();
    mover.update();
    mover.checkEdges();
    mover.show();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Acceleration;
