import { useEffect, useState, type CSSProperties } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const dynamicStyles = {
    "--mouse-x": `${coords.x}px`,
    "--mouse-y": `${coords.y}px`,
  } as CSSProperties;

  return (
    <div
      className="image-container"
      style={dynamicStyles}
      data-onClick={click}
      onClick={handleClick}
    >
      <img src="/miles.png" alt="Miles" className="miles-image" />
      <img src="/spiderman.png" alt="Spiderman" className="spider-image" />
      <Analytics />
    </div>
  );
}

export default App;
