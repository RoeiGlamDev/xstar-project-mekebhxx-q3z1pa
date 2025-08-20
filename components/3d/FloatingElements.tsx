import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './FloatingElements.css'; // Import CSS for styling

const FloatingElement = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FFA500" /> {/* Orange color for luxury feel */}
    </mesh>
  );
};

const FloatingElements = () => {
  return (
    <div className="floating-elements-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingElement />
        <OrbitControls /> {/* Allow user to orbit around the scene */}
      </Canvas>
    </div>
  );
};

export default FloatingElements;