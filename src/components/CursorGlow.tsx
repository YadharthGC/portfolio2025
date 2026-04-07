import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../lib/theme';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] h-5 w-5 rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle, rgba(6,182,212,${isDark ? 0.8 : 0.5}) 0%, transparent 70%)`,
        }}
        animate={{ x: pos.x - 10, y: pos.y - 10 }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] h-44 w-44 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(139,92,246,${isDark ? 0.1 : 0.05}) 0%, rgba(6,182,212,${isDark ? 0.05 : 0.02}) 40%, transparent 70%)`,
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
        animate={{ x: pos.x - 88, y: pos.y - 88 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
      />
    </>
  );
}
