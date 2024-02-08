import { Html, useProgress } from "@react-three/drei";
import "../styles/Loader.css";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center>
      <p className="font-semibold text-2xl text-primary">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export const Loader = () => {
  return (
    <div className="flex h-screen w-screen bg-primary items-center justify-center">
      <p className="loader"></p>
    </div>
  );
};
