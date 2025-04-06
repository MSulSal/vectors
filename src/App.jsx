import NoVector from "./components/NoVector";

const App = () => {
  return (
    <div className="App">
      <h1>Vectors</h1>
      <div className="canvas-grid">
        <div className="canvas-container">
          <p>Bouncing Ball, No Vectors</p>
          <NoVector />
        </div>
      </div>
    </div>
  );
};

export default App;
