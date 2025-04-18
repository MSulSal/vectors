import Sketch from "react-p5";

const Magnitude = () => {
  let scaleSlider;
  let label;

  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    scaleSlider = p5.createSlider(0, 2, 1, 0.01);
    label = p5
      .createDiv("Scale (" + scaleSlider.value() + "):")
      .parent(canvasParentRef);

    scaleSlider.parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.clear();
    label.html("Scale (" + scaleSlider.value() + "):");
    let mouse = p5.createVector(p5.mouseX, p5.mouseY);
    let center = p5.createVector(p5.width / 2, p5.height / 2);
    mouse.sub(center);

    if (
      mouse.x > -p5.width / 2 &&
      mouse.x < p5.width / 2 &&
      mouse.y > -p5.height / 2 &&
      mouse.y < p5.height / 2
    ) {
      let m = mouse.mag() * 2 * scaleSlider.value();
      p5.fill(0);
      p5.rect(0, 0, m, 10);

      p5.translate(p5.width / 2, p5.height / 2);
      p5.line(0, 0, mouse.x, mouse.y);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Magnitude;
