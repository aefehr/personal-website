import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Sphere = () => {
  const groupRef = useRef();

  const material = new THREE.MeshStandardMaterial({
    color: "#8DF1FF",
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide,
    emissive: "#8DF1FF",
    emissiveIntensity: 0.2
  });

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.05;
      groupRef.current.rotation.y = Math.cos(clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={[1.8, 1.8, 1.8]}>
      <mesh material={material}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </group>
  );
};

const SphereComponent = () => {
  const style = {
    position: 'absolute',
    width: '380px',
    height: '380px',
    left: '49%',
    top: '-150px',
    transform: 'translateX(-50%)',
    zIndex: 1,
  };

  return (
    <div style={style}>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default SphereComponent;