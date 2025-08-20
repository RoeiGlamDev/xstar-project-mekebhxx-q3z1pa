import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    id: 'fade-in',
    name: 'Fade In',
    duration: 300, // Duration in milliseconds
    effect: 'opacity: 0; transform: translateY(20px);', // Initial state
    transition: 'opacity 300ms ease-in, transform 300ms ease-in', // Transition effect
  },
  {
    id: 'slide-up',
    name: 'Slide Up',
    duration: 500,
    effect: 'transform: translateY(100%);', // Initial state
    transition: 'transform 500ms ease-out', // Transition effect
  },
  {
    id: 'scale-up',
    name: 'Scale Up',
    duration: 400,
    effect: 'transform: scale(0);', // Initial state
    transition: 'transform 400ms ease-in-out', // Transition effect
  },
  {
    id: 'rotate',
    name: 'Rotate',
    duration: 600,
    effect: 'transform: rotate(0deg);', // Initial state
    transition: 'transform 600ms ease-in', // Transition effect
  },
];

export default animationTypes; // Exporting the animationTypes array as default