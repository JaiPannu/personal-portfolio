import './About.css';

const About = () => {
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
            <h3 className="about-role">Founder and Creator</h3>
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

          <div className="about-right">
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>I'm a Builder</h4>
                <p>
                  Passionate about making usable devices and systems that improve daily life,
                  through integrating hardware, software, and actuators.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>I'm a Developer</h4>
                <p>
                  Working on vision-related projects, machine learning with PyTorch, control
                  system applications such as WPIlib, but also programming in C++ and MicroPy using microcontrollers.
                </p>
                <a href="https://github.com/JaiPannu" className="card-link">Check out my GitHub!</a>
              </div>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>I'm a Founder</h4>
                <p>
                  I have been running school-based engineering initiatives, while also starting
                  an interprovincial organization for STEM education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
