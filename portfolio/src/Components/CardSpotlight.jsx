import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/useSound';

export default function CardSpotlight({ children, className = '', tilt = true, onClick }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState('');
  const { themeConfig } = useTheme();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
      const rotateY = ((x - centerX) / centerX) * 5;
      setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, border-color 0.3s ease',
      }}
      className={`relative glass-card rounded-2xl overflow-hidden cursor-pointer group ${className}`}
    >
      {/* Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${themeConfig.glow}, transparent 80%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
