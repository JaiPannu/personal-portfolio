import './Projects.css';
import roverImage from '../assets/images/optimized/UGV-Rover.webp';
import voyagerImage from '../assets/images/optimized/Voyager-Controls.webp';
import humanoidImage from '../assets/images/optimized/Humanoid-Elbow.webp';
import albertaSatImage from '../assets/images/optimized/AlbertaSat-EPS.webp';
import fightingRobotImage from '../assets/images/optimized/Fighting-Robot.webp';
import kobeImage from '../assets/images/optimized/Kobe-Current.webp';

const projects = [
  {
    title: 'Autonomous UGV Rover',
    kind: 'commissioned robotics',
    description: 'A compact unmanned ground vehicle designed for autonomous navigation across uneven terrain, combining a custom chassis with onboard sensing and control.',
    tags: ['ROS2', 'C++', 'Autonomous Systems', 'CAD'],
    image: roverImage,
  },
  {
    title: 'Voyager Controls',
    kind: 'controls & automation',
    description: 'A controls platform for turning sensor data into reliable motion, with real-time feedback and automation built for mobile robotic systems.',
    tags: ['Controls', 'C++', 'Embedded Systems', 'Automation'],
    image: voyagerImage,
  },
  {
    title: 'Humanoid Elbow Actuation',
    kind: 'humanoid robotics',
    description: 'Vision and firmware architecture for a humanoid robot, connecting fine motor recognition with real-time actuation and telemetry pipelines.',
    tags: ['ROS2', 'PyTorch', 'C++', 'Robotics'],
    image: humanoidImage,
    href: 'https://www.watonomous.ca/',
  },
  {
    title: 'AlbertaSat EPS',
    kind: 'space hardware',
    description: 'Developed firmware for the power subsystem of a CubeSat. Integrated solar array configurations, thermal tracking sensors, and fail-safe deployment mechanisms using I2C protocols.',
    tags: ['C/C++', 'Embedded Systems', 'I2C', 'PCB Design'],
    image: albertaSatImage,
    href: 'https://docs.google.com/document/d/1Vou69ljq1GUpFDrU6DHUNywJiyDAEIo5eQMKR5CtUi8/edit?tab=t.0',
  },
  {
    title: 'Sub-150 g Fighting Robot',
    kind: 'electromechanical design',
    description: 'A lightweight combat robot engineered around strict mass constraints, integrating custom mechanical, electrical, and drivetrain systems.',
    tags: ['SolidWorks', 'Electronics', 'Rapid Prototyping', 'Mechatronics'],
    image: fightingRobotImage,
  },
  {
    title: 'Kobe',
    kind: 'autonomous robotics',
    description: 'An autonomous VEX-based robot capable of launching projectiles at fixed targets. Features a closed-loop PID controller for precise distance maintenance and encoder feedback.',
    tags: ['C++', 'VEX Robotics', 'PID Control', 'Blender'],
    image: kobeImage,
    href: 'https://drive.google.com/file/d/1j1a1bmIftkF-fkqGZZYZ3Wk0a-CInX16/view?usp=sharing',
  },
];

const ProjectContents = ({ project }) => (
  <>
    <div className="project-thumb">
      <img src={project.image} alt={`${project.title} project`} loading="lazy" />
      {project.href && <span className="project-open" aria-hidden="true">↗</span>}
    </div>
    <div className="project-meta">
      <span className="project-name">{project.title}</span>
      <span className="project-kind">{project.kind}</span>
    </div>
    <p className="project-description">{project.description}</p>
    <div className="project-tags" aria-label="Project technologies">
      {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
    </div>
  </>
);

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <header className="simple-heading">
        <p className="eyebrow">selected work</p>
        <h2>Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((project) => project.href ? (
          <a
            key={project.title}
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectContents project={project} />
          </a>
        ) : (
          <article key={project.title} className="project-card">
            <ProjectContents project={project} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
