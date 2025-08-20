import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GlamorousCosmetics = () => {
  return (
    <Canvas style={{ background: 'white' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* Add your 3D models here */}
      <OrbitControls />
    </Canvas>
  );
};

export default GlamorousCosmetics;