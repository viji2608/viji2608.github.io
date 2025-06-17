
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#8B5CF6" intensity={0.5} />
      
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[0.5]} position={[-2, 1, 0]}>
            <meshStandardMaterial color="#8B5CF6" wireframe />
          </Sphere>
        </Float>

        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <Torus args={[0.3, 0.1]} position={[2, -1, 0]}>
            <meshStandardMaterial color="#EC4899" />
          </Torus>
        </Float>

        <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
          <Box args={[0.4, 0.4, 0.4]} position={[0, 2, -1]}>
            <meshStandardMaterial color="#06B6D4" wireframe />
          </Box>
        </Float>
      </group>
    </>
  );
};

export default ThreeScene;
