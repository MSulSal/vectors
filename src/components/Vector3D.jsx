import Sketch from "react-p5";

const Vector3D = () => {
  let position;
  let velocity;
  const boxSize = 400;
  const sphereRadius = 24;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(boxSize, boxSize, p5.WEBGL).parent(canvasParentRef);
    position = p5.createVector(
      p5.random(-boxSize / 2 + sphereRadius, boxSize / 2 - sphereRadius),
      p5.random(-boxSize / 2 + sphereRadius, boxSize / 2 - sphereRadius),
      p5.random(-boxSize / 2 + sphereRadius, boxSize / 2 - sphereRadius)
    );
    velocity = p5.createVector(2, 2, 2);
  };

  const draw = (p5) => {
    p5.background(255);
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      p5.orbitControl();
    }

    position.add(velocity);

    if (
      position.x > boxSize / 2 - sphereRadius ||
      position.x < -boxSize / 2 + sphereRadius
    ) {
      velocity.x *= -1;
    }
    if (
      position.y > boxSize / 2 - sphereRadius ||
      position.y < -boxSize / 2 + sphereRadius
    ) {
      velocity.y *= -1;
    }
    if (
      position.z > boxSize / 2 - sphereRadius ||
      position.z < -boxSize / 2 + sphereRadius
    ) {
      velocity.z *= -1;
    }

    p5.push();
    p5.noFill();
    p5.stroke(0);
    p5.box(boxSize);
    p5.pop();

    p5.push();
    p5.translate(position.x, position.y, position.z);
    p5.fill(127);
    p5.noStroke();
    p5.sphere(sphereRadius);
    p5.pop();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Vector3D;
