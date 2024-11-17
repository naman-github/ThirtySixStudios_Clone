import { useEffect } from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        <div className="w-full h-screen text-white">
          <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50">
          </nav>
          
        </div>
      </div>
    </>
  );
}

export default App;
