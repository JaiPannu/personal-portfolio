import './About.css';
import '../components/global.css';
import useLiquidGlassHover from '../hooks/useLiquidGlassHover';
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
                <img src="src/assets/images/My-image.png" alt="Jai Pannu" />
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
                <button className="btn-primary">Let's Talk</button>
                <a href="https://drive.google.com/drive/folders/1wc7mwEKchrYSepHtoDnb49AXKtsa_KbP?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download my Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
