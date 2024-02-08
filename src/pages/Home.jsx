import { Canvas } from "@react-three/fiber";
import Sky from "../models/Sky";
import { useEffect, useRef, useState, Suspense } from "react";
import IsLand from "../models/Land";
import HomeInfo from "../components/HomeInfo";

import musicOff from "../assets/icons/soundoff.png";
import musicOn from "../assets/icons/soundon.png";
import sakura from "../assets/sakura.mp3";
import { FaMoon, FaSun } from "react-icons/fa";
import { CanvasLoader } from "../components/Loader";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.loop = true;
  audioRef.current.volume = 0.4;
  const [isPlayingSakura, setIsPlayingSakura] = useState(false);

  useEffect(() => {
    if (isPlayingSakura) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingSakura]);

  const islandScaleForDiffrentScreen = () => {
    let scale;
    let position;
    if (window.innerWidth < 800) {
      scale = [0.01, 0.01, 0.01];
      position = [0, -4, -55];
    } else {
      scale = [0.016, 0.016, 0.016];
      position = [0, -2, -55];
    }
    return [scale, position];
  };
  const [castleScale, castlePosition] = islandScaleForDiffrentScreen();

  return (
    <section className="relative w-full h-screen">
      <div className="absolute z-10 mt-28 w-screen flex items-center justify-center md:justify-end md:pr-44 pointer-events-none">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          !isRotating ? "cursor-grab" : "cursor-grabbing"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <directionalLight
            position={[1, 1, 1]}
            intensity={`${isDarkMode ? "4" : "0.5"} `}
          />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={`${isDarkMode ? "1" : "0.5"} `}
          />
          <ambientLight intensity={0.5} />

          <Sky isRotating={isRotating} />
          <IsLand
            scale={castleScale}
            position={castlePosition}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-14 left-14">
        <img
          src={isPlayingSakura ? musicOn : musicOff}
          className="h-10 w-10 object-cover rounded-full stroke-gray-200 cursor-pointer"
          alt="Sound"
          onClick={() => setIsPlayingSakura(!isPlayingSakura)}
        />
      </div>

      <div className="absolute bottom-14 right-14">
        {isDarkMode ? (
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="homeDarkModeIcon"
          >
            <FaMoon />
          </button>
        ) : (
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="homeDarkModeIcon"
          >
            <FaSun />
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;
