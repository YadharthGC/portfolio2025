import { lazy, Suspense } from 'react';
import { ThemeProvider } from './lib/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function SectionLoader() {
  return (
    <div className="flex min-h-[20vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
