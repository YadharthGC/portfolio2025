import logoPremier from '../assets/logos/premier health group.jpg';
import logoEutech from '../assets/logos/eutech_cybernetic_logo.jpg';
import logoAblelyf from '../assets/logos/ablelyf_logo.jpg';
import logoStraive from '../assets/logos/straive__logo.jpg';
import logoSmith from '../assets/logos/robert_h_smith_school_of_business_logo.jpg';
import logoMahalingam from '../assets/logos/mahalingam_college_of_engineering_and_technology_logo.jpg';
import logoCoursera from '../assets/logos/coursera_logo.jpg';
import logoGuvi from '../assets/logos/guviofficial_logo.jpg';

export const personalInfo = {
  name: 'Hari Yadharth Ganesh Chitra',
  shortName: 'Yadharth',
  roles: ['Software Engineer', 'Full-Stack Developer', 'AI Engineer', 'Healthcare Tech Builder'],
  location: 'College Park, MD, USA',
  email: 'ganeshyadharth@gmail.com',
  linkedin: 'https://linkedin.com/in/yadharthgc',
  github: 'https://github.com/YadharthGC',
  githubUsername: 'YadharthGC',
  summary:
    'Full-stack engineer with 3+ years building production web apps in healthcare and enterprise — now expanding into AI engineering. React, Angular, TypeScript, Node, LangChain, RAG, and AWS under the belt. MS in Information Systems @ UMD.',
};

export interface SocialLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yadharthgc',
    href: personalInfo.linkedin,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/YadharthGC',
    href: personalInfo.github,
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Premier Health Group',
    role: 'Software Developer',
    period: 'Sep 2025 – Present',
    location: 'Washington DC',
    logo: logoPremier,
    highlights: [
      'Architected HIPAA-compliant healthcare web modules using Angular 17, TypeScript, Angular Material, and RxJS, serving 50+ clinical users across multiple facilities',
      'Engineered scalable Node.js + Express.js RESTful APIs with modular middleware, reducing average response times by 30% and enabling downstream integration with AI/ML data pipelines',
      'Deployed microservices on AWS (ECS, Lambda, S3) within a CI/CD pipeline, maintaining full HIPAA compliance and 99.9% uptime across production environments',
      'Developed reusable custom Angular pipes and directives, accelerating feature delivery by 25% in agile sprint cycles',
    ],
  },
  {
    company: 'Eutech Cybernetic',
    role: 'Software Engineer',
    period: 'Mar 2024 – Jul 2024',
    location: 'Chennai',
    logo: logoEutech,
    highlights: [
      'Developed enterprise healthcare UI features using Angular and React.js with Angular Material, delivering responsive interfaces consumed by 200+ end users',
      'Optimized PostgreSQL queries and database indexing strategies, improving data retrieval performance by 30% for patient record APIs',
      'Refactored legacy TypeScript codebase into modular, type-safe architecture, reducing runtime errors by 40% and improving long-term maintainability',
      'Integrated RESTful and GraphQL API layers with Node.js backend services, designing schema structures compatible with future LLM-powered search features',
    ],
  },
  {
    company: 'Ablelyf',
    role: 'Software Developer',
    period: 'Jan 2024 – Feb 2024',
    location: 'Chennai',
    logo: logoAblelyf,
    highlights: [
      'Engineered a real-time movement detection platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), processing sensor data streams for healthcare accessibility use cases',
      'Integrated Redux for centralized state management and Socket.IO for bidirectional real-time communication, boosting user engagement by 30%',
      'Optimized REST API endpoints and React component rendering lifecycle, reducing end-to-end latency by 40% across the data pipeline',
    ],
  },
  {
    company: 'Straive',
    role: 'Software Developer',
    period: 'Jan 2022 – Dec 2023',
    location: 'Chennai',
    logo: logoStraive,
    highlights: [
      'Re-engineered the NODI copy-editing platform from legacy architecture to a modern MERN stack with Bootstrap and SCSS, serving 1,000+ daily active editors',
      'Automated frontend state management with Redux, improving rendering performance by 20% and reducing prop-drilling complexity across 40+ components',
      'Collaborated with product and UX teams in agile sprints to ship data-driven features, increasing user retention by 15% quarter-over-quarter',
      'Designed RESTful API architecture with structured MongoDB schemas, establishing a data layer capable of supporting NLP-based grammar-check integrations',
    ],
  },
];

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'NODI Copy Editing Platform',
    description:
      'Browser-based copy editor with real-time grammar checking, smart formatting, and collaborative markup. Reduced editing time by 30% and boosted user engagement by 25%.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    name: 'MotionSense — Autism Movement Tracker',
    description:
      'Web app for therapists and educators to monitor and analyze movement patterns in autism-spectrum students, enabling early behavioral insights through real-time motion detection.',
    tech: ['React', 'TypeScript', 'FastAPI', 'ML/CV'],
  },
  {
    name: 'HealthCare Information System (HIS)',
    description:
      'Enterprise patient management platform streamlining clinical workflows, scheduling, and medical records with a 40% database efficiency boost.',
    tech: ['Angular', 'TypeScript', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    name: 'Aegis Health Platform',
    description:
      'Scalable clinical information system with role-based access control and HIPAA-compliant data handling for multi-site healthcare organizations.',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'HIPAA'],
  },
];

export interface ShowcaseProject {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  badge?: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    name: 'ProfileIQ',
    description:
      'LinkedIn RAG chatbot answering questions about your profile using LangChain, ChromaDB, FastAPI, and React. Deployed on Render.',
    tech: ['LangChain', 'ChromaDB', 'FastAPI', 'React'],
    github: 'https://github.com/YadharthGC/ProfileIQ',
  },
  {
    name: 'FinShield AI',
    description:
      'Production-grade credit card fraud detection platform with fine-tuned TinyLlama (LoRA/QLoRA), LangGraph RAG agent, NeMo Guardrails, and a React dashboard backed by FastAPI + AWS SageMaker.',
    tech: ['TinyLlama', 'LangGraph', 'NeMo Guardrails', 'FastAPI', 'React', 'AWS SageMaker'],
    badge: 'In progress',
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  logo: string;
  highlight: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    degree: 'MS Information Systems',
    school: 'University of Maryland, Smith School of Business',
    period: 'Aug 2024 – Dec 2025',
    location: 'College Park, MD, USA',
    logo: logoSmith,
    highlight: 'Focused on data systems, AI, and enterprise architecture',
    coursework: ['Database Systems', 'Data Analytics', 'AI/ML Applications', 'Enterprise Architecture', 'Cloud Computing'],
  },
  {
    degree: 'BE Mechatronics',
    school: 'Anna University, Dr. Mahalingam College of Engineering',
    period: 'Aug 2017 – Apr 2021',
    location: 'Pollachi, Tamil Nadu, India',
    logo: logoMahalingam,
    highlight: 'Foundation in engineering systems, automation, and problem-solving',
    coursework: ['Control Systems', 'Embedded Systems', 'Programming & Algorithms', 'Robotics', 'Signal Processing'],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  platform: string;
  year: string;
  logo: string;
  description: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Building AI Agents and Agentic Workflows',
    issuer: 'IBM',
    platform: 'Coursera',
    year: '2026',
    logo: logoCoursera,
    description: 'Designed multi-step AI agents using LangChain, tool orchestration, and autonomous reasoning pipelines',
  },
  {
    name: 'AWS Cloud Solutions Architect Professional Certificate',
    issuer: 'AWS',
    platform: 'Coursera',
    year: '2025',
    logo: logoCoursera,
    description: 'Architected scalable cloud infrastructure — VPCs, EC2, S3, IAM, Lambda, and high-availability design',
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'GUVI (IIT-M Incubated)',
    platform: 'GUVI',
    year: '2021',
    logo: logoGuvi,
    description: 'Built end-to-end web applications with HTML, CSS, JavaScript, React, Node.js, and MongoDB',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
