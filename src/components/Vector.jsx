import Sketch from "react-p5";

const Vector = () => {
  let position;
  let velocity;

  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    position = p5.createVector(100, 100);
    velocity = p5.createVector(2.5, 2);
  };
  const draw = (p5) => {
    p5.clear();
    position.add(velocity);
    if (position.x > p5.width || position.x < 0) {
      velocity.x *= -1;
    }
    if (position.y > p5.height || position.y < 0) {
      velocity.y *= -1;
    }
    p5.stroke(0);
    p5.fill(0, 255, 0);
    p5.circle(position.x, position.y, 48);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Vector;
