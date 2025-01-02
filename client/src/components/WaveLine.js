// src/components/WaveLine.js

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";
import * as THREE from "three";

// This is the actual wave geometry
function WaveLineShape() {
  const meshRef = useRef();

  // Optional gentle animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  // Define some points to form a wavy line
  const points = [
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(2, 0, 0),
  ];

  // Create a smooth curve from these points
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);

  // Tube geometry arguments
  const tubularSegments = 200;
  const radius = 0.35;
  const radialSegments = 32;
  const closed = false;

  return (
    <mesh ref={meshRef}>
      <tubeGeometry
        args={[curve, tubularSegments, radius, radialSegments, closed]}
      />
      <meshStandardMaterial roughness={0.2} metalness={0.1} side={THREE.DoubleSide}>
        <GradientTexture
          attach="map"
          stops={[0, 0.5, 1]}
          colors={["#BFFFEA", "#A0E3FF", "#80CFFF"]} 
          size={1024}
        />
      </meshStandardMaterial>
    </mesh>
  );
}

// This is the wrapper component, containing the Canvas & the wave line
function WaveLine() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "300px",
        height: "300px",
        // or any size you prefer
      }}
    >
      <Canvas style={{ width: "100%", height: "100%", background: "transparent" }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 5]} />
        <WaveLineShape />
      </Canvas>
    </div>
  );
}

export default WaveLine;

