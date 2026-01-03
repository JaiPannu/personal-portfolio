// import './About.css'; // TODO: Move styles to a global CSS file or use CSS Modules

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a driven student with a passion for engineering, 
            technology, and turning ideas into reality. I am always
            building, learning, and exploring new technologies to 
            expand my skill set. I have been building, starting
            with Hackathons and then community projects,
            to make things people love.
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