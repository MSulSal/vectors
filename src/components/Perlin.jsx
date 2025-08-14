import Sketch from "react-p5";

class Mover {
  constructor(p5) {
    this.p5 = p5;
    this.position = p5.createVector();
    this.velocity = p5.createVector(0, 0);
    this.velocity.limit(2);
    this.t = 0;
    this.acceleration = p5.createVector(
      this.p5.noise(this.t),
      this.p5.noise(this.t + 1000)
    );
    this.acceleration.limit(0.1);
  }

  update() {
    let dt = this.p5.deltaTime / 1000;
    let frameIndependentAcceleration = this.p5
      .createVector(this.p5.noise(this.t), this.p5.noise(this.t + 1000))
      .mult(dt)
      .limit(0.1);
    this.velocity.add(frameIndependentAcceleration);
    this.position.add(this.velocity);
    this.t += 0.001;
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

const Perlin = () => {
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

export default Perlin;
