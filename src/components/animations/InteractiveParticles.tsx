'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

interface InteractiveParticlesProps {
  particleCount?: number;
  maxDistance?: number;
  mouseRadius?: number;
  className?: string;
  density?: 'low' | 'medium' | 'high';
  theme?: 'dark' | 'light';
}

export default function InteractiveParticles({
  maxDistance = 125,
  mouseRadius = 160,
  className = '',
  density = 'medium',
  theme = 'dark',
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Support device pixel ratio for crisp rendering
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: mouseRadius,
    };

    // Calculate particle count based on density and screen size
    const baseCount =
      density === 'low' ? 30 : density === 'high' ? 80 : 55;
    const isMobile = width < 768;
    const count = isMobile ? Math.floor(baseCount * 0.5) : baseCount;

    // Palette: customized for dark vs light themes
    const darkColors = [
      '#C9A44C', // Gold
      '#D4B56A', // Gold light
      '#FFFFFF', // White
      'rgba(201, 164, 76, 0.85)',
      'rgba(255, 255, 255, 0.75)',
    ];

    const lightColors = [
      '#C9A44C', // Gold
      '#B8933B', // Gold dark
      '#0B1F3A', // Corporate Navy
      'rgba(11, 31, 58, 0.45)', // Translucent Navy
      'rgba(201, 164, 76, 0.65)', // Translucent Gold
    ];

    const colors = theme === 'light' ? lightColors : darkColors;

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 2 + 1.2;
      const baseAlpha =
        theme === 'light'
          ? Math.random() * 0.35 + 0.2
          : Math.random() * 0.5 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius,
        baseAlpha,
        alpha: baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Interactive shockwave burst on click
    const ripples: { x: number; y: number; r: number; maxR: number; alpha: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripples.push({
        x: clickX,
        y: clickY,
        r: 5,
        maxR: 120,
        alpha: theme === 'light' ? 0.5 : 0.8,
      });

      // Scatter nearby particles outward
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 0) {
          const force = (140 - dist) / 140;
          p.vx += (dx / dist) * force * 4;
          p.vy += (dy / dist) * force * 4;
        }
      });
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      parent.addEventListener('click', handleClick, { passive: true });
    }
    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.r += 3.5;
        ripple.alpha *= 0.94;

        ctx.save();
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
        ctx.strokeStyle =
          theme === 'light'
            ? `rgba(201, 164, 76, ${ripple.alpha})`
            : `rgba(201, 164, 76, ${ripple.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        if (ripple.r >= ripple.maxR || ripple.alpha < 0.02) {
          ripples.splice(i, 1);
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Dampen velocity back to normal
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (Math.abs(p.vx) < 0.25) p.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(p.vy) < 0.25) p.vy += (Math.random() - 0.5) * 0.08;

        // Boundary bounce
        if (p.x < 0) {
          p.x = 0;
          p.vx = -p.vx;
        } else if (p.x > width) {
          p.x = width;
          p.vx = -p.vx;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = -p.vy;
        } else if (p.y > height) {
          p.y = height;
          p.vy = -p.vy;
        }

        // Mouse interaction (repel gently and brighten)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Draw interactive connector to mouse cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle =
              theme === 'light'
                ? `rgba(201, 164, 76, ${force * 0.4})`
                : `rgba(201, 164, 76, ${force * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Subtle gentle pull / repulsion
            p.vx -= (dx / dist) * force * 0.6;
            p.vy -= (dy / dist) * force * 0.6;
            p.alpha = Math.min(
              theme === 'light' ? 0.75 : 1,
              p.baseAlpha + force * 0.5
            );
          } else {
            p.alpha = p.baseAlpha;
          }
        }

        // Draw particle node with soft glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = theme === 'light' ? 'rgba(201, 164, 76, 0.4)' : '#C9A44C';
        ctx.shadowBlur = theme === 'light' ? 4 : 8;
        ctx.fill();
        ctx.restore();

        // Connect with nearby particles (Constellation Network)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha =
              theme === 'light'
                ? (1 - dist / maxDistance) * 0.16
                : (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle =
              theme === 'light'
                ? `rgba(201, 164, 76, ${lineAlpha})`
                : `rgba(201, 164, 76, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
        parent.removeEventListener('click', handleClick);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [density, maxDistance, mouseRadius, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-[1] ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
