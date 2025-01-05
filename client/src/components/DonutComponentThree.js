import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Donut = ({ color = "#8DF1FF" }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.1 - Math.PI / 2;  // Changed to negative PI/2
    }
  });

  const torusRadius = 1;
  const tubeRadius = 0.45;
  const arc = Math.PI; // Half circle
  const startAngle = Math.PI; // Start from left side

  // Calculate cap positions based on the arc's start and end points
  const cap1Pos = [
    Math.cos(startAngle) * torusRadius, // Left side
    Math.sin(startAngle) * torusRadius,
    0
  ];
  const cap2Pos = [
    Math.cos(startAngle + arc) * torusRadius, // Right side
    Math.sin(startAngle + arc) * torusRadius,
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
      rotation={[0, 0, -Math.PI / 2]} // Changed rotation to make opening face left
    >
      <mesh material={material}>
        <torusGeometry args={[torusRadius, tubeRadius, 64, 64, arc, startAngle]} />
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

const HalfDonutComponent = ({ 
  position = 'bottom-left',
  size = 'medium',
  color = '#8DF1FF',
  rotation = 0,
  customPosition = null 
}) => {

  const style = {
    position: 'absolute',
    width: '750px',
    height: '750px',
    bottom: '-400px',
    left: '-200px',
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

export default HalfDonutComponent;