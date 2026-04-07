import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiMapPin, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { education, certifications } from '../lib/data';

function Logo({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const initials = alt
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (error) {
    return (
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
          color: 'var(--text-2)',
          border: '1px solid var(--border)',
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="h-8 w-8 shrink-0 rounded-lg object-cover"
      style={{ border: '1px solid var(--border)' }}
    />
  );
}

function CertLogo({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[8px] font-bold"
        style={{
          background: 'rgba(6,182,212,0.1)',
          color: 'var(--text-3)',
          border: '1px solid var(--border)',
        }}
      >
        {alt[0]}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="h-5 w-5 shrink-0 rounded object-cover"
      style={{ border: '1px solid var(--border)' }}
    />
  );
}

export default function Education() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="education" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Education & Certifications" subtitle="Where I learned, what I earned." />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3
              className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-3)' }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => {
                const isOpen = expanded === edu.degree;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -3 }}
                    className="glass rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="mb-1 text-xs font-medium text-primary">{edu.period}</div>

                    {/* Degree + Logo */}
                    <div className="mb-2 flex items-center gap-3">
                      <Logo src={edu.logo} alt={edu.school} />
                      <div>
                        <h4 className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>
                          {edu.degree}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div
                      className="mb-3 flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-3)' }}
                    >
                      <FiMapPin size={11} className="text-primary" />
                      {edu.location}
                    </div>

                    {/* Highlight */}
                    <p className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                      {edu.highlight}
                    </p>

                    {/* Expandable coursework */}
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : edu.degree)}
                      className="flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Relevant Coursework
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronDown size={12} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 flex flex-wrap gap-2">
                            {edu.coursework.map((c) => (
                              <span
                                key={c}
                                className="rounded-full px-2.5 py-1 text-xs font-medium"
                                style={{
                                  background: 'rgba(6,182,212,0.08)',
                                  color: '#06b6d4',
                                  border: '1px solid rgba(6,182,212,0.15)',
                                }}
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-3)' }}
            >
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-6 transition-all duration-300"
                >
                  {/* Year badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiAward className="text-primary" size={16} />
                      <span className="text-xs font-medium text-primary">{cert.year}</span>
                    </div>
                    {cert.verifyUrl && cert.verifyUrl !== '#' && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
                        style={{ border: '1px solid rgba(6,182,212,0.25)' }}
                      >
                        Verify <FiExternalLink size={10} />
                      </a>
                    )}
                    {cert.verifyUrl === '#' && (
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          color: 'var(--text-3)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        Credential
                      </span>
                    )}
                  </div>

                  {/* Cert name */}
                  <h4
                    className="mb-2 text-base font-bold leading-snug"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {cert.name}
                  </h4>

                  {/* Issuer + platform logo */}
                  <div className="mb-3 flex items-center gap-2 text-sm">
                    <CertLogo src={cert.logo} alt={cert.platform} />
                    <span style={{ color: 'var(--text-2)' }}>
                      {cert.issuer} <span style={{ color: 'var(--text-3)' }}>via {cert.platform}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-2)' }}
                  >
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
