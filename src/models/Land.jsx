import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import islandScene from "../assets/3d/turtle_land.glb";
import { useFrame, useThree } from "@react-three/fiber";

export default function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  scale,
  position,
}) {
  const islandRef = useRef();
  const { scene } = useGLTF(islandScene);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (isRotating === false) {
        setIsRotating(true);
        islandRef.current.rotation.y += 0.02 * Math.PI;
      }
    } else if (e.key === "ArrowRight") {
      setIsRotating(true);
      islandRef.current.rotation.y -= 0.00002 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    } else {
      const rotation = islandRef.current.rotation.y;
      islandRef.current.rotation.y -= 0.015 * Math.PI;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 0.8 && normalizedRotation <= 2.25:
          setCurrentStage(3);
          break;

        case normalizedRotation >= 2.85 && normalizedRotation <= 4.25:
          setCurrentStage(2);
          break;

        case normalizedRotation >= 5 && normalizedRotation <= 6:
          setCurrentStage(1);
          break;

        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <mesh ref={islandRef} scale={scale} position={position}>
      <primitive object={scene} />
    </mesh>
  );
}
