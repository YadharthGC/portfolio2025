import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';
import { personalInfo, socials } from '../lib/data';

const iconMap: Record<string, IconType> = {
  mail: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full blur-[150px]"
        style={{ background: 'rgba(var(--particle-primary), 0.06)' }}
      />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading title="Get in Touch" subtitle="Let's build something great together" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
            I'm currently open to new opportunities. Whether you have a question, want to
            collaborate, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {socials.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl glass">
                  {Icon && <Icon size={24} className="text-primary" />}
                </div>
                <h3 className="mb-1 font-semibold" style={{ color: 'var(--text-1)' }}>
                  {s.label}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                  {s.value}
                </p>
                <FiArrowUpRight
                  className="absolute top-4 right-4 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--text-3)' }}
                  size={16}
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-10 py-4 font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10">Say Hello</span>
            <FiArrowUpRight className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
