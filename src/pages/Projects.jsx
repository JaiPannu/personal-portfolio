import ProjectCard from '../components/common/ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample project data - you can edit this
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Vite, featuring a clean and minimal design with smooth animations.",
      tags: ["React", "Vite", "CSS"],
      github: "https://github.com/yourusername/portfolio",
      link: "https://yourportfolio.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      link: null
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/taskapp",
      link: "https://taskapp.com"
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>
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
