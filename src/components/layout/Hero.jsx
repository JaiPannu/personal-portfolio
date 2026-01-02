import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Jai Pannu</span>
        </h1>
        <p className="hero-subtitle">
          Thank you for visiting my personal portfolio!
        </p>
        <p className="hero-description">
          I am a Mechatronics Engineering student at the University of Waterloo
          with a passion for robotics, embedded systems, and software development.
        </p>
        <div className="hero-links">
          <a href="https://github.com/JaiPannu?tab=overview&from=2026-01-01&to=2026-01-01" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="www.linkedin.com/in/jai-pannu" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="mailto:js3pannu@uwaterloo.ca" className="social-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;