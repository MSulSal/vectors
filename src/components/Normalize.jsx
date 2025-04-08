import Sketch from "react-p5";

const Normalize = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.clear();
    let mouse = p5.createVector(p5.mouseX, p5.mouseY);
    let center = p5.createVector(p5.width / 2, p5.height / 2);
    mouse.sub(center);

    if (
      mouse.x > -p5.width / 2 &&
      mouse.x < p5.width / 2 &&
      mouse.y > -p5.height / 2 &&
      mouse.y < p5.height / 2
    ) {
      p5.translate(p5.width / 2, p5.height / 2);
      p5.stroke(200);
      p5.line(0, 0, mouse.x, mouse.y);
      mouse.normalize();
      mouse.mult(50);

      p5.stroke(0);
      p5.strokeWeight(8);
      p5.line(0, 0, mouse.x, mouse.y);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normalize;
