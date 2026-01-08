import { useEffect, useRef } from 'react';

/**
 * Custom hook to add liquid glass hover effect to elements
 * Adds dynamic specular highlights that follow the mouse cursor
 */
const useLiquidGlassHover = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Find the specular layer
      const specular = element.querySelector('.liquid-glass-specular');
      if (specular) {
        // Create radial gradient that follows the mouse
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.1) 25%,
          rgba(255, 255, 255, 0.05) 40%,
          rgba(255, 255, 255, 0) 60%
        )`;
      }
    };

    const handleMouseLeave = () => {
      const specular = element.querySelector('.liquid-glass-specular');
      if (specular) {
        specular.style.background = 'none';
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
};

export default useLiquidGlassHover;
