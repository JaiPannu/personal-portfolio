import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        <p className="hero-subtitle">
          I build things for the web
        </p>
        <p className="hero-description">
          A software engineer specializing in building exceptional digital experiences.
          Currently focused on building accessible, human-centered products.
        </p>
        <div className="hero-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="social-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
