'use client';

import { useEffect, useRef } from 'react';

interface StageGlobeCanvasProps {
  className?: string;
}

interface Arc {
  startLat: number;
  startLon: number;
  endLat: number;
  endLon: number;
  progress: number;
  speed: number;
  color: string;
}

interface Hub {
  lat: number;
  lon: number;
  label: string;
  size: number;
  pulsePhase: number;
  isHQ?: boolean;
}

interface ClickSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

// Global continent detection helper to generate realistic Earth point cloud
function isLand(lat: number, lon: number): boolean {
  // North America
  if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) {
    if (lat < 30 && lon < -105) return false; // Gulf of California / Pacific
    if (lat < 25 && lon > -80) return false;
    if (lat > 55 && lon > -82 && lon < -60) return false; // Hudson Bay
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) {
    if (lat < -20 && lon > -45) return false;
    if (lat > -5 && lon < -75) return false;
    if (lat < -42 && lon > -62) return false;
    return true;
  }
  // Europe
  if (lat >= 36 && lat <= 71 && lon >= -10 && lon <= 45) {
    if (lat < 42 && lon > 20 && lon < 30) return false;
    return true;
  }
  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) {
    if (lat > 15 && lon > 35) return false; // Red Sea
    if (lat < 5 && lon < -5) return false; // Gulf of Guinea cut
    return true;
  }
  // Asia
  if (lat >= 5 && lat <= 75 && lon >= 45 && lon <= 150) {
    if (lat < 10 && lon < 95) return false;
    if (lat < 25 && lon < 60) return lon > 45; // Arabian Peninsula
    return true;
  }
  // Indian Subcontinent
  if (lat >= 6 && lat <= 35 && lon >= 68 && lon <= 90) return true;
  // Australia
  if (lat >= -44 && lat <= -10 && lon >= 113 && lon <= 154) return true;
  // Japan
  if (lat >= 31 && lat <= 45 && lon >= 130 && lon <= 145) return true;
  // UK & Ireland
  if (lat >= 50 && lat <= 59 && lon >= -10 && lon <= 2) return true;
  // New Zealand
  if (lat >= -47 && lat <= -34 && lon >= 166 && lon <= 178) return true;
  // Southeast Asia Archipelago
  if (lat >= -8 && lat <= 12 && lon >= 95 && lon <= 125) return true;
  return false;
}

export default function StageGlobeCanvas({ className = '' }: StageGlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 560);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse Tracking with smooth spring damping
    const mouse = {
      targetX: width / 2,
      targetY: height / 2,
      currentX: width / 2,
      currentY: height / 2,
      isActive: false,
    };

    // 3D Rotation Physics
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velocityY = 0;
    let velocityX = 0;
    let rotY = 0.55;
    let rotX = 0.22;
    const autoRotateSpeed = 0.0032;

    // Sized for grand, commanding presence with ample margin to avoid edge clipping
    let globeRadius = Math.min(width, height) * 0.32;
    if (globeRadius > 185) globeRadius = 185;
    if (globeRadius < 110) globeRadius = 110;

    // High-Resolution Earth Continent Point Matrix (~2,400 land dots)
    const landDots: { lat: number; lon: number }[] = [];
    for (let lat = -58; lat <= 70; lat += 2.8) {
      for (let lon = -180; lon <= 180; lon += 3.2) {
        if (isLand(lat, lon)) {
          landDots.push({ lat, lon });
        }
      }
    }

    // Key International Business Hubs
    const hubs: Hub[] = [
      { lat: 39.7, lon: -75.5, label: 'Delaware HQ', size: 5.5, pulsePhase: 0, isHQ: true },
      { lat: 40.7, lon: -74.0, label: 'New York', size: 4.2, pulsePhase: 1 },
      { lat: 37.7, lon: -122.4, label: 'San Francisco', size: 4.2, pulsePhase: 2 },
      { lat: 51.5, lon: -0.1, label: 'London', size: 4.5, pulsePhase: 3 },
      { lat: 12.9, lon: 77.6, label: 'Bangalore', size: 5.0, pulsePhase: 1.5 },
      { lat: 19.0, lon: 72.8, label: 'Mumbai', size: 4.5, pulsePhase: 2.5 },
      { lat: 1.3, lon: 103.8, label: 'Singapore', size: 4.3, pulsePhase: 4 },
      { lat: 25.2, lon: 55.3, label: 'Dubai', size: 4.0, pulsePhase: 3.2 },
      { lat: 35.6, lon: 139.7, label: 'Tokyo', size: 4.2, pulsePhase: 5 },
      { lat: -33.8, lon: 151.2, label: 'Sydney', size: 3.8, pulsePhase: 4.5 },
      { lat: 43.6, lon: -79.3, label: 'Toronto', size: 3.8, pulsePhase: 2.2 },
    ];

    // High-Energy Connectivity Trajectories (Delaware HQ to International Delivery Hubs)
    const arcs: Arc[] = [
      { startLat: 39.7, startLon: -75.5, endLat: 12.9, endLon: 77.6, progress: 0.1, speed: 0.0075, color: '#00F0FF' },
      { startLat: 39.7, startLon: -75.5, endLat: 19.0, endLon: 72.8, progress: 0.45, speed: 0.0065, color: '#38BDF8' },
      { startLat: 40.7, startLon: -74.0, endLat: 51.5, endLon: -0.1, progress: 0.7, speed: 0.0085, color: '#FFFFFF' },
      { startLat: 51.5, startLon: -0.1, endLat: 12.9, endLon: 77.6, progress: 0.3, speed: 0.007, color: '#00F0FF' },
      { startLat: 37.7, startLon: -122.4, endLat: 39.7, endLon: -75.5, progress: 0.8, speed: 0.0095, color: '#38BDF8' },
      { startLat: 12.9, startLon: 77.6, endLat: 1.3, endLon: 103.8, progress: 0.2, speed: 0.008, color: '#60A5FA' },
      { startLat: 39.7, startLon: -75.5, endLat: 35.6, endLon: 139.7, progress: 0.55, speed: 0.006, color: '#FFFFFF' },
    ];

    // Click Sparks & Shockwave Pulses
    const sparks: ClickSpark[] = [];
    const shockwaves: { x: number; y: number; r: number; maxR: number; alpha: number }[] = [];

    // Pointer Event Handlers for 360° Drag & Inertia
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea')) return;

      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velocityY = 0;
      velocityX = 0;

      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;

      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        rotY += deltaX * 0.0055;
        rotX += deltaY * 0.0045;
        rotX = Math.max(-0.85, Math.min(0.85, rotX));

        velocityY = deltaX * 0.0035;
        velocityX = deltaY * 0.0035;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea')) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.push({
        x: clickX,
        y: clickY,
        r: 8,
        maxR: globeRadius * 1.35,
        alpha: 0.9,
      });

      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 4.2 + 2;
        sparks.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          size: Math.random() * 2.2 + 1,
          color: i % 2 === 0 ? '#38BDF8' : '#00F0FF',
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      globeRadius = Math.min(width, height) * 0.32;
      if (globeRadius > 185) globeRadius = 185;
      if (globeRadius < 110) globeRadius = 110;
    };

    const parent = canvas.parentElement;
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (parent) {
      parent.addEventListener('pointerdown', handlePointerDown);
      parent.addEventListener('click', handleClick);
      parent.addEventListener('mouseleave', handleMouseLeave);
      resizeObserver.observe(parent);
    }
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('resize', handleResize, { passive: true });

    // 3D coordinate projection with rotation
    const project = (latDeg: number, lonDeg: number, alt: number = 0, currentRotX: number, currentRotY: number, offsetY: number = 0) => {
      const lat = (latDeg * Math.PI) / 180;
      const lon = (lonDeg * Math.PI) / 180 + currentRotY;
      const r = globeRadius * (1 + alt);

      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const cosLon = Math.cos(lon);
      const sinLon = Math.sin(lon);

      const x = r * cosLat * sinLon;
      const y = -r * sinLat;
      const z = r * cosLat * cosLon;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      const cameraDistance = 900;
      const scale = cameraDistance / (cameraDistance + z1);
      const centerX = width / 2;
      const centerY = height / 2 + offsetY;

      const normX = x / r;
      const normY = y1 / r;
      const normZ = z1 / r;

      return {
        x: centerX + x * scale,
        y: centerY + y1 * scale,
        z: z1,
        normX,
        normY,
        normZ,
        visible: z1 > -globeRadius * 0.25,
        scale,
      };
    };

    let time = 0;

    // 60FPS High-Performance Animation Loop
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.08;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.08;

      // Physics momentum & ambient auto-rotation
      if (!isDragging) {
        rotY += velocityY;
        rotX += velocityX;
        rotX = Math.max(-0.85, Math.min(0.85, rotX));
        velocityY *= 0.94;
        velocityX *= 0.94;

        if (Math.abs(velocityY) < 0.0008) {
          const mouseOffsetX = (mouse.currentX - width / 2) / (width / 2);
          const mouseOffsetY = (mouse.currentY - height / 2) / (height / 2);
          rotY += autoRotateSpeed + mouseOffsetX * 0.001;
          rotX += (0.22 + mouseOffsetY * 0.16 - rotX) * 0.03;
        }
      }

      // Harmonic Floating Levitation
      const levitationY = Math.sin(time * 0.028) * 10;
      const centerX = width / 2;
      const centerY = height / 2 + levitationY;

      // 1. Ambient Circular Backdrop Glow (Seamlessly blended, zero rectangular edges)
      const spotGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.2,
        centerX,
        centerY,
        globeRadius * 1.38
      );
      spotGrad.addColorStop(0, 'rgba(0, 240, 255, 0.16)');
      spotGrad.addColorStop(0.45, 'rgba(37, 99, 235, 0.12)');
      spotGrad.addColorStop(1, 'rgba(2, 7, 18, 0)');
      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.38, 0, Math.PI * 2);
      ctx.fill();

      // 2. High-Impact Volumetric Sphere Atmosphere Core
      // Midnight cyber navy core transitioning to electric cyan / royal blue rim
      const globeBody = ctx.createRadialGradient(
        centerX - globeRadius * 0.28,
        centerY - globeRadius * 0.28,
        globeRadius * 0.12,
        centerX,
        centerY,
        globeRadius
      );
      globeBody.addColorStop(0, '#0D274D');
      globeBody.addColorStop(0.55, '#06162E');
      globeBody.addColorStop(0.85, '#020B18');
      globeBody.addColorStop(0.96, 'rgba(37, 99, 235, 0.45)');
      globeBody.addColorStop(1, 'rgba(0, 240, 255, 0.85)');
      ctx.fillStyle = globeBody;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Outer Corona Atmospheric Rim Glow
      const corona = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.92,
        centerX,
        centerY,
        globeRadius * 1.24
      );
      corona.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
      corona.addColorStop(0.4, 'rgba(56, 189, 248, 0.15)');
      corona.addColorStop(0.8, 'rgba(37, 99, 235, 0.08)');
      corona.addColorStop(1, 'rgba(2, 7, 18, 0)');
      ctx.fillStyle = corona;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.24, 0, Math.PI * 2);
      ctx.fill();

      // 3. Click Shockwave Ripples
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.r += 5;
        sw.alpha *= 0.94;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${sw.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        if (sw.r >= sw.maxR || sw.alpha < 0.01) {
          shockwaves.splice(i, 1);
        }
      }

      // 4. Spark Particle Glints
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.95;
        sp.vy *= 0.95;
        sp.alpha *= 0.93;

        ctx.save();
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (sp.alpha < 0.02) {
          sparks.splice(i, 1);
        }
      }

      // 5. Kinetic Concentric Orbital Celestial Rings with Traveling Beads
      const rings = [
        {
          radius: globeRadius * 1.18,
          rX: rotX + 0.32,
          rY: rotY * 1.15 + time * 0.008,
          color: '#00F0FF',
          width: 1.4,
          beadProgress: (time * 0.005) % 1,
        },
        {
          radius: globeRadius * 1.28,
          rX: rotX - 0.38,
          rY: -rotY * 0.85 + time * 0.006,
          color: '#38BDF8',
          width: 1.2,
          beadProgress: (time * 0.004 + 0.5) % 1,
        },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.beginPath();
        const steps = 72;
        let first = true;
        let beadX = 0;
        let beadY = 0;
        let beadZ = 0;

        for (let i = 0; i <= steps; i++) {
          const theta = (Math.PI * 2 * i) / steps;
          const cosY = Math.cos(ring.rY);
          const sinY = Math.sin(ring.rY);
          const x1 = Math.cos(theta) * ring.radius * cosY;
          const z1 = -Math.cos(theta) * ring.radius * sinY;

          const cosX = Math.cos(ring.rX);
          const sinX = Math.sin(ring.rX);
          const y2 = -z1 * sinX;
          const z2 = z1 * cosX;

          const cameraDistance = 900;
          const scale = cameraDistance / (cameraDistance + z2);
          const screenX = centerX + x1 * scale;
          const screenY = centerY + y2 * scale;

          if (first) {
            ctx.moveTo(screenX, screenY);
            first = false;
          } else {
            ctx.lineTo(screenX, screenY);
          }

          // Track bead position along ring
          const stepFrac = i / steps;
          if (Math.abs(stepFrac - ring.beadProgress) < 1 / steps) {
            beadX = screenX;
            beadY = screenY;
            beadZ = z2;
          }
        }
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.32)';
        ctx.lineWidth = ring.width;
        ctx.stroke();

        // Draw traveling orbital satellite bead
        if (beadX && beadY && beadZ > -globeRadius * 0.2) {
          ctx.beginPath();
          ctx.arc(beadX, beadY, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = ring.color;
          ctx.shadowColor = ring.color;
          ctx.shadowBlur = 10;
          ctx.fill();
        }
        ctx.restore();
      });

      // 6. Architectural Latitude Lines (Parallels)
      const latSteps = [-60, -40, -20, 0, 20, 40, 60];
      latSteps.forEach((latDeg) => {
        ctx.save();
        ctx.beginPath();
        let first = true;

        for (let lonDeg = -180; lonDeg <= 180; lonDeg += 5) {
          const p = project(latDeg, lonDeg, 0, rotX, rotY, levitationY);
          if (p.visible) {
            const depthAlpha = Math.max(0.08, Math.min(0.38, (p.z + globeRadius) / (2 * globeRadius)));
            ctx.strokeStyle =
              latDeg === 0
                ? `rgba(0, 240, 255, ${depthAlpha * 1.8})`
                : `rgba(56, 189, 248, ${depthAlpha * 0.85})`;
            ctx.lineWidth = latDeg === 0 ? 1.5 : 0.8;

            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // 7. Architectural Longitude Lines (Meridians)
      for (let lonDeg = -180; lonDeg < 180; lonDeg += 30) {
        ctx.save();
        ctx.beginPath();
        let first = true;

        for (let latDeg = -85; latDeg <= 85; latDeg += 5) {
          const p = project(latDeg, lonDeg, 0, rotX, rotY, levitationY);
          if (p.visible) {
            const depthAlpha = Math.max(0.08, Math.min(0.32, (p.z + globeRadius) / (2 * globeRadius)));
            ctx.strokeStyle = `rgba(56, 189, 248, ${depthAlpha * 0.85})`;
            ctx.lineWidth = 0.8;

            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
        ctx.restore();
      }

      // 8. Radiant High-Res Earth Continents Point Matrix
      // Uses 3D lighting + Fresnel rim glow + interactive cursor flaring
      for (let i = 0; i < landDots.length; i++) {
        const dot = landDots[i];
        const p = project(dot.lat, dot.lon, 0, rotX, rotY, levitationY);

        if (p.visible && p.z > -globeRadius * 0.18) {
          const depthFactor = (p.z + globeRadius) / (2 * globeRadius);
          
          // Spherical rim lighting (Fresnel effect) - edges catch brilliant illumination
          const rim = Math.pow(1 - Math.abs(p.normZ), 2.2);
          
          // Distance to interactive mouse cursor
          const distToCursor = Math.hypot(p.x - mouse.currentX, p.y - mouse.currentY);
          const isNearCursor = distToCursor < 85;

          let dotRadius = (1.6 + depthFactor * 1.0) * p.scale;
          let alpha = Math.max(0.22, depthFactor * 0.75 + rim * 0.45);
          let color = depthFactor > 0.65 ? '#FFFFFF' : depthFactor > 0.35 ? '#38BDF8' : '#0284C7';

          if (isNearCursor) {
            const proximity = 1 - distToCursor / 85;
            dotRadius = (1.8 + proximity * 2.8) * p.scale;
            alpha = Math.min(1, alpha + proximity * 0.55);
            color = '#00F0FF';
          }

          ctx.fillStyle = color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // 9. Curved Data Trajectories & Traveling Photons (Delaware HQ -> Global Network)
      arcs.forEach((arc) => {
        arc.progress += arc.speed;
        if (arc.progress > 1) arc.progress = 0;

        ctx.save();
        ctx.beginPath();
        let first = true;

        const numSteps = 32;
        for (let step = 0; step <= numSteps; step++) {
          const t = step / numSteps;
          const curLat = arc.startLat + (arc.endLat - arc.startLat) * t;
          const curLon = arc.startLon + (arc.endLon - arc.startLon) * t;
          const altitude = Math.sin(t * Math.PI) * 0.18;

          const p = project(curLat, curLon, altitude, rotX, rotY, levitationY);
          if (p.visible) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
        ctx.lineWidth = 1.35;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Traveling Light Packet
        const pLat = arc.startLat + (arc.endLat - arc.startLat) * arc.progress;
        const pLon = arc.startLon + (arc.endLon - arc.startLon) * arc.progress;
        const pAlt = Math.sin(arc.progress * Math.PI) * 0.18;
        const photon = project(pLat, pLon, pAlt, rotX, rotY, levitationY);

        if (photon.visible) {
          ctx.save();
          ctx.shadowColor = arc.color;
          ctx.shadowBlur = 14;
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(photon.x, photon.y, 3.2 * photon.scale, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = arc.color;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(photon.x, photon.y, 6.5 * photon.scale, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      });

      // 10. Global Hub Markers
      for (let i = 0; i < hubs.length; i++) {
        const hub = hubs[i];
        hub.pulsePhase += 0.04;
        const p = project(hub.lat, hub.lon, 0, rotX, rotY, levitationY);

        if (p.visible && p.z > -globeRadius * 0.1) {
          const depthFactor = (p.z + globeRadius) / (2 * globeRadius);
          const pulse = (Math.sin(hub.pulsePhase) + 1) * 0.5;

          const distToMouse = Math.hypot(p.x - mouse.currentX, p.y - mouse.currentY);
          const isHovered = distToMouse < 28;

          ctx.save();
          // Animated Pulse Halo
          ctx.beginPath();
          const haloRadius = isHovered ? (hub.size + pulse * 14) * p.scale : (hub.size + pulse * 8) * p.scale;
          ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
          ctx.strokeStyle = hub.isHQ
            ? `rgba(0, 240, 255, ${(1 - pulse) * 0.95 * depthFactor})`
            : isHovered
            ? `rgba(255, 255, 255, ${0.95 * depthFactor})`
            : `rgba(56, 189, 248, ${(1 - pulse) * 0.85 * depthFactor})`;
          ctx.lineWidth = isHovered ? 2.2 : 1.5;
          ctx.stroke();

          // Center Solid Core Node
          ctx.beginPath();
          const coreRadius = isHovered ? hub.size * 1.2 * p.scale : hub.size * 0.8 * p.scale;
          ctx.arc(p.x, p.y, coreRadius, 0, Math.PI * 2);
          ctx.fillStyle = hub.isHQ ? '#00F0FF' : isHovered ? '#FFFFFF' : '#38BDF8';
          ctx.shadowColor = hub.isHQ ? '#00F0FF' : '#2563EB';
          ctx.shadowBlur = isHovered ? 18 : 12;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('pointerdown', handlePointerDown);
        parent.removeEventListener('click', handleClick);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-[1] ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
