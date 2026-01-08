import ProjectCard from '../components/common/ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample project data - you can edit this
  const projects = [
    {
      title: "Bucky",
      description: "A 5 DOF robotic arm with fin ray gripper, designed for pick-and-place tasks. Features inverse kinematics and operated via ESP32 microcontroller with WiFi control.",
      tags: ["Arduino", "C / C++", "SOLIDWORKS", "Dot Solder Board"],
      github: "https://github.com/yourusername/autobat",
      link: null,
      image: "https://via.placeholder.com/400x250/2a4a7c/ffffff?text=Autobat"
    },
    {
      title: "CoCare AI",
      description: "A privacy-first AI copilot for caregivers of neurodivergent children. Uses MediaPipe for body landmark detection and Gemini API to generate behavioral summaries without storing raw footage.",
      tags: ["React", "TypeScript", "Python", "OpenCV", "Gemini API", "MediaPipe"],
      github: null,
      link: null,
      image: "path/to/cocare-image.jpg"
    },
    {
      title: "Speech Dojo LMS",
      description: "A scalable Learning Management System serving 2500+ users. Engineered a full LAMP stack environment with automated GitHub Actions CI/CD pipelines for zero-downtime deployment.",
      tags: ["PHP", "JavaScript", "Linux", "Apache", "MySQL", "Docker"],
      github: null,
      link: null,
      image: "path/to/speech-dojo-image.jpg"
    },
      {
      title: "Captur - AI-Optimized DAC Bioreactor",
      description: "An award-winning reinforcement learning system that correlates environmental metrics with algae growth. Uses Random Forest Regressors to optimize CO2 capture efficiency.",
      tags: ["Python", "Scikit-learn", "Arduino", "Machine Learning"],
      github: null,
      link: null,
      image: "path/to/bioreactor-image.jpg"
    },
    {
      title: "Divergence",
      description: "Winner of the NeurotechX Global Hackathon. A BCI web app that analyzes EEG brainwave data using FFT and NLP transformers to diagnose learning styles and adapt educational content.",
      tags: ["Python", "C++", "TensorFlow", "Hugging Face", "Streamlit", "EEG"],
      github: null,
      link: null,
      image: "path/to/divergence-image.jpg"
    },
    {
      title: "AWISSA",
      description: "NASA SpaceApps Top 500 Finalist. An interactive geospatial dashboard utilizing satellite imagery and remote sensing pipelines to visualize fire-prone areas and dynamic risk zones.",
      tags: ["React", "Node.js", "Express", "Leaflet.js", "NASA API"],
      github: null,
      link: null,
      image: "path/to/awissa-image.jpg"
    },
    {
      title: "Kobe",
      description: "An autonomous VEX-based robot capable of launching projectiles at fixed targets. Features a closed-loop PID controller for precise distance maintenance and encoder feedback.",
      tags: ["C++", "VEX Robotics", "PID Control", "Blender"],
      github: null,
      link: null,
      image: "path/to/kobe-image.jpg"
    },
    {
      title: "AlbertaSat Ex-Alta 3 Hyperion Solar Wings",
      description: "Developed firmware for the power subsystem of a CubeSat. Integrated solar array configurations, thermal tracking sensors, and fail-safe deployment mechanisms using I2C protocols.",
      tags: ["C / C++", "Embedded Systems", "I2C", "PCB Design"],
      github: null,
      link: null,
      image: "path/to/albertasat-image.jpg"
    },
    {
      title: "BIFI (Business  Intelligence Financial Information) Club Website",
      description: "A responsive website for a financial club that showcases events, member profiles, and educational resources.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: null,
      link: "https://delightful-pothos-e02432.netlify.app/",
      image: "path/to/bifi-image.jpg"
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
