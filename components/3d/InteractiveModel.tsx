'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<any>(null);

  useEffect(() => {
    // Any animations or effects can be added here
  }, []);

  return (
    <Canvas style={{ height: '500px', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={true} />
      <mesh ref={modelRef}>
        {/* Replace with your 3D model */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;