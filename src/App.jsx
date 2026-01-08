import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Starfield from './components/common/Starfield';
import './App.css';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="app">
      <Header />
      <Starfield />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
