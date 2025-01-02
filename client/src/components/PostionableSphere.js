import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

const PositionableSphere = ({
  position = "bottom-right",
  size = "medium",
  customPosition = null,
  rotation = 0,
  color = "#8DF1FF",
}) => {
  const positions = {
    "top-left": { top: 0, left: 0 },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  };

  const sizes = {
    small: { width: "200px", height: "200px" },
    medium: { width: "300px", height: "300px" },
    large: { width: "400px", height: "400px" },
  };

  const style = {
    position: "absolute",
    ...sizes[size],
    ...(customPosition || positions[position]),
    transform: `${positions[position]?.transform || ""} rotate(${rotation}deg)`,
    zIndex: 1,
  };

  return (
    <div style={style}>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />
        <AnimatedSphere color={color} />
      </Canvas>
    </div>
  );
};

export default PositionableSphere;


