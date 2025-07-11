import { useState } from "react";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import HowWeGiveBack from "./pages/HowWeGiveBack";
import TalkToUs from "./pages/TalkToUs";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "whatwedo":
        return <WhatWeDo />;
      case "whoweare":
        return <WhoWeAre />;
      case "giveback":
        return <HowWeGiveBack />;
      case "talktous":
        return <TalkToUs />;
      default:
        return <Home />;
    }
  };

  const links = [
    { label: "What we do", key: "whatwedo" },
    { label: "Who we are", key: "whoweare" },
    { label: "How we give back", key: "giveback" },
    { label: "Talk to us", key: "talktous" },
  ];

  return (
    <div className="w-full min-h-screen font-['Helvetica_Now_Display']">
      <nav className="w-full p-8 flex justify-between z-50 border-b border-white/10">
        <div
          className="brand text-2xl font-md cursor-pointer"
          onClick={() => setPage("home")}
        >
          Thirtysixstudio
        </div>
        <div className="links flex gap-10">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => setPage(link.key)}
              className="text-md hover:text-gray-300 capitalize"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
