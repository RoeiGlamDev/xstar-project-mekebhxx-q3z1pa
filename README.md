import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#FF7F50' }}>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        GlamCS is a high-end cosmetics website designed with elegance in mind. 
        The website features a luxurious orange and white color scheme, 
        complemented by stunning 3D designs and effects.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Responsive layout for all devices</li>
        <li>Luxurious 3D visuals and effects</li>
        <li>User-friendly navigation</li>
        <li>Product showcase with detailed descriptions</li>
      </ul>
      <h2>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS3</li>
        <li>3D Graphics Libraries</li>
      </ul>
      <h2>Installation</h2>
      <p>
        To get started with GlamCS, clone the repository and install the dependencies:
      </p>
      <pre>
        git clone https://github.com/yourusername/glamcs.git
        cd glamcs
        npm install
      </pre>
      <h2>Usage</h2>
      <p>
        Run the development server:
      </p>
      <pre>
        npm start
      </pre>
      <h2>Contributing</h2>
      <p>
        Contributions are welcome! Please fork the repository and submit a pull request.
      </p>
      <h2>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default README;