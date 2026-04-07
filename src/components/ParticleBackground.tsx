import { useEffect, useRef } from 'react';
import { useTheme } from '../lib/theme';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouse);

    const count = Math.min(100, Math.floor(window.innerWidth / 12));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = themeRef.current === 'dark';
      const mouse = mouseRef.current;

      // Draw floating gradient orbs (subtle, large)
      const time = Date.now() * 0.0003;
      const orbX1 = canvas.width * 0.3 + Math.sin(time) * 100;
      const orbY1 = canvas.height * 0.3 + Math.cos(time * 0.7) * 80;
      const orbX2 = canvas.width * 0.7 + Math.cos(time * 0.8) * 120;
      const orbY2 = canvas.height * 0.6 + Math.sin(time * 0.5) * 100;

      const orbAlpha = isDark ? 0.04 : 0.03;

      const grad1 = ctx.createRadialGradient(orbX1, orbY1, 0, orbX1, orbY1, 300);
      grad1.addColorStop(0, `rgba(6, 182, 212, ${orbAlpha})`);
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad2 = ctx.createRadialGradient(orbX2, orbY2, 0, orbX2, orbY2, 350);
      grad2.addColorStop(0, `rgba(139, 92, 246, ${orbAlpha})`);
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }

        // Dampen velocity
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.pulse += p.pulseSpeed;
        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        // Glow effect
        const pColor = isDark ? '6, 182, 212' : '6, 140, 180';
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(${pColor}, ${pulseOpacity})`);
        gradient.addColorStop(1, `rgba(${pColor}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pColor}, ${pulseOpacity})`;
        ctx.fill();
      }

      // Connections
      const connColor = isDark ? '139, 92, 246' : '120, 70, 220';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (isDark ? 0.1 : 0.06) * (1 - dist / 140);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${connColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{ opacity: 0.7 }}
    />
  );
}
