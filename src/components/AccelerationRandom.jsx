import Sketch from "react-p5";

class Mover {
  constructor(p5) {
    this.p5 = p5;
    this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.velocity = p5.createVector(0, 0);
    this.velocity.limit(0.1);
    this.acceleration = p5.createVector(
      p5.random(-0.1, 0.1),
      p5.random(-0.1, 0.1)
    );
    this.acceleration.limit(0.1);
  }

  update() {
    let dt = this.p5.deltaTime;
    let frameIndependentAcceleration = this.p5
      .createVector(this.p5.random(-0.1, 0.1), this.p5.random(-0.1, 0.1))
      .mult(dt);
    this.velocity.add(frameIndependentAcceleration);
    this.position.add(this.velocity);
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

export default Acceleration;
