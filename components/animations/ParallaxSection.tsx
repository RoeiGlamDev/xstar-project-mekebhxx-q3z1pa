import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh; // Full viewport height
  overflow: hidden;
  background-color: white; // Background color
`;

const ParallaxLayer = styled.div<{ speed: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateZ(0);
  will-change: transform;
  background: url('/path/to/your/image.jpg') no-repeat center center;
  background-size: cover;
  transform: translateY(${props => props.speed}px); // Parallax effect
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: orange; // Text color
  text-align: center;
  padding: 20px;
`;

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxContainer>
      <ParallaxLayer speed={-20} /> {/* Background layer */}
      <ParallaxLayer speed={-10} /> {/* Middle layer */}
      <Content>
        <h1>Welcome to GlamCS</h1>
        <p>Elevate your beauty with our luxurious cosmetics.</p>
      </Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;