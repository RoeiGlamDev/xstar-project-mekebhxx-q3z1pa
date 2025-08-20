import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true, // Enables React strict mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    optimizeCss: true, // Optimize CSS for better performance
    scrollRestoration: true, // Enable scroll restoration
  },
  webpack: (config) => {
    // Custom webpack configuration
    config.module.rules.push({
      test: /\.glb$/, // Load 3D models
      use: 'file-loader',
    });
    return config;
  },
  i18n: {
    locales: ['en-US', 'fr'], // Add your locales here
    defaultLocale: 'en-US',
  },
});