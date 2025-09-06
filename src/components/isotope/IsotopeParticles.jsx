import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IsotopeParticles = ({ 
  count = 30, 
  color = '#3B82F6', 
  opacity = 0.3,
  size = 'mixed',
  speed = 'medium',
  shape = 'circle',
  className = '',
  glowEffect = true,
  trailEffect = false,
  magneticEffect = false
}) => {
  const [particles, setParticles] = useState([]);

  const speedSettings = {
    slow: { min: 20, max: 30 },
    medium: { min: 15, max: 25 },
    fast: { min: 10, max: 20 }
  };

  const sizeSettings = {
    small: { min: 2, max: 4 },
    medium: { min: 4, max: 8 },
    large: { min: 8, max: 12 },
    mixed: { min: 2, max: 10 }
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
        particle.direction * -40, 
        particle.direction * -20, 
        0
      ],
      x: [
        0, 
        particle.direction * 25, 
        particle.direction * -15, 
        0
      ],
      rotate: [0, particle.rotationSpeed, particle.rotationSpeed * 1.5],
      opacity: [
        opacity * 0.2, 
        opacity * particle.glowIntensity, 
        opacity * 0.6, 
        opacity * 0.2
      ],
      scale: [
        0.6, 
        1.4 * particle.morphIntensity, 
        0.9, 
        0.6
      ],
      filter: glowEffect ? [
        `drop-shadow(0 0 ${particle.size * 0.5}px ${color})`,
        `drop-shadow(0 0 ${particle.size}px ${color})`,
        `drop-shadow(0 0 ${particle.size * 0.7}px ${color})`,
        `drop-shadow(0 0 ${particle.size * 0.5}px ${color})`
      ] : ['none', 'none', 'none', 'none'],
      transition: {
        duration: particle.duration,
        repeat: Infinity,
        ease: "easeInOut",
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