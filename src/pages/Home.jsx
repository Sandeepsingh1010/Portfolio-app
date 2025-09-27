import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I am <span className="name-highlight">Sandeep Singh</span></h1>
          <h2 className="hero-subtitle">Cross-Industry Software Developer</h2>
          <p className="hero-description">
            Mechanical engineer transitioning into software, AI, and web development,
            merging CAD expertise with coding to create innovative solutions.
          </p>
          
          <div className="mission-statement">
            <h3>Mission Statement</h3>
            <p>
              Bridging 10+ years of mechanical design expertise with cutting-edge software development 
              to deliver innovative solutions. I leverage extensive CAD/CAM/PLM experience alongside 
              modern AI and software engineering skills to drive digital transformation and create 
              value through technology.
            </p>
          </div>
          
          <div className="cta-buttons">
            <Link to="/about" className="cta-button primary">
              Learn About Me
            </Link>
            <Link to="/projects" className="cta-button secondary">
              View My Projects
            </Link>
              <Link to="/Connect" className="cta-button secondary">
              Connect with Me
            </Link>
          </div>
        </div>
      </div>
      
      <div className="home-highlights">
        <div className="highlight-card">
          <h3>Engineering Excellence</h3>
          <p>10+ years in mechanical design and CAD/CAM systems</p>
          <div className="skill-tags">
            <span className="skill-tag">Siemens NX</span>
            <span className="skill-tag">PLM</span>
            <span className="skill-tag">CAD/CAM</span>
            <span className="skill-tag">G-code</span>
            <span className="skill-tag">NX-Open API</span>
          </div>
        </div>
        <div className="highlight-card">
          <h3>Software Innovation</h3>
          <p>AI-focused software engineering with cloud computing expertise</p>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Azure Certified</span>
          </div>
        </div>
        <div className="highlight-card">
          <h3>Digital Transformation</h3>
          <p>Leading process optimization and cloud automation initiatives</p>
          <div className="skill-tags">
            <span className="skill-tag">Automation</span>
            <span className="skill-tag">Azure Cloud</span>
            <span className="skill-tag">Process Optimization</span>
            <span className="skill-tag">Team Leadership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;