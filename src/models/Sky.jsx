import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const { scene } = useGLTF(skyScene);

  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.55 * delta;
    }
  });

  return (
    <mesh ref={skyRef} scale={[1, 1, 1]} position={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
