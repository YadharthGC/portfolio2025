import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Tag from './shared/Tag';
import { featuredProjects, showcaseProjects } from '../lib/data';

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  badge,
  index,
}: {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  badge?: string;
  index: number;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setRotate({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass group rounded-2xl p-4 transition-all duration-300 sm:p-6"
    >
      <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
        <h3
          className="min-w-0 text-base font-bold transition-colors group-hover:text-primary sm:text-lg"
          style={{ color: 'var(--text-1)' }}
        >
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          {badge && (
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider sm:px-3 sm:text-[10px]"
              style={{
                background: 'rgba(var(--particle-secondary), 0.12)',
                color: 'var(--color-secondary)',
                border: '1px solid rgba(var(--particle-secondary), 0.25)',
              }}
            >
              {badge}
            </span>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-all hover:text-primary"
              style={{ color: 'var(--text-2)' }}
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-all hover:text-primary"
              style={{ color: 'var(--text-2)' }}
              aria-label="Live demo"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mb-3 text-xs leading-relaxed sm:mb-4 sm:text-sm" style={{ color: 'var(--text-2)' }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 px-4 sm:py-28 sm:px-6">
      <div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]"
        style={{ background: 'rgba(var(--particle-secondary), 0.06)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Things I've built and shipped" />

        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider sm:mb-6 sm:text-sm" style={{ color: 'var(--text-3)' }}>
          Featured
        </h3>
        <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard
              key={p.name}
              title={p.name}
              description={p.description}
              tech={p.tech}
              github={p.github}
              live={p.live}
              index={i}
            />
          ))}
        </div>

        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider sm:mb-6 sm:text-sm" style={{ color: 'var(--text-3)' }}>
          From GitHub
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {showcaseProjects.map((p, i) => (
            <ProjectCard
              key={p.name}
              title={p.name}
              description={p.description}
              tech={p.tech}
              github={p.github}
              live={p.live}
              badge={p.badge}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
