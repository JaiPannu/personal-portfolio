import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a software engineer passionate about building beautiful and functional web applications.
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          <p className="about-text">
            My interest in web development started back in 2020 when I decided to try building my first website.
            Fast-forward to today, and I've had the privilege of working on various projects and learning new technologies.
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
    </section>
  );
};

export default About;
