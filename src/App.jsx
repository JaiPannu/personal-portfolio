import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Starfield from './components/common/Starfield';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Starfield />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
