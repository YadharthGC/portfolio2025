import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../lib/data';
import { useTheme } from '../lib/theme';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-24 pb-24 text-center sm:px-6 sm:pt-32 sm:pb-28"
    >
      {/* Animated mesh gradient orbs — hidden on small screens for perf */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 hidden h-[500px] w-[500px] rounded-full blur-[120px] sm:block"
        style={{
          background: `radial-gradient(circle, rgba(var(--particle-primary),${isDark ? 0.12 : 0.08}) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-32 hidden h-[500px] w-[500px] rounded-full blur-[120px] sm:block"
        style={{
          background: `radial-gradient(circle, rgba(var(--particle-secondary),${isDark ? 0.12 : 0.08}) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[130px]"
        style={{
          background: `radial-gradient(circle, rgba(var(--particle-accent),${isDark ? 0.08 : 0.05}) 0%, transparent 70%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl"
      >
        {/* Status badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary sm:mb-8 sm:px-5 sm:py-2.5 sm:text-sm"
          style={{
            background: `rgba(var(--particle-primary), ${isDark ? 0.08 : 0.1})`,
            border: `1px solid rgba(var(--particle-primary), ${isDark ? 0.2 : 0.25})`,
          }}
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 sm:h-2.5 sm:w-2.5" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-2 text-sm font-medium tracking-wide uppercase sm:mb-3 sm:text-base lg:text-lg"
          style={{ color: 'var(--text-3)' }}
        >
          {personalInfo.name}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 text-[clamp(2.2rem,8vw,6rem)] leading-[1.1] font-extrabold tracking-tight sm:mb-6"
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
          className="mb-6 flex h-10 items-center justify-center gap-2 text-base font-medium sm:mb-8 sm:h-12 sm:gap-3 sm:text-2xl lg:text-3xl"
          style={{ color: 'var(--text-2)' }}
        >
          <span className="h-px w-8 bg-primary/40 hidden sm:block" />
          <span className="truncate">{typed}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block h-5 w-[2px] shrink-0 rounded-full bg-primary align-middle sm:h-8 sm:w-[3px]"
          />
          <span className="h-px w-8 bg-primary/40 hidden sm:block" />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed sm:mb-12 sm:text-lg"
          style={{ color: 'var(--text-2)' }}
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#contact"
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 sm:w-auto sm:py-4 sm:text-base"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <motion.a
            href="#projects"
            className="w-full rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg sm:w-auto sm:py-4 sm:text-base"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-1)',
              background: 'var(--surface)',
            }}
            whileHover={{
              borderColor: 'rgba(var(--particle-primary), 0.4)',
              backgroundColor: 'var(--surface-hover)',
            }}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4 sm:mt-14 sm:gap-5"
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
              whileHover={{
                scale: 1.15,
                y: -3,
                borderColor: 'rgba(var(--particle-primary), 0.4)',
                color: 'var(--color-primary)',
                boxShadow: '0 8px 30px rgba(var(--particle-primary), 0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                background: 'var(--surface)',
              }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 z-10 hidden sm:block"
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
