import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";
import * as THREE from "three";

function WaveLineShape() {
  const meshRef = useRef();

  // Optional rotation / animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.1;
    }
  });

  // 1. Define points for the wave using Vector3.
  //    Feel free to add more points for a smoother curve.
  const points = [
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(2, 0, 0),
  ];

  // 2. Create a curve (CatmullRomCurve3) from those points
  //    to define the path of the tube.
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);

  // 3. Tube Geometry:
  //    - path: the curve
  //    - tubularSegments: how many segments along the length (the "resolution")
  //    - radius: thickness of the wave
  //    - radialSegments: how many segments around its circumference
  //    - closed: whether the ends of the tube connect
  const tubularSegments = 200;
  const radius = 0.35;
  const radialSegments = 32;
  const closed = false;

  return (
    <mesh ref={meshRef}>
      <tubeGeometry
        args={[curve, tubularSegments, radius, radialSegments, closed]}
      />
      <meshStandardMaterial roughness={0.2} metalness={0.1}>
        {/* A simple gradient texture using drei’s <GradientTexture /> */}
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

export default WaveLineShape;
