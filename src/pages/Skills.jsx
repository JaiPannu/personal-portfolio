import './Skills.css';
import '../components/global.css';
import useLiquidGlassHover from '../hooks/useLiquidGlassHover';

const SkillCategory = ({ category, icon, skills }) => {
  const cardRef = useLiquidGlassHover();

  return (
    <div className="skill-category-section">
      <h3 className="category-title">
        <span className="category-icon">{icon}</span>
        {category}
      </h3>
      <div ref={cardRef} className="skill-card liquid-glass liquid-glass-rounded-xl">
        <div className="liquid-glass-specular"></div>
        <div
          className="skills-pills-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill" style={{ textAlign: 'center' }}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      category: 'Mechanical',
      icon: '⚙️',
      skills: [
        'Arduino',
        'Raspberry Pi',
        'ESP32',
        'Circuit Boards',
        'Solidworks',
        'AutoCAD',
        'Excel',
        'MATLAB',
        'Soldering',
        'GD & T'
      ]
    },
    {
      category: 'Tools & Frameworks',
      icon: '🛠️',
      skills: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'Apache',
        'Pytorch',
        'CI/CD Pipelines',
        'Docker',
        'Mediapipe'
      ]
    },
    {
      category: 'Software & Languages',
      icon: '💻',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'C++',
        'SCSS',
        'Java',
        'SQL',
        'PHP'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-categories">
          {skillsData.map((skillCategory, index) => (
            <SkillCategory
              key={index}
              category={skillCategory.category}
              icon={skillCategory.icon}
              skills={skillCategory.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
