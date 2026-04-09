import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../lib/data';
import { useTheme } from '../lib/theme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const rafId = useRef(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        const sections = navLinks.map((l) => l.href.slice(1));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(sections[i]);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: `0 4px 30px ${isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.06)'}` } : {}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#hero" className="group flex items-center gap-1.5 text-lg font-bold tracking-tight sm:text-xl">
          <span className="gradient-text">Yadharth</span>
          <span style={{ color: 'var(--text-3)' }} className="text-sm font-normal hidden sm:inline">GC</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={`${import.meta.env.BASE_URL}Hari_Yadharth_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile: Resume button + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`${import.meta.env.BASE_URL}Hari_Yadharth_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/40 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary/10"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5"
              style={{ background: 'var(--text-1)' }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5"
              style={{ background: 'var(--text-1)' }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5"
              style={{ background: 'var(--text-1)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors active:bg-primary/10 hover:text-primary"
                  style={{ color: 'var(--text-2)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
