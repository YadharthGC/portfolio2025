import { personalInfo } from '../lib/data';

export default function Footer() {
  return (
    <footer className="py-8 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <span style={{ color: 'var(--text-3)' }}>
          &copy; {new Date().getFullYear()} {personalInfo.shortName}. Built with React + Framer Motion.
        </span>
        <span className="gradient-text font-medium">Designed &amp; coded with care.</span>
      </div>
    </footer>
  );
}
