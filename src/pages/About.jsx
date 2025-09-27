import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-image">
            <div className="image-placeholder">
              <span>SS</span>
            </div>
          </div>
          <div className="about-intro">
            <h1>Sandeep Singh</h1>
            <p className="location">Brampton, ON</p>
            <p className="tagline">Cross Industry skillset CAD/CAM + Software Engineering AI</p>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-description">
            <h2>About Me</h2>
            <p>
              I am a dedicated professional bringing 10+ years of mechanical design and engineering 
              experience, now blending this expertise with software development and continuous improvement. 
              Currently pursuing Software Engineering Technology - Artificial Intelligence at Centennial 
              College, with hands-on projects in Software Engineering, Cloud, AI, and web development.
            </p>
            <p>
              I am looking for roles where I can leverage my extensive CAD/CAM/PLM experience by merging 
              it with software development to deliver innovative solutions. My unique background allows me 
              to bridge the gap between traditional engineering and modern software solutions.
            </p>
          </div>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong> Sandeep.singh1010@gmail.com
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
            <a href="/resume.pdf" className="resume-link" download>
              <button className="resume-button">
                📄 Download Resume (PDF)
              </button>
            </a>
          </div>
          
          <div className="core-skills">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>CAD/CAM Systems</h4>
                <p>Siemens NX, PLM, Template Development</p>
              </div>
              <div className="skill-category">
                <h4>Manufacturing</h4>
                <p>G-code Programming, NX CAM, Process Optimization</p>
              </div>
              <div className="skill-category">
                <h4>Software Development</h4>
                <p>C#, Java, Python, NX-Open API, Automation</p>
              </div>
              <div className="skill-category">
                <h4>Leadership</h4>
                <p>Team Management, Mentoring, Global Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;