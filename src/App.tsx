import React from 'react';

function App() {
  return (
    <div className="app-container">
      <header className="sidebar">
        <div>
          <h1>Jai Pannu</h1>
          <h2 className="subtitle">Frontend Developer</h2>
          <p className="bio">Welcome to my personal portfolio. I am a developer passionate about building great software.</p>
          
          <nav className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
        </div>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:email@example.com">Email</a>
        </div>
      </header>

      <main className="content">
        <section id="about" className="section">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </p>
          <br />
          <p>
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
        </section>

        <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="https://placehold.co/600x400/1a1a1a/ffffff?text=Project+1" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of my first project.</p>
          </div>
          <div className="project-card">
            <img src="https://placehold.co/600x400/1a1a1a/ffffff?text=Project+2" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of my second project.</p>
          </div>
          <div className="project-card">
            <img src="https://placehold.co/600x400/1a1a1a/ffffff?text=Project+3" alt="Project 3" />
            <h3>Project 3</h3>
            <p>A brief description of my third project.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Get in touch with me at email@example.com</p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Personal Portfolio</p>
      </footer>
      </main>
    </div>
  );
}

export default App;