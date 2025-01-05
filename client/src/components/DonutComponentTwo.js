import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Donut = ({ color = '#FFB3C2' }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Set the base rotation to -Math.PI/2 (90 degrees counterclockwise)
      // and add the animation on top
      groupRef.current.rotation.z = -Math.PI/2 + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const torusRadius = 1;
  const tubeRadius = 0.41;
  const arc = 1.4 * Math.PI; // Maintain the wider opening

  const cap1Pos = [torusRadius, 0, 0];
  const cap2Pos = [
    Math.cos(arc) * torusRadius,
    Math.sin(arc) * torusRadius,
    0,
  ];

  const gradientTexture = new THREE.DataTexture(
      new Uint8Array(3),
      1,
      1,
      THREE.RGBFormat
    );
    gradientTexture.needsUpdate = true;

  const material = new THREE.MeshStandardMaterial({
      roughness: 0.1,
      metalness: 0.1,
      side: THREE.DoubleSide,
      color: color,
      emissive: color,
      emissiveIntensity: 0.3,
      gradientMap: gradientTexture,
    });

  return (
    <group
      ref={groupRef}
      scale={2}
      // Remove the rotation here since we're handling it in useFrame
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

const DonutComponentTwo = ({
  position = 'top-right',
  size = 'medium',
  color = '#FFB3C2',
  customPosition = null,
}) => {
  const style = {
    position: 'absolute',
    width: '750px',
    height: '750px',
    top: '-420px',
    right: '-30px',
    zIndex: 1,
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

export default DonutComponentTwo;




