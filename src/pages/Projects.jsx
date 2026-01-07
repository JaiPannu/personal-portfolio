import ProjectCard from '../components/common/ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample project data - you can edit this
  const projects = [
    {
      title: "Autobat",
      description: "A microcontroller-powered T-ball batting system designed for use with children at KidsAbility with motor impairments, enabling accessible and independent play through the push of a button.",
      tags: ["Arduino", "C / C++", "SOLIDWORKS", "Dot Solder Board"],
      github: "https://github.com/yourusername/autobat",
      link: null,
      image: "https://via.placeholder.com/400x250/2a4a7c/ffffff?text=Autobat"
    },
    {
      title: "StrobeShield",
      description: "An award-winning hackathon project that uses IoT and light-triggered photoresistors to polarize their lenses to prevent photo epilepsy seizures, with real-time event logging.",
      tags: ["Raspberry Pi", "MicroPython", "SOLIDWORKS"],
      github: "https://github.com/yourusername/strobeshield",
      link: null,
      image: "https://via.placeholder.com/400x250/2a4a7c/ffffff?text=StrobeShield"
    },
    {
      title: "Shape Detector Convolutional Neural Network",
      description: "A personal project using deep learning with PyTorch + OpenCV to detect circles, squares, and triangles, featuring a GUI to choose training parameters.",
      tags: ["Python", "PyTorch", "OpenCV", "Tkinter", "Machine Learning"],
      github: "https://github.com/yourusername/shape-detector",
      link: null,
      image: "https://via.placeholder.com/400x250/2a4a7c/ffffff?text=Shape+Detector"
    },
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
