import './About.css';
import '../components/global.css';
import useLiquidGlassHover from '../hooks/useLiquidGlassHover';

const InfoCard = ({ icon, title, description, link }) => {
  const cardRef = useLiquidGlassHover();

  return (
    <div ref={cardRef} className="info-card liquid-glass liquid-glass-rounded-lg">
      <div className="liquid-glass-specular"></div>
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        {link && (
          <a href={link.url} className="card-link" target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const infoCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      ),
      title: "I'm a Builder",
      description: "Passionate about making usable devices and systems that improve daily life, through integrating hardware, software, and actuators."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: "I'm a Developer",
      description: "Working on vision-related projects, machine learning with PyTorch, control system applications such as WPIlib, but also programming in C++ and MicroPy using microcontrollers.",
      link: { url: "https://github.com/JaiPannu", text: "Check out my GitHub!" }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "I'm a Founder",
      description: "I have been running school-based engineering initiatives, while also starting an interprovincial organization for STEM education."
    }
  ];

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
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
