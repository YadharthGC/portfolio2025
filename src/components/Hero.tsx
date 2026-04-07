import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../lib/data';
import { useTheme } from '../lib/theme';

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Animated mesh gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(6,182,212,${isDark ? 0.12 : 0.08}) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(139,92,246,${isDark ? 0.12 : 0.08}) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-[130px]"
        style={{
          background: `radial-gradient(circle, rgba(99,102,241,${isDark ? 0.08 : 0.05}) 0%, transparent 70%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* Status badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
          style={{
            background: isDark ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.1)',
            border: `1px solid ${isDark ? 'rgba(6,182,212,0.2)' : 'rgba(6,182,212,0.25)'}`,
            color: '#06b6d4',
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-3 text-base font-medium tracking-wide uppercase sm:text-lg"
          style={{ color: 'var(--text-3)' }}
        >
          {personalInfo.name}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl lg:text-8xl"
          style={{ color: 'var(--text-1)' }}
        >
          I build things{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text glow-text">for the web</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex h-12 items-center justify-center gap-3 text-xl font-medium sm:text-2xl lg:text-3xl"
          style={{ color: 'var(--text-2)' }}
        >
          <span className="h-px w-8 bg-primary/40 hidden sm:block" />
          <span>{typed}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block h-7 w-[3px] rounded-full bg-primary align-middle sm:h-8"
          />
          <span className="h-px w-8 bg-primary/40 hidden sm:block" />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--text-2)' }}
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a
            href="#projects"
            className="rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              border: `1px solid var(--border)`,
              color: 'var(--text-1)',
              background: 'var(--surface)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
              e.currentTarget.style.background = 'var(--surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
          >
            View Work
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full p-4 transition-all duration-300"
              style={{
                border: `1px solid var(--border)`,
                color: 'var(--text-2)',
                background: 'var(--surface)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                e.currentTarget.style.color = '#06b6d4';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(6,182,212,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
          style={{ color: 'var(--text-3)' }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <FiChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
