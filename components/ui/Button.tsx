import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: orange; // Button background color
  color: white; // Button text color
  border: none; // No border
  border-radius: 8px; // Rounded corners
  padding: 12px 24px; // Padding for the button
  font-size: 16px; // Font size
  font-weight: bold; // Bold text
  cursor: pointer; // Pointer cursor on hover
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow effect
  transition: transform 0.2s, box-shadow 0.2s; // Smooth transition for effects

  &:hover {
    transform: translateY(-2px); // Lift effect on hover
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Enhanced shadow on hover
  }

  &:active {
    transform: translateY(0); // Reset lift effect on click
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Original shadow on click
  }
`;

interface ButtonProps {
  onClick: () => void; // Click handler
  children: React.ReactNode; // Button content
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>; // Render button
};

export default Button; // Default export of Button component