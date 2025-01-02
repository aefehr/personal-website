import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Donut = ({ color = "#8DF1FF" }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Keep the gentle z-axis animation
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.1 + -Math.PI;
    }
  });

  const torusRadius = 1;
  const tubeRadius = 0.4;
  const arc = 1.5 * Math.PI;

  const cap1Pos = [torusRadius, 0, 0];
  const cap2Pos = [
    Math.cos(arc) * torusRadius,
    Math.sin(arc) * torusRadius,
    0
  ];

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
      rotation={[0, 0, -Math.PI]} // Rotate 180 degrees counter-clockwise
    >
      <mesh material={material}>
        <torusGeometry args={[torusRadius, tubeRadius, 64, 64, arc]} />
      </mesh>
      <mesh position={cap1Pos} material={material}>
        <sphereGeometry args={[tubeRadius, 64, 64]} />
      </mesh>
      <mesh position={cap2Pos} material={material}>
        <sphereGeometry args={[tubeRadius, 64, 64]} />
      </mesh>
    </group>
  );
};

const DonutComponentOne = ({ 
  position = 'bottom-right',
  size = 'medium',
  color = '#8DF1FF',
  rotation = 0,
  customPosition = null 
}) => {

  const style = {
    position: 'absolute',
    width: '750px',  // Increased width
    height: '750px', // Increased height
    bottom: '-240px', // Push down to go offscreen
    right: '-130px',
    zIndex: 1
  };

  return (
    <div style={style}>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />
        <Donut color={color} />
      </Canvas>
    </div>
  );
};

export default DonutComponentOne;