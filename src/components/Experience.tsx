import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import LogoWithFallback from './shared/LogoWithFallback';
import { experiences } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 px-4 sm:py-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="Where I've built and shipped" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-8 flex flex-col sm:mb-12 md:flex-row ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                    className="h-4 w-4 rounded-full border-2 border-primary shadow-lg shadow-primary/30"
                    style={{ background: 'var(--bg)' }}
                  />
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-4 transition-all duration-300 sm:p-6"
                  >
                    <div className="mb-1 text-xs font-medium text-primary">{exp.period}</div>
                    <h3 className="mb-2 text-base font-bold sm:text-lg" style={{ color: 'var(--text-1)' }}>
                      {exp.role}
                    </h3>
                    <div className="mb-3 flex items-center gap-3 text-sm sm:mb-4">
                      <LogoWithFallback src={exp.logo} alt={exp.company} />
                      <div className="flex min-w-0 flex-col">
                        <span className="font-medium text-secondary">{exp.company}</span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-3)' }}>
                          <FiMapPin size={10} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-xs leading-relaxed sm:gap-3 sm:text-sm"
                          style={{ color: 'var(--text-2)' }}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
