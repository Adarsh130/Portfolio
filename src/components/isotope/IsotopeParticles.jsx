import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IsotopeParticles = ({ 
  count = 15, // Reduced from 30 for better performance
  color = '#3B82F6', 
  opacity = 0.3,
  size = 'mixed',
  speed = 'medium',
  shape = 'circle',
  className = '',
  glowEffect = false, // Disabled by default for performance
  trailEffect = false,
  magneticEffect = false
}) => {
  const [particles, setParticles] = useState([]);

  const speedSettings = {
    slow: { min: 25, max: 35 },
    medium: { min: 20, max: 30 },
    fast: { min: 15, max: 25 }
  };

  const sizeSettings = {
    small: { min: 2, max: 4 },
    medium: { min: 4, max: 8 },
    large: { min: 8, max: 12 },
    mixed: { min: 2, max: 8 }
  };

  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-sm',
    diamond: 'rotate-45',
    hexagon: 'hexagon'
  };

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (sizeSettings[size].max - sizeSettings[size].min) + sizeSettings[size].min,
          duration: Math.random() * (speedSettings[speed].max - speedSettings[speed].min) + speedSettings[speed].min,
          delay: Math.random() * 8,
          direction: Math.random() > 0.5 ? 1 : -1,
          rotationSpeed: Math.random() * 360 + 180,
          glowIntensity: Math.random() * 0.8 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
          orbitRadius: Math.random() * 50 + 20,
          orbitSpeed: Math.random() * 0.02 + 0.01,
          morphIntensity: Math.random() * 0.5 + 0.5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [count, size, speed]);

  const particleVariants = {
    animate: (particle) => ({
      y: [
        0, 
        particle.direction * -25, 
        0
      ],
      x: [
        0, 
        particle.direction * 15, 
        0
      ],
      opacity: [
        opacity * 0.4, 
        opacity * 0.8, 
        opacity * 0.4
      ],
      scale: [
        0.8, 
        1.2, 
        0.8
      ],
      transition: {
        duration: particle.duration,
        repeat: Infinity,
        ease: "linear",
        delay: particle.delay,
        times: [0, 0.3, 0.7, 1]
      }
    }),
    orbit: (particle) => ({
      x: [
        Math.cos(particle.pulsePhase) * particle.orbitRadius,
        Math.cos(particle.pulsePhase + Math.PI) * particle.orbitRadius
      ],
      y: [
        Math.sin(particle.pulsePhase) * particle.orbitRadius * 0.6,
        Math.sin(particle.pulsePhase + Math.PI) * particle.orbitRadius * 0.6
      ],
      transition: {
        duration: particle.duration * 2,
        repeat: Infinity,
        ease: "linear"
      }
    })
  };

  const getShapeClasses = (shape) => {
    switch (shape) {
      case 'hexagon':
        return 'hexagon-shape';
      case 'diamond':
        return 'rotate-45';
      case 'square':
        return 'rounded-sm';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none isotope-particles ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute isotope-particle ${getShapeClasses(shape)}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: opacity,
            willChange: "transform, opacity"
          }}
          variants={particleVariants}
          animate={magneticEffect ? ["animate", "orbit"] : "animate"}
          custom={particle}
        />
      ))}
      
      {/* CSS for hexagon shape */}
      <style>{`
        .hexagon-shape {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
};

export default IsotopeParticles;