import { useState, useEffect, useRef } from 'react';
import './Experience.css';
import '../components/global.css';
import useLiquidGlassHover from '../hooks/useLiquidGlassHover';

const ExperienceCard = ({ date, title, company, description, skills, isVisible }) => {
  const cardRef = useLiquidGlassHover();

  return (
    <div className={`experience-row ${isVisible ? 'visible' : ''}`}>
      <div className="experience-date-col">
        <span className="date-text">{date}</span>
      </div>
      <div className="timeline-node-col">
        <div className={`timeline-dot ${isVisible ? 'active' : ''}`}></div>
      </div>
      <div ref={cardRef} className="experience-card liquid-glass liquid-glass-rounded-lg">
        <div className="liquid-glass-specular"></div>
        <div className="experience-header">
          <h3 className="experience-title">{title}</h3>
          <span className="experience-company">@ {company}</span>
        </div>
        <div className="experience-description">
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="experience-skills">
          {skills.map((skill, index) => (
            <span key={index} className="experience-skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Placeholder data - update with your actual experience
const experiences = [
    {
        date: "Sep 2025 - Present",
        title: "Humanoid Firmware Developer",
        company: "Watonomous",
        description: [
            "Engineered vision and firmware architecture for an autonomous humanoid robot, utilizing PyTorch CNNs for fine motor recognition and ROS2 pipelines to manage real-time telemetry."
        ],
        skills: ["ROS2", "PyTorch", "Linux", "C++", "Robotics"]
    },
    {
        date: "Jun 2025 - Present",
        title: "Software Developer",
        company: "Speech Dojo",
        description: [
            "Engineered a scalable LAMP stack environment on DigitalOcean with automated CI/CD pipelines to support over 2,500 returning users and executed zero-downtime migrations."
        ],
        skills: ["PHP", "JavaScript", "Moodle", "DigitalOcean", "CI/CD", "SQL"]
    },
    {
        date: "Jan 2025 - Sep 2025",
        title: "Power/Firmware Team Member",
        company: "AlbertaSat",
        description: [
            "Developed firmware and power systems for CubeSat missions, integrating solar wings and microcontrollers for precise thermal tracking and power management."
        ],
        skills: ["C/C++", "Embedded Systems", "PCB Design", "Power Systems"]
    },
    {
        date: "Feb 2024 - May 2024",
        title: "University Research Assistant",
        company: "University of Alberta",
        description: [
            "Validated stress vectors for complex lattice structures using Finite Element Analysis (FEA) and automated design pipelines between SolidWorks and nTopology."
        ],
        skills: ["nTopology", "SolidWorks", "FEA", "Python", "Research"]
    },
    {
        date: "2023 - 2024",
        title: "Chief Technology Officer",
        company: "BIFI",
        description: [
            "Led technical operations for a 100+ member club, including developing a responsive website and organizing simulated market trading competitions."
        ],
        skills: ["Web Development", "Leadership", "Financial Tech"]
    },
  ];

const Experience = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});

  // Handle scroll for drawing the line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start drawing when the section is somewhat visible (e.g., 40% from top)
      const startOffset = viewportHeight * 0.5;
      const scrollDist = startOffset - rect.top;
      
      // Calculate max height based on the list container
      const listElement = container.querySelector('.experience-list');
      const max = listElement ? listElement.offsetHeight : 0;

      // Clamp height between 0 and max
      const currentHeight = Math.min(Math.max(scrollDist, 0), max);
      setLineHeight(currentHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setVisibleItems(prev => ({ ...prev, [index]: true }));
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

    const items = document.querySelectorAll('.experience-row-wrapper');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container" ref={containerRef}>
        <h2 className="section-title">Where I've <span className="highlight">Worked</span></h2>
        <div className="experience-list">
          <div className="timeline-track">
            <div className="timeline-line-background"></div>
            <div className="timeline-line-progress" style={{ height: `${lineHeight}px` }}></div>
          </div>
          {experiences.map((exp, index) => (
            <div key={index} data-index={index} className="experience-row-wrapper">
              <ExperienceCard {...exp} isVisible={!!visibleItems[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;