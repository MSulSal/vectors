import Sketch from "react-p5";

const NoVector = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };
  const draw = () => {};

  return <Sketch setup={setup} draw={draw} />;
};

export default NoVector;
