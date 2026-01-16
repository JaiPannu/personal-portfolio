import './About.css';
import '../components/global.css';
import useLiquidGlassHover from '../hooks/useLiquidGlassHover';
import myImage from '../assets/images/My-image.png';
const About = () => {
  const bioCardRef = useLiquidGlassHover();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>

        <div className="about-layout">
          <div className="about-left">
            <div className="profile-image">
              <div className="profile-image-wrapper">
                <img src={myImage} alt="Jai Pannu" />
              </div>
          </div>
          </div>

          <div className="about-right">
            <div ref={bioCardRef} className="about-bio-card liquid-glass liquid-glass-rounded-lg">
              <div className="liquid-glass-specular"></div>

              <p className="about-bio">
                I have been building in and leading STEM intitiatives since 2022, ranging from manufacturing research
                to accessibility technology leading to on-field impact.
              </p>
              <p className="about-bio">
                My aim is turning tangible ideas to reality through engineering and using first principles thinking. I employ a
                multidisciplinary approach to problem-solving leading to constant learning of new skills and perspectives.
              </p>
              <p className="about-bio">
                I enjoy working out in my free time and training for calisthenics. Fun fact: I played provincial level soccer
                 in high school!
              </p>
              <div className="about-buttons">
                <a href="#contact" className="btn-primary">Let's Talk</a>
                <a href="https://drive.google.com/file/d/1zpSg9ygdsdcZcUHEZ7FiEUxbSWNy_9HA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download my Resume</a>
                <a href="#projects" className="btn-secondary">
                  My Work
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
