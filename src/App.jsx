import Line from "./components/Line";
import Magnitude from "./components/Magnitude";
import NoVector from "./components/NoVector";
import Scale from "./components/Scale";
import Vector from "./components/Vector";
import Vector3D from "./components/Vector3D";
import Normalize from "./components/Normalize";
import Velocity from "./components/Velocity";
import Acceleration from "./components/Acceleration";

const App = () => {
  return (
    <div className="App">
      <h1>Vectors</h1>
      <div className="canvas-grid">
        <div className="canvas-container">
          <p>Bouncing ball, no vectors</p>
          <NoVector />
        </div>
        <div className="canvas-container">
          <p>Bouncing ball, vector</p>
          <Vector />
        </div>
        <div className="canvas-container">
          <p>Bouncing ball, 3D</p>
          <Vector3D />
        </div>
        <div className="canvas-container">
          <p>
            Vector from center to mouse pointer obtained through vector
            subtraction
          </p>
          <Line />
        </div>
        <div className="canvas-container">
          <p>Scaled Vector</p>
          <Scale />
        </div>
        <div className="canvas-container">
          <p>Bar Representing Magnitude of Vector</p>
          <Magnitude />
        </div>
        <div className="canvas-container">
          <p>Normalized Vector</p>
          <Normalize />
        </div>
        <div className="canvas-container">
          <p>Velocity with Vectors</p>
          <Velocity />
        </div>
        <div className="canvas-container">
          <p>Acceleration with Vectors</p>
          <Acceleration />
        </div>
      </div>
    </div>
  );
};

export default App;
