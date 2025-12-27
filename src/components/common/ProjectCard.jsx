import './ProjectCard.css';

/**
 * Project Card Component
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {array} tags - Technologies used
 * @param {string} link - Project link
 * @param {string} github - GitHub repository link
 */
const ProjectCard = ({ title, description, tags = [], link, github }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-icon">
              GitHub
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-icon">
              Live
            </a>
          )}
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
