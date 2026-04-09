import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiAward, FiBriefcase } from 'react-icons/fi';
import {
  Clock,
  Briefcase,
  Layers,
  Package,
  Code,
  Terminal,
  Wrench,
  Hospital,
  Rocket,
  Building2,
  Monitor,
  Server,
  Cloud,
  Brain,
  Users,
  Heart,
  CheckCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../lib/data';

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

interface StatCard {
  icon: LucideIcon;
  label: string;
  value: string;
  suffix: string;
  desc: string;
  bgIcons: { icon: LucideIcon; size: number; x: string; y: string; rotate: number }[];
}

const stats: StatCard[] = [
  {
    icon: Clock,
    label: 'Years Building',
    value: '3',
    suffix: '+',
    desc: 'Production apps since 2022',
    bgIcons: [
      { icon: Code, size: 44, x: '8%', y: '62%', rotate: -15 },
      { icon: Terminal, size: 36, x: '65%', y: '55%', rotate: 10 },
      { icon: Wrench, size: 30, x: '38%', y: '75%', rotate: -8 },
    ],
  },
  {
    icon: Briefcase,
    label: 'Companies',
    value: '4',
    suffix: '',
    desc: 'Startups to enterprise healthcare',
    bgIcons: [
      { icon: Hospital, size: 42, x: '10%', y: '58%', rotate: 8 },
      { icon: Rocket, size: 34, x: '60%', y: '65%', rotate: -12 },
      { icon: Building2, size: 38, x: '35%', y: '78%', rotate: 5 },
    ],
  },
  {
    icon: Layers,
    label: 'Tech Stacks',
    value: '10',
    suffix: '+',
    desc: 'Frontend, backend, cloud & AI',
    bgIcons: [
      { icon: Monitor, size: 40, x: '8%', y: '60%', rotate: -10 },
      { icon: Server, size: 32, x: '42%', y: '72%', rotate: 12 },
      { icon: Cloud, size: 36, x: '68%', y: '56%', rotate: -6 },
      { icon: Brain, size: 28, x: '22%', y: '82%', rotate: 8 },
    ],
  },
  {
    icon: Package,
    label: 'Projects Shipped',
    value: '8',
    suffix: '+',
    desc: 'Used by real teams, real patients',
    bgIcons: [
      { icon: Users, size: 42, x: '10%', y: '60%', rotate: 6 },
      { icon: Heart, size: 30, x: '62%', y: '68%', rotate: -10 },
      { icon: CheckCircle, size: 36, x: '36%', y: '78%', rotate: 12 },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 px-4 sm:py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Engineer first. Now adding intelligence." />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-5 glow sm:p-8">
              <p className="mb-4 text-sm leading-relaxed sm:mb-5 sm:text-lg" style={{ color: 'var(--text-2)' }}>
                I'm a{' '}
                <span className="font-medium text-primary">full-stack software engineer</span> with
                3+ years of shipping production web apps in{' '}
                <span className="font-medium text-secondary">healthcare</span> and enterprise. React,
                Angular, TypeScript, Node — I've built with all of them at scale, from HIPAA-compliant
                patient platforms to real-time editing tools used daily by content teams.
              </p>
              <p className="mb-4 text-sm leading-relaxed sm:mb-5 sm:text-lg" style={{ color: 'var(--text-2)' }}>
                I hold an{' '}
                <span className="font-medium text-primary">MS in Information Systems</span> from the
                University of Maryland — and I've been channeling that foundation into{' '}
                <span className="font-medium text-secondary">AI engineering</span>. I'm actively
                building with LangChain, RAG pipelines, and agentic workflows (IBM-certified), on top
                of an AWS Cloud Solutions Architect certification. Not starting from scratch —
                expanding what I already know into smarter territory.
              </p>
              <p className="mb-6 text-sm leading-relaxed sm:mb-8 sm:text-lg" style={{ color: 'var(--text-2)' }}>
                My goal? Build{' '}
                <span className="font-medium text-primary">intelligent, user-facing applications</span>{' '}
                — where solid web engineering meets the power of AI. The kind of products that feel
                magical to use but are rock-solid under the hood.
              </p>

              <div className="flex flex-wrap gap-3 text-xs sm:gap-5 sm:text-sm" style={{ color: 'var(--text-2)' }}>
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-primary" /> {personalInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <FiBriefcase className="text-primary" /> Premier Health Group
                </span>
                <span className="flex items-center gap-2">
                  <FiAward className="text-primary" /> MS, University of Maryland 2025
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass relative overflow-hidden rounded-2xl p-4 text-center transition-all duration-300 sm:p-5"
              >
                {/* Content */}
                <div className="relative z-10">
                  <s.icon className="mx-auto mb-2 text-primary" size={18} />
                  <div className="gradient-text mb-0.5 text-2xl font-bold sm:text-3xl">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs font-medium sm:text-sm" style={{ color: 'var(--text-1)' }}>
                    {s.label}
                  </div>
                  <div className="mt-1 hidden text-xs leading-snug sm:block" style={{ color: 'var(--text-3)' }}>
                    {s.desc}
                  </div>
                </div>

                {/* Decorative background icons — hidden on mobile */}
                <div className="hidden sm:block">
                  {s.bgIcons.map((bg, j) => (
                    <bg.icon
                      key={j}
                      size={bg.size}
                      className="pointer-events-none absolute text-primary"
                      style={{
                        left: bg.x,
                        top: bg.y,
                        transform: `rotate(${bg.rotate}deg)`,
                        opacity: 0.06,
                      }}
                      strokeWidth={1.2}
                    />
                  ))}
                </div>

                {/* Bottom fade */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b-2xl"
                  style={{
                    background: 'linear-gradient(to top, var(--surface-strong), transparent)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
