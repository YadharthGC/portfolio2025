import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiR,
  SiPostgresql,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiRedux,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiFigma,
  SiPostman,
  SiJira,
  SiGithub,
  SiGitlab,
  SiSubversion,
  SiGooglecolab,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiSass,
} from 'react-icons/si';
import { FaAws, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbApi, TbDatabase, TbBrain, TbRobot, TbChartBar } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';
import { useTheme } from '../lib/theme';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  label: string;
  emoji: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    emoji: '\u{1F4BB}',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'C/C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'R', icon: SiR, color: '#276dc3' },
      { name: 'SQL', icon: TbDatabase, color: '#e48900' },
    ],
  },
  {
    label: 'Frontend',
    emoji: '\u{1F3A8}',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#a0a0a0' },
      { name: 'Redux', icon: SiRedux, color: '#764abc' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#25c2a0' },
    ],
  },
  {
    label: 'Styling & UI',
    emoji: '\u2728',
    items: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Material UI', icon: SiMui, color: '#007fff' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'SCSS', icon: SiSass, color: '#cc6699' },
      { name: 'CSS', icon: FaCss3Alt, color: '#264de4' },
    ],
  },
  {
    label: 'Backend',
    emoji: '\u2699\uFE0F',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#a0a0a0' },
      { name: 'RESTful APIs', icon: TbApi, color: '#06b6d4' },
      { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
    ],
  },
  {
    label: 'Databases',
    emoji: '\u{1F5C4}\uFE0F',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    ],
  },
  {
    label: 'Cloud',
    emoji: '\u2601\uFE0F',
    items: [
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285f4' },
    ],
  },
  {
    label: 'AI/ML',
    emoji: '\u{1F916}',
    items: [
      { name: 'LangChain', icon: SiLangchain, color: '#1c3c3c' },
      { name: 'RAG', icon: TbBrain, color: '#8b5cf6' },
      { name: 'LLMs', icon: TbRobot, color: '#06b6d4' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
      { name: 'NumPy', icon: SiNumpy, color: '#4dabcf' },
    ],
  },
  {
    label: 'Tools',
    emoji: '\u{1F527}',
    items: [
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'JIRA', icon: SiJira, color: '#0052cc' },
      { name: 'GitHub', icon: SiGithub, color: '#a0a0a0' },
      { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
      { name: 'SVN', icon: SiSubversion, color: '#809cc9' },
      { name: 'Colab', icon: SiGooglecolab, color: '#f9ab00' },
      { name: 'Tableau', icon: TbChartBar, color: '#e97627' },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="relative py-16 px-4 sm:py-28 sm:px-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-[120px] transition-colors duration-700 sm:h-[600px] sm:w-[600px] sm:blur-[150px]"
        style={{ background: 'rgba(var(--particle-secondary), 0.07)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="Tech Stack" subtitle="Technologies I build with" />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-4 transition-all duration-300 sm:p-6"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="text-lg sm:text-xl">{cat.emoji}</span>
                <h3 className="text-sm font-semibold sm:text-base" style={{ color: 'var(--text-1)' }}>
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + i * 0.03 }}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      borderColor: skill.color + '44',
                      backgroundColor: skill.color + '12',
                      color: skill.color,
                      boxShadow: `0 8px 25px ${skill.color}22`,
                    }}
                    className="group flex cursor-default items-center gap-2 rounded-xl border px-2.5 py-2 text-xs font-medium transition-all duration-300 sm:gap-2.5 sm:px-3.5 sm:py-2.5 sm:text-sm"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                      borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                      color: 'var(--text-2)',
                    }}
                  >
                    <skill.icon
                      size={16}
                      className="shrink-0 transition-colors duration-300 sm:h-5 sm:w-5"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
