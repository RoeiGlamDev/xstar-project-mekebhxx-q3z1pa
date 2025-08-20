import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ height: '100vh', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      {/* Add your 3D models here */}
      {/* Example: <Model /> */}
    </Canvas>
  );
};

export default Scene3D;