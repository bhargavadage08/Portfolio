import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const { bgMode, themeConfig } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = { x: width / 2, y: height / 2, radius: 150 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- NEURAL CONSTELLATION ---
    const particles = Array.from({ length: Math.min(Math.floor(width / 18), 70) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
    }));

    // --- MATRIX DIGITAL RAIN ---
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[];:=+*#@';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    // --- GRID WAVE ---
    let gridOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (bgMode === 'neural') {
        // Draw particles & links
        ctx.fillStyle = themeConfig.accent;
        ctx.strokeStyle = themeConfig.accent;

        particles.forEach((p, idx) => {
          // Update position
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse attraction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.globalAlpha = 0.6;
          ctx.fill();

          // Connect nearby particles
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pdx = p.x - p2.x;
            const pdy = p.y - p2.y;
            const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

            if (pdist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.globalAlpha = (1 - pdist / 120) * 0.25;
              ctx.stroke();
            }
          }
        });
      } else if (bgMode === 'matrix') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = themeConfig.accent;
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
          const char = characters[Math.floor(Math.random() * characters.length)];
          const x = i * fontSize;

          ctx.globalAlpha = Math.random() * 0.7 + 0.3;
          ctx.fillText(char, x, y * fontSize);

          if (y * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        });
      } else if (bgMode === 'grid') {
        gridOffset = (gridOffset + 0.5) % 40;
        ctx.strokeStyle = themeConfig.accent;
        ctx.lineWidth = 1;

        // Vertical perspective lines
        const horizon = height * 0.4;
        const numLines = 30;
        ctx.globalAlpha = 0.15;

        for (let i = 0; i <= numLines; i++) {
          const x = (width / numLines) * i;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        // Horizontal moving lines
        for (let y = gridOffset; y < height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.globalAlpha = (y / height) * 0.2;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [bgMode, themeConfig]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
}
