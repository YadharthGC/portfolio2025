import { lazy, Suspense } from 'react';
import { ThemeProvider } from './lib/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
