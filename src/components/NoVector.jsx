import Sketch from "react-p5";

const NoVector = () => {
  let x = 100;
  let y = 100;
  let xspeed = 2.5;
  let yspeed = 2;

  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.clear();
    x += xspeed;
    y += yspeed;
    if (x > p5.width || x < 0) {
      xspeed *= -1;
    }
    if (y > p5.height || y < 0) {
      yspeed *= -1;
    }
    p5.stroke(0);
    p5.fill(127);
    p5.circle(x, y, 48);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default NoVector;
