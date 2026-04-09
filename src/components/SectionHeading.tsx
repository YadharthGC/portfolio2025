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
      className="mb-10 text-center sm:mb-16"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight sm:mb-3 sm:text-3xl lg:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-sm sm:text-base" style={{ color: 'var(--text-2)' }}>{subtitle}</p>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary sm:mt-4 sm:w-20" />
    </motion.div>
  );
}
