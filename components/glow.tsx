'use client'
import React, { useEffect } from 'react';

const GlowEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const light = document.getElementById('light');
      if (light) {
        light.style.left = `${event.pageX}px`;
        light.style.top = `${event.pageY}px`;
        light.style.transform = 'translate(-50%, -50%)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="light" className="light"></div>;
};

export default GlowEffect;
