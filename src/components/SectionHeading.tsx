import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <p style={{ color: 'var(--text-2)' }}>{subtitle}</p>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
