import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-image">
            <img src="/Branding/dp2-01_small.jpg" alt="Sandeep Singh" className="profile-image" />
          </div>
          <div className="about-intro">
            <h1>Sandeep Singh</h1>
            <p className="location">Brampton, ON</p>
            <p className="tagline">Cross Industry skillset: CAD/CAM + Software Engineering AI</p>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-description">
            <h2>About Me</h2>
            <p>
I’m Sandeep Singh, a mechanical engineer turned software developer, blending CAD/CAM, PLM, and advanced
 manufacturing expertise with hands-on experience in AI, cloud computing, web development, and automation.
  With over a decade in design engineering, process optimization, and digital transformation, I thrive at
   the intersection of engineering innovation and software technology. Currently pursuing Software 
   Engineering Technology – AI at Centennial College, I’m passionate about building scalable solutions,
    intelligent applications, and Industry 4.0 integrations that drive efficiency and creativity.
            </p>
          </div>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong> ssin1949@my.centennialcollege.ca
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> (437) 779-2324
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> 
              <a href="https://www.linkedin.com/in/sandeep-singh-1010" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sandeep-singh-1010
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/Sandeepsingh1010" target="_blank" rel="noopener noreferrer">
                github.com/Sandeepsingh1010
              </a>
            </div>
          </div>
          
          <div className="resume-section">
            <h3>Resume</h3>
            <p>Download my complete resume to learn more about my experience and qualifications.</p>
            <a href="/Branding/Resume_WIP.pdf" className="resume-link" download>
              <button className="resume-button">
                Download Resume (PDF)
              </button>
            </a>
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="cert-item">
              <div className="cert-icon">
                <img 
                  src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" 
                  alt="Microsoft Certified Fundamentals Badge" 
                  className="cert-badge-icon"
                />
              </div>
              <div className="cert-info">
                <h4>Microsoft Azure Fundamentals (AZ-900)</h4>
                <p>Demonstrates foundational knowledge of cloud services and how they are provided with Microsoft Azure</p>
                <span className="cert-date">2025</span>
              </div>
              <div className="cert-actions">
                <a 
                  href="https://learn.microsoft.com/api/credentials/share/en-us/SandeepSingh-7781/827F7CF2EC6578AB?sharingId=44833BF6EAEABF51" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <button className="cert-button">
                    🏆 View Certificate
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="core-skills">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              <div className="highlight-card">
                <h4>CAD/CAM Engineering</h4>
                <p>Designing, simulating, and optimizing parts for manufacturing.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Siemens NX</span>
                  <span className="skill-tag">PLM</span>
                  <span className="skill-tag">CAD/CAM</span>
                  <span className="skill-tag">G-code</span>
                  <span className="skill-tag">Post Processor</span>
                  <span className="skill-tag">3D Modeling</span>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Process Optimization</h4>
                <p>Driving efficiency through Lean practices and quality systems.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Lean</span>
                  <span className="skill-tag">Quality Systems</span>
                  <span className="skill-tag">Six Sigma</span>
                  <span className="skill-tag">Kaizen</span>
                  <span className="skill-tag">5S</span>
                  <span className="skill-tag">OEE</span>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Software Development</h4>
                <p>Building software solutions with modern programming and automation tools.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">NX Open</span>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Artificial Intelligence & Data</h4>
                <p>Developing intelligent applications and cloud-based data solutions.</p>
                <div className="skill-tags">
                  <span className="skill-tag">AI/ML</span>
                  <span className="skill-tag">Databases</span>
                  <span className="skill-tag">Azure Cloud</span>
                  <span className="skill-tag">Data Analytics</span>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Digital Transformation</h4>
                <p>Integrating technology to modernize workflows and boost productivity.</p>
                <div className="skill-tags">
                  <span className="skill-tag">ERP</span>
                  <span className="skill-tag">Microsoft Dynamics</span>
                  <span className="skill-tag">SAP</span>
                  <span className="skill-tag">Industry 4.0</span>
                  <span className="skill-tag">Smart Manufacturing</span>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Collaboration & Leadership</h4>
                <p>Working globally, mentoring peers, and leading teams effectively.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Team Leadership</span>
                  <span className="skill-tag">Mentoring</span>
                  <span className="skill-tag">Cross-Functional Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;