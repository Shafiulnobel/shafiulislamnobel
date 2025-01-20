import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar/Navbar';
import { motion } from 'framer-motion';
import './Main.css';

const Main = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 24, // Adjust to center cursor
      y: mousePosition.y - 24,
    },
  };

  return (
    <div className='banner-container'>
      <Navbar />
      <Outlet />
      <hr />
      <Footer />
      <motion.div
        className='cursor'
        variants={variants}
        animate='default'
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </div>
  );
};

export default Main;
