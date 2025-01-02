import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedSphere = ({ color = "#8DF1FF" }) => {
  const groupRef = useRef();

  // Rotate back and forth
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.3; // Rotate back and forth on the y-axis
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2; // Subtle rotation on the x-axis
    }
  });

  return (
    <group ref={groupRef} scale={2}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} /> {/* Circular sphere with high detail */}
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
};

export default AnimatedSphere;

