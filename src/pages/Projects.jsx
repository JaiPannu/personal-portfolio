import './Projects.css';
import '../components/common/ProjectCard.css';
import buckyImg from '../assets/images/Bucky.png';
import coCareImg from '../assets/images/CoCare.png';
import speechdojoImg from '../assets/images/Speechdojo.jpg';
import capturImg from '../assets/images/Captur.jpg';
import divergenceImg from '../assets/images/Divergence.webp';
import awissaImg from '../assets/images/AWISSA.png';
import kobeImg from '../assets/images/Kobe.png';
import albertaSatImg from '../assets/images/AlbertaSat.png';
import bifiImg from '../assets/images/BIFI.png';

const ProjectCard = ({ title, description, tags, github, link, image }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
              Live Demo
              <svg className="btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample project data - you can edit this
  const projects = [
    {
      title: "Bucky",
      description: "A 5 DOF robotic arm with fin ray gripper, designed for pick-and-place tasks. Features inverse kinematics and operated via ESP32 microcontroller with WiFi control.",
      tags: ["Arduino", "C / C++", "SOLIDWORKS", "Dot Solder Board"],
      github: "https://github.com/JaiPannu/Bucky.git",
      link: null,
      image: buckyImg
    },
    {
      title: "CoCare AI",
      description: "A privacy-first AI copilot for caregivers of neurodivergent children. Uses MediaPipe for body landmark detection and Gemini API to generate behavioral summaries without storing raw footage.",
      tags: ["React", "TypeScript", "Python", "OpenCV", "Gemini API", "MediaPipe"],
      github: "https://github.com/JaiPannu/CoCare.git",
      link: "https://www.youtube.com/watch?v=8Bfpsvvbp7Y",
      image: coCareImg
    },
    {
      title: "LMS Server Migration",
      description: "Engineered a clean infrastructure migration to a custom configured LAMP stack on DO droplet with zero-downtime deployment. Built automated CI/CD pipelines with Docker and set up cron job scripts for routine backups. (Private Repo)",
      tags: ["PHP", "CI/CD", "Linux", "DigitalOcean", "Apache", "MySQL", "Docker"],
      github: "https://github.com/speechdojo",
      link: "https://www.speechdojo.org/",
      image: speechdojoImg
    },
      {
      title: "Captur - AI-Optimized DAC Bioreactor",
      description: "An award-winning reinforcement learning system that correlates environmental metrics with algae growth. Uses Random Forest Regressors to optimize CO2 capture efficiency.",
      tags: ["Python", "Scikit-learn", "Arduino", "Machine Learning"],
      github: null,
      link: "https://www.canva.com/design/DAGhG9VoQdg/4g9gnUoy0A2itG3O6U2pCw/edit",
      image: capturImg
    },
    {
      title: "Divergence - NeurotechX Global Hackathon Winner",
      description: "Winner of the NeurotechX Global Hackathon. A BCI web app that analyzes EEG brainwave data using FFT and NLP transformers to diagnose learning styles and adapt educational content.",
      tags: ["Python", "C++", "TensorFlow", "Hugging Face", "Streamlit", "EEG"],
      github: "https://www.figma.com/proto/fykTZUAuXRk7R4I1JE94bI/Divergence-by-NeuroMonkeys?type=design&node-id=20-8&t=IM9HS8YkSY1rGkiQ-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A42",
      link: "https://awissa.notion.site/Divergence-Using-Ensemble-Learning-and-EEG-Tracking-to-Identify-Learning-Neuro-Divergencies-770ae2d377a94ef1818562f99a52676b",
      image: divergenceImg
    },
    {
      title: "AWISSA - Top 0.8% Globally NASA SpaceApps",
      description: "NASA SpaceApps Top 500 Finalist among 57,000+ participants. An interactive geospatial dashboard utilizing satellite imagery and remote sensing pipelines to visualize fire-prone areas and dynamic risk zones.",
      tags: ["React", "Node.js", "Express", "Leaflet.js", "NASA API"],
      github: "https://github.com/lucasxu727/AWISSA.git",
      link: "https://awissa.notion.site/AWISSA-Addressing-Wildfire-Issues-in-the-Democratic-Republic-of-Congo-fa63271a8a754d35ad680ebaa2d27f3e",
      image: awissaImg
    },
    {
      title: "Kobe",
      description: "An autonomous VEX-based robot capable of launching projectiles at fixed targets. Features a closed-loop PID controller for precise distance maintenance and encoder feedback.",
      tags: ["C++", "VEX Robotics", "PID Control", "Blender"],
      github: null,
      link: "https://drive.google.com/file/d/1j1a1bmIftkF-fkqGZZYZ3Wk0a-CInX16/view?usp=drive_link",
      image: kobeImg
    },
    {
      title: "AlbertaSat Ex-Alta 3 Hyperion Solar Wings",
      description: "Developed firmware for the power subsystem of a CubeSat. Integrated solar array configurations, thermal tracking sensors, and fail-safe deployment mechanisms using I2C protocols.",
      tags: ["C / C++", "Embedded Systems", "I2C", "PCB Design"],
      github: null,
      link: null,
      image: albertaSatImg
    },
    {
      title: "BIFI (Business  Intelligence Financial Information) Club Website",
      description: "A responsive website for a financial club that showcases events, member profiles, and educational resources. Allows for website editing via an admin dashboard.",
      tags: ["HTML", "SCSS", "JavaScript", "Firebase Hosting", "Netlify"],
      github: "https://github.com/JaiPannu/BIFI-Final.git",
      link: "https://delightful-pothos-e02432.netlify.app/",
      image: bifiImg
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <p className="section-subtitle">Take a look at some of my work in creating full systems, and some software!</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
