import NoVector from "./components/NoVector";
import Vector from "./components/Vector";
import Vector3D from "./components/Vector3D";

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
      </div>
    </div>
  );
};

export default App;
