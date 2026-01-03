import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
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
        <div className="hero-right">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I have always been interested in how things work, which led me to
              develop a passion for design and creation of my own.
            </p>
            <p className="about-text">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="skills-grid">
              <div className="skill-item">JavaScript (ES6+)</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">Express</div>
              <div className="skill-item">Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;