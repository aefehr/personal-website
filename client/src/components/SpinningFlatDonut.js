import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Donut = ({ color = "#ffffa6" }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = -clock.elapsedTime * 0.5;
    }
  });

  const torusRadius = 1;
  const tubeRadius = 0.4;
  const arc = 2 * Math.PI; // Changed to full circle

  const gradientTexture = new THREE.DataTexture(
    new Uint8Array(3),
    1,
    1,
    THREE.RGBFormat
  );
  gradientTexture.needsUpdate = true;

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide,
    color: color,
    emissive: color,
    emissiveIntensity: 0.1,
    gradientMap: gradientTexture,
  });

  return (
    <group 
      ref={groupRef} 
      scale={2}
      rotation={[0, 0, -Math.PI]}
    >
      <mesh material={material}>
        <torusGeometry args={[torusRadius, tubeRadius, 64, 64, arc]} />
      </mesh>
    </group>
  );
};

const SpinningFlatDonut = () => {
  const containerStyle = {
    position: 'fixed',
    top: '-350px',
    left: '-250px',
    width: '700px',
    height: '700px',
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />
        <Donut />
      </Canvas>
    </div>
  );
};

export default SpinningFlatDonut;