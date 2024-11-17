import "./index.css";
import Canvas from "./Canvas";

function App() {
  return <>
    <div className="w-full h-screen bg-black text-white">
      <Canvas startIndex={0} />
      <Canvas startIndex={150} />
      <Canvas startIndex={300} />
    </div>
  </>
}

export default App;