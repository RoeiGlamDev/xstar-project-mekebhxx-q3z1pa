import * as THREE from 'three'; // Importing Three.js library

// Function to create a basic scene
const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background to white
    return scene;
};

// Function to create a camera
const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; // Position the camera
    return camera;
};

// Function to create a renderer
const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    return renderer;
};

// Function to create a 3D cube with luxury materials
const createCube = () => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
        color: 0xffa500, // Orange color
        metalness: 0.8,
        roughness: 0.2,
    });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
};

// Function to add lighting to the scene
const addLighting = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    const pointLight = new THREE.PointLight(0xffffff, 1); // Bright point light
    pointLight.position.set(10, 10, 10);
    scene.add(ambientLight);
    scene.add(pointLight);
};

// Exporting utility functions
export { createScene, createCamera, createRenderer, createCube, addLighting }; // Exporting functions for use in other components