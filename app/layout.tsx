import React from 'react';
import './globals.css'; // Import global styles
import { Inter } from 'next/font/google'; // Import font
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

const inter = Inter({ subsets: ['latin'] }); // Configure font

export const metadata = {
  title: 'GlamCS - Luxury Cosmetics',
  description: 'Elevate your beauty with GlamCS',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-orange-600">
        <Header /> {/* Render Header */}
        <main className="min-h-screen p-4">{children}</main> {/* Render children */}
        <Footer /> {/* Render Footer */}
      </body>
    </html>
  );
};

export default Layout;