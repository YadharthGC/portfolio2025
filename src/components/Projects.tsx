import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { fetchGitHubRepos, languageColors, type GitHubRepo } from '../lib/github';
import { featuredProjects, personalInfo } from '../lib/data';
import { useTheme } from '../lib/theme';

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  stars,
  forks,
  language,
  index,
}: {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  stars?: number;
  forks?: number;
  language?: string | null;
  index: number;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      className="glass group rounded-2xl p-6 transition-all duration-300"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2">
          {language && (
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: languageColors[language] || '#888' }}
            />
          )}
          <h3
            className="text-lg font-bold transition-colors group-hover:text-primary"
            style={{ color: 'var(--text-1)' }}
          >
            {title}
          </h3>
        </div>
        <div className="flex gap-2">
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

      <p className="mb-4 text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-2)' }}>
        {description || 'No description available.'}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 text-xs font-medium"
            style={{
              background: isDark ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.1)',
              color: '#06b6d4',
              border: `1px solid ${isDark ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.2)'}`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {(stars !== undefined || forks !== undefined) && (
        <div className="flex gap-4 text-xs" style={{ color: 'var(--text-3)' }}>
          {stars !== undefined && stars > 0 && (
            <span className="flex items-center gap-1">
              <FiStar size={12} /> {stars}
            </span>
          )}
          {forks !== undefined && forks > 0 && (
            <span className="flex items-center gap-1">
              <FiGitBranch size={12} /> {forks}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetchGitHubRepos(personalInfo.githubUsername).then(setRepos);
  }, []);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full blur-[150px]"
        style={{ background: 'rgba(var(--particle-secondary), 0.06)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Things I've built and shipped" />

        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
          Featured
        </h3>
        <div className="mb-12 grid gap-6 md:grid-cols-2">
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

        {repos.length > 0 && (
          <>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
              From GitHub
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <ProjectCard
                  key={repo.id}
                  title={repo.name}
                  description={repo.description || ''}
                  tech={repo.topics?.length ? repo.topics : repo.language ? [repo.language] : []}
                  github={repo.html_url}
                  live={repo.homepage || undefined}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  language={repo.language}
                  index={i}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
